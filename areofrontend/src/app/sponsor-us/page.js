import { PageShell, SponsorUsSection } from "../sections";

export const metadata = {
  title: "Sponsor Us",
  description: "Partner with UCI Aero Design and support student aerospace engineering.",
  alternates: {
    canonical: "/sponsor-us",
  },
};

export default function SponsorUsPage() {
  return (
    <PageShell>
      <SponsorUsSection />
    </PageShell>
  );
}
