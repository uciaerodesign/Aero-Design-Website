export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://www.aerodesignuci.com"
).replace(/\/$/, "");

export const siteName = "UCI Aero Design";

export const siteDescription =
  "UCI Aero Design is a student-led aerospace engineering team at the University of California, Irvine that designs, builds, and flies electric RC aircraft for SAE Aero Design West.";

export const siteImage = "/media/team-photo.JPG";

export const siteKeywords = [
  "UCI Aero Design",
  "Aero Design UCI",
  "UC Irvine Aero Design",
  "University of California Irvine aerospace",
  "SAE Aero Design West",
  "student aerospace engineering",
  "student aircraft design team",
  "RC aircraft design",
  "UCI engineering project team",
  "electric aircraft design",
];

export const siteSections = [
  {
    path: "/",
    label: "Home",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/subteams",
    label: "Subteam Overview",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/team",
    label: "The Team",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/journey",
    label: "Our Journey",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/news",
    label: "News",
    priority: 0.7,
    changeFrequency: "weekly",
  },
  {
    path: "/sponsors",
    label: "Sponsors",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/sponsor-us",
    label: "Sponsor Us",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    label: "Contact",
    priority: 0.8,
    changeFrequency: "monthly",
  },
];
