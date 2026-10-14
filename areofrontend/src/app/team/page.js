import { PageShell, TeamSection } from "../sections";

export const metadata = {
  title: "The Team",
  description: "Meet the UCI Aero Design students and leaders behind the aircraft.",
  alternates: {
    canonical: "/team",
  },
};

export default function TeamPage() {
  return (
    <PageShell>
      <TeamSection />
    </PageShell>
  );
}
