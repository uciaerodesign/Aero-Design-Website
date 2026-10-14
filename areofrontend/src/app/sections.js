import Image from "next/image";
import ContactForm from "./ContactForm";
import MobileNav from "./MobileNav";
import {
  contactLinks,
  journeyTabs,
  navigationItems,
  newsItems,
  orgChart,
  sponsorGroups,
  subteamOverviews,
  teamLeaders,
} from "./content";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-white/15 bg-[linear-gradient(180deg,rgba(2,8,20,0.82),rgba(2,8,20,0.64))] shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-2xl backdrop-saturate-150">
      <div className="flex w-full flex-col gap-3 px-4 py-2 pb-3 sm:px-10 sm:pt-5 md:flex-row md:items-center md:justify-between md:gap-5">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-white/18 bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-md sm:h-14 sm:w-14">
            <Image
              src="/media/aerodesignuci_logo.jpeg"
              alt="Aero Design logo"
              width={56}
              height={56}
              className="h-full w-full object-cover"
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
          <MobileNav items={navigationItems} />
        </div>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex flex-wrap justify-end gap-x-8 gap-y-1 text-[13px] font-small uppercase tracking-[0.14em] text-white/78">
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
  );
}

export function PageShell({ children }) {
  return (
    <main className="min-h-screen bg-black text-white">
      <SiteHeader />
      <div className="pt-24 sm:pt-32">{children}</div>
    </main>
  );
}

export function MediaFrame({ children }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
      {children}
    </div>
  );
}

export function IntroSection() {
  return (
    <section className="section-shell" id="intro">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <MediaFrame>
          <Image
            src="/media/team-photo.JPG"
            alt="Aero Design team standing behind their aircraft"
            width={1158}
            height={772}
            className="h-full w-full object-cover"
          />
        </MediaFrame>

        <div>
          <p className="section-kicker">INTRO</p>
          <h2 className="section-title">Undergraduate Aircraft Design At UCI</h2>
          <p className="body-copy">
            Aero Design is an undergraduate project team at the University of
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
  );
}

