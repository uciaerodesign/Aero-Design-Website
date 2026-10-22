export const linktreeUrl =
  "https://linktr.ee/uciaerodesign?utm_source=linktree_profile_share&ltsid=6b182c60-f657-419e-b3a5-d9c96b646fc1";
export const zotFunderUrl = "https://zotfunder.give.uci.edu/project/48494";
export const instagramUrl = "https://www.instagram.com/aerodesignuci/";
export const linkedInUrl = "https://www.linkedin.com/company/aerodesignuci/posts/?feedView=all";
export const aniLimGmailUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=anil@uci.edu";
export const signUpLink = "https://forms.gle/ucNq92tzTGHzaXD7A";

export const navigationItems = [
  { label: "Home", href: "/" },
  { label: "Subteam Overview", href: "/subteams" },
  { label: "The Team", href: "/team" },
  { label: "Our Journey", href: "/journey" },
  { label: "News", href: "/news" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Sponsor Us", href: "/sponsor-us" },
  { label: "Contact", href: "/contact" },
];

export const teamLeaders = [
  {
    name: "Andrew Zhang",
    title: "Project Manager",
    image: "/media/team-leaders/andrew-zhang.jpg",
  },
  {
    name: "Samith Varamballi",
    title: "Structures Chief Engineer",
    image: "/media/team-leaders/samith-varamballi.jpg",
  },
  {
    name: "Jibin Jiju",
    title: "Aerodynamics Chief Engineer",
    image: "/media/team-leaders/jibin-jiju.jpg",
  },
  {
    name: "Ani Lim",
    title: "Operations Lead",
    image: "/media/team-leaders/ani-lim.jpg",
  },
  {
    name: "Caden Chang",
    title: "Aerodynamics Lead",
    image: "/media/team-leaders/caden-chang.jpg",
  },
  {
    name: "Eva Maya",
    title: "Manufacturing Lead",
    image: "/media/team-leaders/eva-maya.jpg",
  },
  {
    name: "Sean Pelletier",
    title: "Propulsion & Avionics Co-Lead",
    image: "/media/team-leaders/sean-pelletier.jpg",
  },
  {
    name: "Alexey Elaev",
    title: "Propulsion & Avionics Co-Lead",
    image: "/media/team-leaders/alexey-elaev.png",
  },
  {
    name: "Zachary Vogelsang",
    title: "Structures Co-Lead",
    image: "/media/team-leaders/zachary-vogelsang.jpg",
  },
  {
    name: "Sophia Vieira",
    title: "Structures Co-Lead",
    image: "/media/team-leaders/sophia-vieira.jpg",
  },
];

export const subteamOverviews = [
  {
    name: "Aerodynamics",
    overview:
      "The aerodynamics subteam handles the primary conceptual aircraft design for Aero Design. Using OpenVSP and MATLAB, we create initial designs and calculate performance across different aircraft configurations while ensuring compliance with competition rules. We then refine these designs with the help of STAR-CCM+ and XFLR5 to optimize performance before handing them off to the Structures and Manufacturing subteams. From there, the subteam helps build the aircraft and contributes to the competition design report.",
  },
  {
    name: "Propulsion & Avionics",
    overview:
      "P&A subteam is responsible for designing, integrating, and testing the aircraft's propulsion and electronic systems. Our team conducts research and development in areas including motor and propeller optimization, theoretical and practical thrust testing, radio and servo integration and setup, and overall system reliability. Through analysis of the aircraft's performance and iterative design, Propulsion & Avionics subteam ensures the aircraft performs safely, efficiently, and reliably throughout flight testing and competition.",
  },
  {
    name: "Manufacturing",
    overview:
      "The manufacturing subteam is responsible for turning the aircraft design into a competition-ready plane. We ensure high standards throughout the build process by designing and fabricating assembly jigs and fixtures, creating and applying GD&T principles to produce accurate, repeatable components. The team also develops and executes testing procedures, research and development to improve manufacturing methods, and works closely with other subteams to ensure the final aircraft is built efficiently and to specification.",
  },
  {
    name: "Structures (F)",
    overview:
      "The structures (fuselage) sub-team is responsible for our aircraft's main body, cargo bay, electronics bay, steering system, and landing gear: adhering to annual competition specs, aerodynamic constraints, and DFM/DFA principles. We optimize and validate our design's structural integrity under both flight and ground loads using FEA and classical stress analysis before handing off our technical drawings to manufacturing.",
  },
  {
    name: "Structures (W&T)",
    overview:
      "The structures wing and tail subteam is responsible for designing the aircraft's internal wing and tail members within competition constraints and aerodynamic requirements. This includes rib layouts for the selected airfoil, truss, spar, and stringer design, and integration with propulsion and control systems. Members verify structural integrity with FEA, support manufacturing after the design is complete, and provide build guidance for their designs.",
  },
  {
    name: "Operations",
    overview:
      "The operations subteam deals with all aspects of marketing, business, and project management. We handle the logistics for all team branding, recruitment, and industry outreach while maintaining the financial and logistical backbone of our project. The subteam ensures that we are all seen as a team and makes sure we have the funds to take off.",
  },
];

export const orgChart = [
  {
    level: "Program",
    groups: [
      {
        title: "Project Manager",
        names: ["Andrew Zhang"],
      },
      {
        title: "Advisor",
        names: ["Professor Larue"],
      },
      {
        title: "Technical Advisor",
        names: ["Colin Sledge"],
      },
    ],
  },
  {
    level: "Chief Engineers",
    groups: [
      {
        title: "Structures & Manufacturing Chief Engineer",
        names: ["Samith Varamballi"],
      },
      {
        title: "Aerodynamics Chief Engineer",
        names: ["Jibin Jiju"],
      },
    ],
  },
  {
    level: "Subteam Leads",
    groups: [
      {
        title: "Structures W&T Lead",
        names: ["Zachary Vogelsang"],
      },
      {
        title: "Structures F Lead",
        names: ["Sophia Vieira"],
      },
      {
        title: "Manufacturing Lead",
        names: ["Eva Maya"],
      },
      {
        title: "Propulsion & Avionics Leads",
        names: ["Sean Pelletier", "Alexey Elaev"],
      },
      {
        title: "Aerodynamics Lead",
        names: ["Caden Chang"],
      },
      {
        title: "Operations Lead",
        names: ["Ani Lim"],
      },
    ],
  },
  {
    level: "Engineering & Operations Teams",
    groups: [
      {
        title: "Structures F Engineers",
        names: ["Preston Hariadi", "Elina Nazhadi", "Samantha Esparza", "Abhinaav Balaji"],
      },
      {
        title: "Structures W&T Engineers",
        names: ["Athaliah Franklin", "Kaireese Monroy", "Ricardo Vera", "Ethan Lee"],
      },
      {
        title: "Manufacturing Engineers",
        names: ["Smaran Mishra", "Mina Salib", "Katie Lien", "Shishir Subramanya"],
      },
      {
        title: "P&A Engineers",
        names: ["Likhith Bollam", "Lingbo Wan", "Brennan Dupart"],
      },
      {
        title: "Aerodynamics Engineers",
        names: [
          "Brian Chen",
          "Anan Bagdi",
          "Anay Kamboj",
          "Ella Delgado",
          "Austin Hsu",
          "Marcus Perry",
          "Haris Asic",
        ],
      },
      {
        title: "Operations & Outreach",
        names: ["Leon Li", "Haley Lam", "Adani Ahmad", "Zhiyuan Rong", "Annie Dinh"],
      },
    ],
  },
];

export const journeyTabs = [
  {
    year: "2025-2026",
    plane: "Zot Force One",
    status: "SAE Aero Design West",
    copy:
      "As of March 2026, Aero Design has finally touched down back in Irvine after an incredible weekend in Fort Worth, Texas! It was an honor to stand on the flight line at the SAE Aero Design West competition. We competed alongside many talented colleges and universities that built planes from Micro to Advanced class.",
  },
  {
    year: "2024-2025",
    plane: "Ant-Eat-Air",
    status: "Testing and validation",
    copy:
      "Ant-Eat-Air pushed the team through a demanding cycle of structural validation, subteam coordination, fabrication, and flight readiness.",
  },
];

export const newsItems = [
  {
    label: "Instagram",
    date: "October 20, 2026",
    title: "Welcome, Mach Industries",
    summary:
      "Aero Design welcomed Mach Industries as a supporter for the 2026-2027 season and thanked the company for supporting the next generation of engineers.",
    imageSrc: "/media/news-instagram-mach.jpg",
    imageAlt: "Aero Design at UCI graphic from the Mach Industries sponsor announcement",
    href: "https://www.instagram.com/aerodesignuci/p/DeudMi8OjYy/",
  },
  {
    label: "Instagram",
    date: "October 19, 2026",
    title: "Something Big Is Landing",
    summary:
      "The team shared a preview of a new October announcement and invited followers to watch for what comes next.",
    imageSrc: "/media/news-instagram-teaser.jpg",
    imageAlt: "October teaser graphic from Aero Design at UCI",
    href: "https://www.instagram.com/aerodesignuci/p/DesJROAyB6K/",
  },
  {
    label: "Instagram",
    date: "October 16, 2026",
    title: "Cross-ESO Symposium",
    summary:
      "Aero Design showcased its aircraft, met other engineering students, and introduced visitors to the team's work at the Cross-ESO Symposium.",
    imageSrc: "/media/news-instagram-symposium.jpg",
    imageAlt: "Students visiting the Aero Design booth at the Cross-ESO Symposium",
    href: "https://www.instagram.com/aerodesignuci/p/DekCzvHmo8j/",
  },
  {
    label: "LinkedIn",
    date: "Newest LinkedIn Update",
    title: "National Intern Day Member Spotlight",
    summary:
      "Aero Design celebrated members Andrew Zhang, Samantha Esparza, Eva Maya, Annie Dinh, and Smaran Mishra for their internship work.",
    imageSrc: "/media/team-photo.JPG",
    imageAlt: "Aero Design team standing behind their aircraft",
    href: linkedInUrl,
  },
  {
    label: "LinkedIn",
    date: "Recent LinkedIn Update",
    title: "Matthew Madrid Heads to Stanford",
    summary:
      "The team celebrated Matthew Madrid's next chapter: a Mechanical Engineering Ph.D. at Stanford and a graduate internship at Lawrence Livermore National Laboratory.",
    imageSrc: "/media/news-photo-1d.jpeg",
    imageAlt: "Aero Design flight line photo",
    href: linkedInUrl,
  },
];

export const sponsorGroups = [
  {
    season: "2026-2027 Sponsorship",
    summary: "Accepted sponsors for the current aircraft cycle. More are coming up for 2026-2027.",
    sponsors: [
      {
        name: "Polymaker",
        type: "Additive Manufacturing",
        logo: "/media/sponsors/polymaker.png",
        href: "https://polymaker.com/",
      },
      {
        name: "SendCutSend",
        type: "Custom Manufacturing",
        logo: "/media/sponsors/sendcutsend.svg",
        href: "https://sendcutsend.com/",
      },
      {
        name: "Liquid I.V.",
        type: "Hydration Partner",
        logo: "/media/sponsors/liquid-iv.svg",
        logoTheme: "dark",
        href: "https://www.liquid-iv.com/",
      },
      {
        name: "Mach Industries",
        type: "Aerospace & Defense",
        logo: "/media/sponsors/mach-industries.svg",
        logoTheme: "dark",
        href: "https://machindustries.com/",
      },
      {
        name: "Ampaire",
        type: "Hybrid-Electric Aviation",
        logo: "/media/sponsors/ampaire.png",
        logoTheme: "dark",
        href: "https://www.ampaire.com/",
      },
    ],
  },
  {
    season: "2025-2026 Sponsorship",
    summary: "Accepted sponsors from the previous aircraft cycle.",
    sponsors: [
      {
        name: "Salient Motion",
        type: "Aerospace Manufacturing",
        logo: "/media/sponsors/salient-motion.svg",
        href: "https://salientmotion.com/",
      },
      {
        name: "Protocase",
        type: "Custom Manufacturing",
        logo: "/media/sponsors/protocase.png",
        href: "https://www.protocase.com/",
      },
      {
        name: "GoEngineer",
        type: "Engineering Software",
        logo: "/media/sponsors/goengineer.webp",
        href: "https://www.goengineer.com/",
      },
      {
        name: "Polymaker",
        type: "Additive Manufacturing",
        logo: "/media/sponsors/polymaker.png",
        href: "https://polymaker.com/",
      },
    ],
  },
];

export const contactLinks = [
  {
    label: "Linktree",
    title: "Aero Design Links",
    description: "Find the team's active social links, forms, and shared resources.",
    href: linktreeUrl,
    action: "Open Linktree",
  },
  {
    label: "ZotFunder",
    title: "Aero Design ZotFunder",
    description:
      "Support the team through the official ZotFunder link shared by Aero Design.",
    href: zotFunderUrl,
    action: "Open ZotFunder",
  },
  {
    label: "Email",
    title: "uciaerodesign@gmail.com",
    description: "Use the team inbox for club, recruitment, sponsorship, and general questions.",
    href: "mailto:uciaerodesign@gmail.com",
    action: "Email The Team",
  },
  {
    label: "Direct Inquiries",
    title: "Ani Lim",
    description: "For direct Aero Design inquiries, contact Ani Lim.",
    href: aniLimGmailUrl,
    action: "Email Ani Lim",
  },
  {
    label: "Sign Up Link",
    title: "News Sign-Up Link",
    description: "Sign up for the latest updates from the team.",
    href: signUpLink,
    action: "Sign Up to Join",
  },
  {
    label: "Feedback · 2026-2027",
    title: "Zhiyuan Rong",
    description: "For 2026-2027 feedback about the Aero Design website, email Zhiyuan Rong.",
    href: "mailto:zhiyuar2@uci.edu",
    action: "Email Zhiyuan Rong",
  },
];
