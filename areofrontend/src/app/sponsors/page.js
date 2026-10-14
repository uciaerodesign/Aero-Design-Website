import { PageShell, SponsorsSection } from "../sections";

export const metadata = {
  title: "Sponsors",
  description: "See the partners supporting UCI Aero Design's aircraft program.",
  alternates: {
    canonical: "/sponsors",
  },
};

export default function SponsorsPage() {
  return (
    <PageShell>
      <SponsorsSection />
    </PageShell>
  );
}
