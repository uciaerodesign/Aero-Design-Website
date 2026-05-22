import Image from "next/image";

function SectionBackgroundVideo({
  opacityClass = "opacity-[0.24]",
  overlayClass = "bg-[rgba(0,0,0,0.48)]",
  objectPosition = "center center",
}) {
  return (
    <>
      <video
        className={`absolute inset-0 h-full w-full object-cover ${opacityClass}`}
        style={{ objectPosition }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/api/section-background-video" type="video/mp4" />
      </video>
      <div className={`absolute inset-0 ${overlayClass}`} />
    </>
  );
}

export default function Home() {
  const navigationItems = [
    { label: "Homepage", href: "#explore" },
    { label: "Projects", href: "#projects" },
    { label: "News", href: "#news" },
    { label: "Links", href: "#links" },
  ];

  const newsItems = [
    {
      label: "3d ago on LinkedIn",
      title: "Headed to SAE Aero Design West",
      summary:
        "UCI Aero Design shared that the team is officially headed to the SAE Aero Design West competition after focusing on heavy-lift performance, flight stability, and competition readiness from design through test flights.",
      images: [
        {
          src: "/api/news-photo-1a",
          alt: "UCI Aero Design news photo one",
        },
        {
          src: "/api/news-photo-1b",
          alt: "UCI Aero Design news photo two",
        },
        {
          src: "/api/news-photo-1c",
          alt: "UCI Aero Design news photo three",
        },
        {
          src: "/api/news-photo-1d",
          alt: "UCI Aero Design news photo four",
        },
      ],
      href: "https://www.linkedin.com/company/aerodesignuci/posts/",
    },
    {
      label: "1w ago on LinkedIn",
      title: "Application cycle is open",
      summary:
        "The team announced that applications are open and invited students from all majors and subteams to join the group in designing, building, and flying aircraft for SAE competition.",
      imageSrc: "/api/news-photo-2",
      imageAlt: "UCI Aero Design recruitment poster",
      href: "https://www.linkedin.com/company/aerodesignuci/posts/",
    },
  ];

  return (
    <main className="bg-[#020814] text-white">
      <section className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: "center 72%",
            transform: "scale(1.04)",
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/api/hero-video" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(65,127,255,0.18),_transparent_42%),linear-gradient(180deg,rgba(1,7,18,0.34),rgba(1,7,18,0.78))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

        <header className="absolute left-0 top-0 z-20 w-full px-4 py-4 sm:px-10 sm:py-6">
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/18 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.24)] backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:gap-5 sm:rounded-[2rem] sm:px-5 sm:py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-white/18 bg-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-md sm:h-14 sm:w-14">
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
                <p className="text-[10px] uppercase tracking-[0.28em] text-white/60 sm:text-[11px] sm:tracking-[0.35em]">
                  UCI
                </p>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white sm:text-sm sm:tracking-[0.28em]">
                  Aero Design
                </p>
              </div>
            </div>
            <nav aria-label="Primary">
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/78 sm:flex sm:flex-wrap sm:items-center sm:justify-end sm:gap-3 sm:text-sm sm:tracking-[0.28em]">
                {navigationItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="inline-flex py-1 transition hover:text-white sm:px-2"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>

        <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-24 sm:px-6 sm:pt-0">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-white/70 sm:mb-5 sm:text-sm sm:tracking-[0.65em]">
              University of California, Irvine
            </p>
            <h1 className="max-w-4xl text-[2.35rem] font-semibold uppercase leading-[1.08] tracking-[0.16em] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] sm:text-7xl sm:tracking-[0.28em] md:text-8xl">
              UCI AERO DESIGN
            </h1>
            <p className="mt-5 max-w-2xl text-xs uppercase tracking-[0.24em] text-white/70 sm:mt-6 sm:text-base sm:tracking-[0.35em]">
              Design. Build. Fly.
            </p>

            <a
              href="#explore"
              className="crystal-button mt-9 inline-flex items-center justify-center px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-white transition duration-300 hover:-translate-y-1 hover:bg-white/24 hover:shadow-[0_18px_48px_rgba(130,190,255,0.32)] sm:mt-12 sm:px-10 sm:py-4 sm:text-sm sm:tracking-[0.42em]"
            >
              Explore
            </a>
          </div>
        </div>
      </section>

      <section
        id="explore"
        className="relative z-10 overflow-hidden border-t border-white/10 px-4 py-14 sm:px-6 sm:py-20"
      >
        <SectionBackgroundVideo opacityClass="opacity-[0.28]" />
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative z-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:rounded-[2rem]">
            <Image
              src="/api/team-photo"
              alt="UCI Aero Design team standing behind their aircraft"
              width={1158}
              height={772}
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>

          <div className="relative z-10">
            <p className="text-xs uppercase tracking-[0.28em] text-sky-200/80 sm:text-sm sm:tracking-[0.4em]">
              Intro
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[0.06em] text-white sm:text-4xl sm:tracking-[0.08em]">
              Undergraduate aircraft design at UCI
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/78 sm:mt-6 sm:text-lg sm:leading-8">
              UCI Aero Design is an undergraduate project team at the
              University of California, Irvine (UCI) that designs, builds, and
              flies electric remote-controlled (RC) aircraft for the annual SAE
              Aero Design West competition.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/78 sm:mt-5 sm:text-lg sm:leading-8">
              The team focuses on creating aircraft with high heavy-lift
              capabilities and Short Takeoff and Landing (STOL) efficiency.
            </p>
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-12 grid max-w-6xl items-center gap-10 sm:mt-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-sky-200/80 sm:text-sm sm:tracking-[0.4em]">
              Team Members
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-[0.06em] text-white sm:text-4xl sm:tracking-[0.08em]">
              The students behind the aircraft
            </h2>
            <p className="mt-5 text-sm leading-7 text-white/78 sm:mt-6 sm:text-lg sm:leading-8">
              UCI Aero Design is powered by undergraduate members who
              collaborate across design, fabrication, logistics, testing, and
              competition preparation.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/78 sm:mt-5 sm:text-lg sm:leading-8">
              This team section highlights the people who make the club
              possible, from returning members to newer students contributing
              to each aircraft cycle.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:rounded-[2rem]">
            <Image
              src="/api/team-members-photo"
              alt="UCI Aero Design team members standing beside their aircraft"
              width={576}
              height={768}
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="relative z-10 overflow-hidden border-t border-white/10 px-4 py-14 sm:px-6 sm:py-20"
      >
        <SectionBackgroundVideo opacityClass="opacity-[0.28]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.28em] text-sky-200/80 sm:text-sm sm:tracking-[0.4em]">
            Projects
          </p>
          <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold tracking-[0.06em] text-white sm:text-4xl sm:tracking-[0.08em]">
                Ant-Eat-Air
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/78 sm:mt-6 sm:text-lg sm:leading-8">
                Plane Ant-Eat-Air proved itself once again, withstanding an
                impressive 110 lb wing loading — an amazing validation of not
                only our technical design, but also the strength of our
                manufacturing.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] sm:rounded-[2rem]">
              <video
                className="aspect-[16/10] h-full w-full object-cover"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/api/project-1-video" type="video/mp4" />
              </video>
            </div>

            <div className="grid gap-6">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] sm:rounded-[2rem]">
                <Image
                  src="/api/project-1-photo-a"
                  alt="Ant-Eat-Air wing loading test setup"
                  width={1365}
                  height={768}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] sm:rounded-[2rem]">
                <Image
                  src="/api/project-1-photo-b"
                  alt="Ant-Eat-Air project presentation"
                  width={1160}
                  height={768}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <p className="text-sm leading-7 text-white/78 sm:text-lg sm:leading-8">
              Just because we&apos;ve hit the ground running this school year
              doesn&apos;t mean that summer was downtime for us, though. Our
              team stayed productive throughout the break, laying the
              groundwork for everything we&apos;re accomplishing now.
            </p>
            <p className="text-sm leading-7 text-white/78 sm:text-lg sm:leading-8">
              Both our Aerodynamics and P&amp;A subteams spent the season
              brainstorming designs for this competition year, while our
              Structures team worked alongside them to integrate those designs
              into CAD for our Manufacturing team to later execute. Our brand
              new Operations subteam has also been working hard to iron out the
              logistics behind the scenes — with every subteam coming together
              to form the UCI Cargo Plane team that we know and love.
            </p>
          </div>
        </div>
      </section>
      <section
        id="news"
        className="relative z-10 overflow-hidden border-t border-white/10 px-4 py-14 sm:px-6 sm:py-20"
      >
        <SectionBackgroundVideo opacityClass="opacity-[0.28]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.28em] text-sky-200/80 sm:text-sm sm:tracking-[0.4em]">
            News
          </p>
          <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-[0.06em] text-white sm:text-4xl sm:tracking-[0.08em]">
                Latest updates from Aero Design UCI
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/78 sm:mt-6 sm:text-lg sm:leading-8">
                Recent public posts from the team&apos;s LinkedIn page, brought
                into the homepage as a quick news feed.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {newsItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/8 sm:rounded-[2rem]"
              >
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
                  <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-white/55 sm:text-xs sm:tracking-[0.4em]">
                    {item.label}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[0.04em] text-white sm:mt-4 sm:text-2xl sm:tracking-[0.06em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/72 sm:mt-4">
                    {item.summary}
                  </p>
                  <p className="mt-5 text-xs font-medium uppercase tracking-[0.22em] text-sky-200 transition group-hover:text-white sm:mt-6 sm:text-sm sm:tracking-[0.28em]">
                    View LinkedIn Post
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <section
        id="links"
        className="relative z-10 overflow-hidden border-t border-white/10 px-4 py-14 sm:px-6 sm:py-20"
      >
        <SectionBackgroundVideo opacityClass="opacity-[0.28]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.28em] text-sky-200/80 sm:text-sm sm:tracking-[0.4em]">
            Contact
          </p>
          <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-[0.06em] text-white sm:text-4xl sm:tracking-[0.08em]">
                Stay connected with Aero Design UCI
              </h2>
              <p className="mt-5 text-sm leading-7 text-white/78 sm:mt-6 sm:text-lg sm:leading-8">
                Follow the team for project updates, competition posts, and club
                news through our social channels.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <a
              href="https://www.instagram.com/aerodesignuci/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/8 sm:rounded-[2rem] sm:p-7"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-white/55 sm:text-xs sm:tracking-[0.4em]">
                Instagram
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-[0.04em] text-white sm:mt-4 sm:text-2xl sm:tracking-[0.08em]">
                @aerodesignuci
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/72 sm:mt-4">
                See team highlights, aircraft content, and current club updates.
              </p>
              <p className="mt-5 text-xs font-medium uppercase tracking-[0.22em] text-sky-200 transition group-hover:text-white sm:mt-6 sm:text-sm sm:tracking-[0.28em]">
                Open Instagram
              </p>
            </a>

            <a
              href="https://www.linkedin.com/company/aerodesignuci/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.22)] transition hover:-translate-y-1 hover:border-white/25 hover:bg-white/8 sm:rounded-[2rem] sm:p-7"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-white/55 sm:text-xs sm:tracking-[0.4em]">
                LinkedIn
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-[0.04em] text-white sm:mt-4 sm:text-2xl sm:tracking-[0.08em]">
                Aero Design UCI
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/72 sm:mt-4">
                Read announcements, professional updates, and team milestones.
              </p>
              <p className="mt-5 text-xs font-medium uppercase tracking-[0.22em] text-sky-200 transition group-hover:text-white sm:mt-6 sm:text-sm sm:tracking-[0.28em]">
                Open LinkedIn
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
