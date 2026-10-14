import { JourneySection, PageShell } from "../sections";

export const metadata = {
  title: "Our Journey",
  description: "Follow UCI Aero Design's aircraft journey, testing, and competition story.",
  alternates: {
    canonical: "/journey",
  },
};

export default function JourneyPage() {
  return (
    <PageShell>
      <JourneySection />
    </PageShell>
  );
}
