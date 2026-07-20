import Image from "next/image";
import ContactForm from "./ContactForm";

const linktreeUrl =
  "https://linktr.ee/uciaerodesign?utm_source=linktree_profile_share&ltsid=6b182c60-f657-419e-b3a5-d9c96b646fc1";
const zotFunderUrl = "https://zotfunder.give.uci.edu/project/47653";
const aniLimGmailUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=anil@uci.edu";

export default function Home() {
  const navigationItems = [
    { label: "Home", href: "#home" },
    { label: "The Team", href: "#team" },
    { label: "Our Journey", href: "#journey" },
    { label: "News", href: "#news" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Sponsor Us", href: "#sponsor-us" },
    { label: "Contact", href: "#contact" },
  ];

  const journeyTabs = [
    {
      year: "2025-2026",
      plane: "Zot Force One",
      status: "SAE Aero Design West",
      copy:
        "As of March 2026, UCI Aero Design has finally touched down back in Irvine after an incredible weekend in Fort Worth, Texas! It was an honor to stand on the flight line at the SAE Aero Design West competition. We competed alongside many talented colleges and universities that built planes from Micro to Advanced class.",
    },
    {
      year: "2024-2025",
      plane: "Ant-Eat-Air",
      status: "Testing and validation",
      copy:
        "Ant-Eat-Air pushed the team through a demanding cycle of structural validation, subteam coordination, fabrication, and flight readiness.",
    },
  ];

  const newsItems = [
    {
      label: "Competition",
      title: "Zot Force One touched down after SAE Aero Design West",
      summary:
        "The team returned from Fort Worth after competing in Regular class, bringing home a season defined by resilience, flight-line experience, and a stronger foundation for the next aircraft.",
      images: [
        { src: "/api/news-photo-1a", alt: "UCI Aero Design competition photo" },
        { src: "/api/news-photo-1b", alt: "UCI Aero Design aircraft photo" },
        { src: "/api/news-photo-1c", alt: "UCI Aero Design team photo" },
        { src: "/api/news-photo-1d", alt: "UCI Aero Design flight line photo" },
      ],
      href: "https://www.linkedin.com/company/aerodesignuci/posts/",
    },
    {
      label: "Recruitment",
      title: "Applications open for future aircraft builders",
      summary:
        "Aero Design welcomes students from every major and subteam interest, from technical design and manufacturing to operations, sponsorship, and outreach.",
      imageSrc: "/api/news-photo-2",
      imageAlt: "UCI Aero Design recruitment poster",
      href: "https://oel.eng.uci.edu/2026/04/14/aero-design-uci-recruitment-for-2026-2027/",
    },
  ];

  const sponsors = [
    {
      name: "HAAS",
      type: "Monetary Sponsor",
      note: "Supported the 2025-2026 aircraft cycle through direct sponsorship.",
    },
    {
      name: "GoEngineer",
      type: "Monetary Sponsor",
      note: "Helped fund materials, competition preparation, and team resources.",
    },
  ];

  const contactLinks = [
    {
      label: "Linktree",
      title: "UCI Aero Design Links",
      description: "Find the team's active social links, forms, and shared resources.",
      href: linktreeUrl,
      action: "Open Linktree",
    },
    {
      label: "ZotFunder",
      title: "UC Irvine Design/Build/Fly 2025-26",
      description:
        "The most recent ZotFunder campaign has ended and is inactive right now. A new giving link can be added when the next campaign goes live.",
      href: zotFunderUrl,
      action: "View Past Campaign",
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
      title: "anil@uci.edu",
      description: "For direct Aero Design inquiries, contact Ani Lim.",
      href: aniLimGmailUrl,
      action: "Email Ani Lim",
    },
  ];

  return (
    <main className="bg-[#020814] text-white" id="home">
      <section className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 72%", transform: "scale(1.04)" }}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/api/hero-video" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,214,98,0.22),transparent_34%),linear-gradient(180deg,rgba(1,7,18,0.28),rgba(1,7,18,0.86))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020814] to-transparent" />

        <header className="absolute left-0 top-0 z-20 w-full px-4 py-4 sm:px-10 sm:py-6">
          <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/25 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-md lg:flex-row lg:items-center lg:justify-between lg:gap-5 lg:px-5 lg:py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/18 bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-md sm:h-14 sm:w-14">
                <Image
                  src="/api/club-logo"
                  alt="UCI Aero Design logo"
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.24em] text-white/60 sm:text-[11px]">
                  UCI
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white sm:text-sm">
                  Aero Design
                </p>
              </div>
            </div>
            <nav aria-label="Primary">
              <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[11px] font-medium uppercase tracking-[0.14em] text-white/78 sm:justify-end sm:gap-x-8 sm:text-xs">
                {navigationItems.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="inline-flex py-1 transition hover:text-white">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-28 sm:px-6 sm:pt-0">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-white/72 sm:mb-5 sm:text-sm sm:tracking-[0.36em]">
              University of California, Irvine
            </p>
            <h1 className="max-w-4xl text-[2.4rem] font-semibold uppercase leading-[1.08] tracking-[0.08em] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] sm:text-7xl sm:tracking-[0.12em] md:text-8xl">
              UCI Aero Design
            </h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold uppercase tracking-[0.22em] text-[#ffd660] sm:mt-6 sm:text-lg sm:tracking-[0.28em]">
              Zot From Above
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:mt-12">
              <a href="#intro" className="crystal-button inline-flex items-center justify-center px-8 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition duration-300 hover:-translate-y-1 hover:bg-white/24 sm:px-10 sm:py-4">
                Explore
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell" id="intro">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <MediaFrame>
            <Image
              src="/api/team-photo"
              alt="UCI Aero Design team standing behind their aircraft"
              width={1158}
              height={772}
              className="h-full w-full object-cover"
              unoptimized
            />
          </MediaFrame>

          <div>
            <p className="section-kicker">INTRO</p>
            <h2 className="section-title">Undergraduate Aircraft Design At UCI</h2>
            <p className="body-copy">
              UCI Aero Design is an undergraduate project team at the University of
              California, Irvine that designs, builds, and flies electric
              remote-controlled aircraft for SAE Aero Design West.
            </p>
            <p className="body-copy mt-4">
              The team focuses on heavy-lift performance, Short Takeoff and Landing
              efficiency, flight testing, manufacturing, and the hands-on systems
              work that turns a student concept into a competition aircraft.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell" id="team">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="section-kicker">THE TEAM</p>
            <h2 className="section-title">The Students Behind The Aircraft</h2>
            <p className="body-copy">
              Just because we&apos;ve hit the ground running this school year
              doesn&apos;t mean that summer was downtime for us, though. Our team
              stayed productive throughout the break, laying the groundwork for
              everything we&apos;re accomplishing now.
            </p>
            <p className="body-copy mt-4">
              Both our Aerodynamics and P&amp;A subteams spent the season
              brainstorming designs for this competition year, while our Structures
              team worked alongside them to integrate those designs into CAD for our
              Manufacturing team to later execute. Our brand new Operations subteam
              has also been working hard to iron out the logistics behind the scenes
              - with every subteam coming together to form the UCI Cargo Plane team
              that we know and love.
            </p>
            <a href="#contact" className="inline-flex-button mt-7">
              Contact The Team
            </a>
          </div>

          <MediaFrame>
            <Image
              src="/api/team-members-photo"
              alt="UCI Aero Design team members standing beside their aircraft"
              width={576}
              height={768}
              className="h-full w-full object-cover"
              unoptimized
            />
          </MediaFrame>
        </div>
      </section>

      <section className="section-shell" id="journey">
        <div className="mx-auto max-w-6xl">
          <p className="section-kicker">OUR JOURNEY</p>
          <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="section-title">Zot Force One (2025-2026)</h2>
              <p className="body-copy">
                Our plane competed in the Regular class and we pushed through with
                Zot Force One. Beyond the technical specs and flight windows, the
                competition was a testament to our team&apos;s resilience.
              </p>
            </div>
            <a href="#news" className="inline-flex-button">
              Learn More
            </a>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="timeline-panel">
              {journeyTabs.map((item, index) => (
                <article key={item.plane} className="timeline-item">
                  <div className="timeline-dot" />
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ffd660]">
                    {item.year}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[0.04em] text-white">
                    {item.plane}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/50">
                    {item.status}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-white/72">{item.copy}</p>
                  {index === 0 ? (
                    <p className="mt-4 text-sm leading-7 text-white/72">
                      New 2026 competition photos can be swapped in here when the
                      Drive assets are added to the project.
                    </p>
                  ) : null}
                </article>
              ))}
            </div>

            <div className="grid gap-6">
              <MediaFrame>
                <video className="aspect-[16/10] h-full w-full object-cover" controls playsInline preload="metadata">
                  <source src="/api/project-1-video" type="video/mp4" />
                </video>
              </MediaFrame>
              <div className="grid gap-6 sm:grid-cols-2">
                <MediaFrame>
                  <Image
                    src="/api/project-1-photo-a"
                    alt="UCI Aero Design aircraft testing"
                    width={1365}
                    height={768}
                    className="h-full w-full object-cover"
                    unoptimized
                  />
                </MediaFrame>
                <MediaFrame>
                  <Image
                    src="/api/project-1-photo-b"
                    alt="UCI Aero Design project presentation"
                    width={1160}
                    height={768}
                    className="h-full w-full object-cover"
                    unoptimized
                  />
                </MediaFrame>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell" id="news">
        <div className="mx-auto max-w-6xl">
          <p className="section-kicker">NEWS</p>
          <div className="mt-4 max-w-2xl">
            <h2 className="section-title">Latest Updates From Aero Design UCI</h2>
            <p className="body-copy">
              A compact news board for competition recaps, recruitment posts, and
              major team milestones.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {newsItems.map((item) => (
              <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="news-card group">
                {item.images ? (
                  <div className="grid aspect-[4/3] grid-cols-2 grid-rows-2 overflow-hidden">
                    {item.images.map((image) => (
                      <div key={image.src} className="overflow-hidden">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={600}
                          height={600}
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      width={1158}
                      height={772}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      unoptimized
                    />
                  </div>
                )}
                <div className="p-5 sm:p-7">
                  <p className="card-kicker">{item.label}</p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[0.04em] text-white sm:mt-4 sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/72 sm:mt-4">{item.summary}</p>
                  <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-[#ffd660] transition group-hover:text-white">
                    Read Update
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="sponsors">
        <div className="mx-auto max-w-6xl">
          <p className="section-kicker">SPONSORS</p>
          <div className="mt-4 max-w-3xl">
            <h2 className="section-title">Trusted By Partners Who Keep Us Flying</h2>
            <p className="body-copy">
              Current sponsor information is ready to expand with logo artwork and
              plane decal photos when the Drive assets and sponsorship spreadsheet
              are added to the workspace.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {sponsors.map((sponsor) => (
              <article key={sponsor.name} className="sponsor-card">
                <div className="flex h-24 items-center justify-center rounded-lg border border-white/10 bg-white text-[#07101f]">
                  <p className="text-3xl font-black uppercase tracking-[0.08em]">{sponsor.name}</p>
                </div>
                <p className="card-kicker mt-6">{sponsor.type}</p>
                <p className="mt-3 text-sm leading-7 text-white/72">{sponsor.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell" id="sponsor-us">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <MediaFrame>
            <Image
              src="/api/team-photo"
              alt="UCI Aero Design team and aircraft"
              width={1158}
              height={772}
              className="h-full w-full object-cover"
              unoptimized
            />
          </MediaFrame>

          <div>
            <p className="section-kicker">SPONSOR US</p>
            <h2 className="section-title">Fuel The Innovation Of Tomorrow&apos;s Aerospace Leaders</h2>
            <p className="body-copy">
              Partner with UCI Aero Design and directly support the next generation
              of engineers. Your investment provides our team with the cutting-edge
              materials, manufacturing resources, and software needed to push the
              boundaries of UAV technology.
            </p>
            <p className="body-copy mt-4">
              By sponsoring us, you aren&apos;t just funding an aircraft - you are
              empowering students to innovate, compete, and lead the future of
              aviation.
            </p>
            <p className="mt-6 text-lg font-semibold tracking-[0.04em] text-white sm:text-xl">
              If interested?
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex-button">Partner With Us</a>
              <a href={aniLimGmailUrl} target="_blank" rel="noopener noreferrer" className="inline-flex-secondary">Email Ani Lim</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell" id="contact">
        <div className="mx-auto max-w-6xl">
          <p className="section-kicker">CONTACT</p>
          <div className="mt-4 max-w-2xl">
            <h2 className="section-title">Stay Connected With Aero Design UCI</h2>
            <p className="body-copy">
              Follow the team, send direct inquiries, or start a sponsorship
              conversation with the people keeping the aircraft program moving.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {contactLinks.map((link) => (
              <a key={link.title} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} className="link-card group">
                <p className="card-kicker">{link.label}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-[0.04em] text-white sm:mt-4 sm:text-2xl">
                  {link.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/72 sm:mt-4">{link.description}</p>
                <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-[#ffd660] transition group-hover:text-white">
                  {link.action}
                </p>
              </a>
            ))}
          </div>

          <ContactForm />
        </div>
      </section>
    </main>
  );
}

function MediaFrame({ children }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
      {children}
    </div>
  );
}
