import { ContactSection, PageShell } from "../sections";

export const metadata = {
  title: "Contact",
  description: "Contact UCI Aero Design, follow team links, or send sponsorship inquiries.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <ContactSection />
    </PageShell>
  );
}
