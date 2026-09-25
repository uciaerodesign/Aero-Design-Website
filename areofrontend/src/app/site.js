export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "https://aerodesignuci.com"
).replace(/\/$/, "");

export const siteName = "UCI Aero Design";

export const siteDescription =
  "UCI Aero Design is a student-led aircraft design team at the University of California, Irvine that designs, builds, and flies electric RC aircraft for SAE Aero Design West.";

