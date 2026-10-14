import { PageShell, SubteamsSection } from "../sections";

export const metadata = {
  title: "Subteam Overview",
  description: "See how each UCI Aero Design subteam supports the aircraft.",
  alternates: {
    canonical: "/subteams",
  },
};

export default function SubteamsPage() {
  return (
    <PageShell>
      <SubteamsSection />
    </PageShell>
  );
}
