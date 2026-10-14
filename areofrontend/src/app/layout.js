import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  siteDescription,
  siteImage,
  siteKeywords,
  siteName,
  siteSections,
  siteUrl,
} from "./site";

const siteImageUrl = `${siteUrl}${siteImage}`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | UC Irvine Aircraft Design Team`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: siteKeywords,
  authors: [{ name: "UCI Aero Design" }],
  creator: "UCI Aero Design",
  publisher: "UCI Aero Design",
  category: "education",
  classification: "Student aerospace engineering team",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteName} | UC Irvine Aircraft Design Team`,
    description: siteDescription,
    url: "/",
    siteName,
    images: [
      {
        url: siteImage,
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
    title: `${siteName} | UC Irvine Aircraft Design Team`,
    description: siteDescription,
    images: [siteImage],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        alternateName: ["Aero Design UCI", "UC Irvine Aero Design"],
        url: siteUrl,
        logo: `${siteUrl}/media/aerodesignuci_logo.jpeg`,
        image: siteImageUrl,
        description: siteDescription,
        email: "uciaerodesign@gmail.com",
        memberOf: {
          "@type": "CollegeOrUniversity",
          name: "University of California, Irvine",
          url: "https://uci.edu",
        },
        knowsAbout: [
          "Aerospace engineering",
          "Aircraft design",
          "Electric RC aircraft",
          "SAE Aero Design West",
          "Manufacturing",
          "Propulsion and avionics",
          "Aerodynamics",
        ],
        sameAs: [
          "https://www.instagram.com/aerodesignuci/",
          "https://www.linkedin.com/company/aerodesignuci/",
          "https://linktr.ee/uciaerodesign",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: siteName,
        url: siteUrl,
        description: siteDescription,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": `${siteUrl}/#webpage`,
        name: `${siteName} | UC Irvine Aircraft Design Team`,
        url: siteUrl,
        description: siteDescription,
        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
        about: {
          "@id": `${siteUrl}/#organization`,
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: siteImageUrl,
          width: 1158,
          height: 772,
        },
        hasPart: siteSections.slice(1).map((section) => ({
          "@type": "WebPageElement",
          name: section.label,
          url: `${siteUrl}${section.path}`,
        })),
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
