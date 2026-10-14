import { instagramUrl, linkedInUrl } from "./content";
import { IntroSection, SiteHeader } from "./sections";

export default function Home() {
  return (
    <main className="bg-black text-white" id="home">
      <section className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 72%", transform: "scale(1.04)" }}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        >
          <source src="/media/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,214,98,0.26),transparent_34%),linear-gradient(180deg,rgba(1,7,18,0.15),rgba(1,7,18,0.75))]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
        <SiteHeader />

        <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-28 sm:px-6 sm:pt-0">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.24em] text-white/72 sm:mb-5 sm:text-[20px] sm:tracking-[0.36em]">
              University of California, Irvine
            </p>
            <h1 className="hero-title max-w-4xl text-[2.4rem] font-semibold uppercase leading-[1.08] tracking-[0.08em] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] sm:text-7xl sm:tracking-[0.12em] md:text-8xl">
              Aero Design
            </h1>
            <p className="hero-subtitle mt-5 max-w-2xl text-sm font-semibold uppercase tracking-[0.22em] text-[white] sm:mt-6 sm:text-lg sm:tracking-[0.28em]">
              Zot From Above
            </p>

            <div className="hero-actions mt-9 flex flex-wrap items-center justify-center gap-3 sm:mt-12">
              <a href="#intro" className="crystal-button hero-button hero-action-button">
                Explore
              </a>
              <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="hero-social-button hero-button hero-action-button">
                Instagram
              </a>
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="hero-social-button hero-button hero-action-button">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <IntroSection />
    </main>
  );
}
