import { NewsSection, PageShell } from "../sections";

export const metadata = {
  title: "News",
  description: "Read the latest UCI Aero Design updates from Instagram and LinkedIn.",
  alternates: {
    canonical: "/news",
  },
};

export default function NewsPage() {
  return (
    <PageShell>
      <NewsSection />
    </PageShell>
  );
}
