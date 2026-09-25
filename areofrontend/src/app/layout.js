import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { siteDescription, siteName, siteUrl } from "./site";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "UCI Aero Design",
    "Aero Design UCI",
    "UC Irvine Aero Design",
    "SAE Aero Design West",
    "UCI aircraft design",
    "student aerospace engineering",
  ],
  authors: [{ name: "UCI Aero Design" }],
  creator: "UCI Aero Design",
  publisher: "UCI Aero Design",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: "/",
    siteName,
    images: [
      {
        url: "/media/team-photo.JPG",
        width: 1158,
        height: 772,
        alt: "UCI Aero Design team standing behind their aircraft",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/media/team-photo.JPG"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png?v=3",
    shortcut: "/icon.png?v=3",
    apple: "/icon.png?v=3",
  },
};

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: "University of California, Irvine",
      sameAs: "https://uci.edu",
    },
    sameAs: [
      "https://www.instagram.com/aerodesignuci/",
      "https://www.linkedin.com/company/aerodesignuci/",
    ],
  };

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
