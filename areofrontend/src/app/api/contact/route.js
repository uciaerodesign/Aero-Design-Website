import { NextResponse } from "next/server";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const AERO_DESIGN_EMAIL = "uciaerodesign@gmail.com";

export async function POST(request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      { message: "Contact form is not configured yet." },
      { status: 500 }
    );
  }

  const formData = await request.formData();
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const botcheck = String(formData.get("botcheck") || "").trim();

  if (botcheck) {
    return NextResponse.json({ message: "Message received." });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Please fill out every field." },
      { status: 400 }
    );
  }

  const web3FormsData = new FormData();
  web3FormsData.append("access_key", accessKey);
  web3FormsData.append("name", name);
  web3FormsData.append("email", email);
  web3FormsData.append("replyto", email);
  web3FormsData.append("to", AERO_DESIGN_EMAIL);
  web3FormsData.append("subject", `Aero Design Inquiry from ${name}`);
  web3FormsData.append("from_name", "Aero Design Website");
  web3FormsData.append("message", message);

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    body: web3FormsData,
  });
  const result = await response.json().catch(() => null);

  if (!response.ok || result?.success === false) {
    return NextResponse.json(
      { message: result?.message || "Message could not be sent." },
      { status: 502 }
    );
  }

  return NextResponse.json({ message: "Message sent." });
}