export function SubteamsSection() {
  return (
    <section className="section-shell" id="subteams">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">SUBTEAM OVERVIEW</p>
        <div className="mt-4 max-w-3xl">
          <h2 className="section-title">How Each Subteam Supports The Aircraft</h2>
          <p className="body-copy">
            Aero Design is built through focused subteams that carry the aircraft
            from early design through manufacturing, testing, competition, and
            outreach.
          </p>
        </div>

        <div className="subteam-grid mt-10">
          {subteamOverviews.map((subteam) => (
            <article className="subteam-card" key={subteam.name}>
              <h3>{subteam.name}</h3>
              <p>{subteam.overview}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section className="section-shell" id="team">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="section-kicker">THE TEAM</p>
          <h2 className="section-title">The Students Behind The Aircraft</h2>
          <p className="body-copy">
            Aero Design is led by student engineers and operators who turn ideas
            into a competition-ready aircraft. Our leaders coordinate design,
            manufacturing, testing, logistics, and outreach across every stage of
            the build season.
          </p>
          <p className="body-copy mt-4">
            Meet the team leaders guiding Zot Force One and the next generation of
            UCI aircraft.
          </p>
          <a href="/contact" className="inline-flex-button mt-7">
            Contact The Team
          </a>
        </div>

        <MediaFrame>
          <Image
            src="/media/team-members.jpeg"
            alt="Aero Design team members standing beside their aircraft"
            width={576}
            height={768}
            className="h-full w-full object-cover"
          />
        </MediaFrame>
      </div>

      <div className="mx-auto mt-12 max-w-6xl sm:mt-16">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="card-kicker">Organization Chart</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-[0.04em] text-white sm:text-3xl">
              2026-2027 Team Structure
            </h3>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/64">
            A snapshot of how the program, chief engineers, and subteam leads
            coordinate the aircraft cycle.
          </p>
        </div>

        <div className="org-chart">
          {orgChart.map((row) => (
            <div className="org-row" key={row.level}>
              <p className="org-level">{row.level}</p>
              <div className="org-groups">
                {row.groups.map((group, groupIndex) => (
                  <article className="org-node" key={`${row.level}-${group.title}-${groupIndex}`}>
                    <h4>{group.title}</h4>
                    {group.names.map((name) => (
                      <p key={name}>{name}</p>
                    ))}
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl sm:mt-16">
        <div className="mb-7">
          <p className="card-kicker">Leadership</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[0.04em] text-white sm:text-3xl">
            2026-2027 Leads
          </h3>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teamLeaders.map((member) => (
            <article key={member.name} className="leader-card">
              <div className="leader-photo">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.title}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:p-5">
                <h3 className="text-lg font-semibold tracking-[0.03em] text-white sm:text-xl">
                  {member.name}
                </h3>
                <p className="mt-2 text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-[#ffd660]">
                  {member.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JourneySection() {
  return (
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
          <a href="/news" className="inline-flex-button">
            Learn More
          </a>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="timeline-panel">
            {journeyTabs.map((item) => (
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
              </article>
            ))}
          </div>

          <div className="grid gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <MediaFrame>
                <Image
                  src="/media/project-1-photo-a.jpeg"
                  alt="Aero Design aircraft testing"
                  width={1365}
                  height={768}
                  className="h-full w-full object-cover"
                />
              </MediaFrame>
              <MediaFrame>
                <Image
                  src="/media/project-1-photo-b.jpeg"
                  alt="Aero Design project presentation"
                  width={1160}
                  height={768}
                  className="h-full w-full object-cover"
                />
              </MediaFrame>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <MediaFrame>
                <Image
                  src="/media/journey-plane-build.jpeg"
                  alt="Aero Design members building the Zot Force One aircraft frame"
                  width={1800}
                  height={1201}
                  className="h-full w-full object-cover"
                />
              </MediaFrame>
              <MediaFrame>
                <Image
                  src="/media/journey-plane-build-2.jpeg"
                  alt="Aero Design members working on the Zot Force One aircraft frame"
                  width={1800}
                  height={1201}
                  className="h-full w-full object-cover"
                />
              </MediaFrame>
            </div>
            <MediaFrame>
              <video className="aspect-[16/10] h-full w-full object-cover" controls playsInline preload="metadata">
                <source src="/media/project-1-video.mp4" type="video/mp4" />
              </video>
            </MediaFrame>
          </div>
        </div>
      </div>
    </section>
  );
}

export function NewsSection() {
  return (
    <section className="section-shell" id="news">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">NEWS</p>
        <div className="mt-4 max-w-2xl">
          <h2 className="section-title">Latest Updates From Aero Design</h2>
          <p className="body-copy">
            A compact news board for competition recaps, recruitment posts, and
            major team milestones.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {newsItems.map((item) => (
            <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="news-card group">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={1158}
                  height={772}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5 sm:p-7">
                <p className="card-kicker">{item.label}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/48">
                  {item.date}
                </p>
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
  );
}

export function SponsorsSection() {
  return (
    <section className="section-shell" id="sponsors">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">SPONSORS</p>
        <div className="mt-4 max-w-3xl">
          <h2 className="section-title">Partners Supporting Aero Design</h2>
          <p className="body-copy">
            These accepted sponsors help Aero Design turn student-built aircraft
            concepts into flight-ready competition hardware across each build
            season.
          </p>
        </div>

        <div className="mt-10 grid gap-10">
          {sponsorGroups.map((group) => (
            <div className="sponsor-season" key={group.season}>
              <div className="sponsor-roadmap-dot" aria-hidden="true" />
              <div className="sponsor-season-heading">
                <div>
                  <p className="card-kicker">Roadmap</p>
                  <h3>{group.season}</h3>
                </div>
                <p>{group.summary}</p>
              </div>

              <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {group.sponsors.map((sponsor) => (
                  <a key={`${group.season}-${sponsor.name}`} href={sponsor.href} target="_blank" rel="noopener noreferrer" className="sponsor-card group">
                    <div className="sponsor-logo-wrap">
                      <Image
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        width={320}
                        height={120}
                        className="sponsor-logo"
                      />
                    </div>
                    <p className="card-kicker mt-6">{sponsor.type}</p>
                    <h4 className="mt-3 text-xl font-semibold tracking-[0.04em] text-white">
                      {sponsor.name}
                    </h4>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SponsorUsSection() {
  return (
    <section className="section-shell" id="sponsor-us">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <MediaFrame>
          <Image
            src="/media/team-photo.JPG"
            alt="Aero Design team and aircraft"
            width={1158}
            height={772}
            className="h-full w-full object-cover"
          />
        </MediaFrame>

        <div>
          <p className="section-kicker">SPONSOR US</p>
          <h2 className="section-title">Fuel The Innovation Of Tomorrow&apos;s Aerospace Leaders</h2>
          <p className="body-copy">
            Partner with Aero Design and directly support the next generation of
            engineers. Your investment provides our team with the cutting-edge
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
            <a href="/contact" className="inline-flex-button">Partner With Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="section-shell" id="contact">
      <div className="mx-auto max-w-6xl">
        <p className="section-kicker">CONTACT</p>
        <div className="mt-4 max-w-2xl">
          <h2 className="section-title">Stay Connected With Aero Design</h2>
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
  );
}
