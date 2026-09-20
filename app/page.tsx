"use client";

import { useEffect, useRef } from "react";

const NAVY = "#0B1B33";
const NAVY_LIGHT = "#3E4A5E";
const GOLD = "#D4AF37";
const CREAM = "#F5EFE0";

const LOGO_URL =
  "https://g.tlcdn.com/gen/175d6314e8624a27b1c5eec041b069de.png";
const TRAILER_URL =
  "https://g.tlcdn.com/gen/d11a70aff8a74b2bbf30dd0ecaff0b3a.mp4";
const ILLUSTRATION_URL =
  "https://g.tlcdn.com/gen/477d2c9117f34594bfa42b50aa77701c.png";
const CHAPTER_PDF_URL =
  "https://g.tlcdn.com/gen/3d7f2c774e684bb0b69d8f3ba9957b35.pdf";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <main
      className="min-h-screen w-full"
      style={{ backgroundColor: NAVY_LIGHT, color: CREAM }}
    >
      {/* HERO */}
      <section
        className="relative flex flex-col items-center px-6 pt-14 pb-20 text-center overflow-hidden"
        style={{ backgroundColor: NAVY }}
      >
        <img
          src={LOGO_URL}
          alt="DinahMight Books"
          className="w-24 h-24 md:w-28 md:h-28 rounded-full shadow-lg mb-6 object-cover"
        />
        <p
          className="uppercase tracking-[0.3em] text-xs md:text-sm mb-3"
          style={{ color: GOLD }}
        >
          DinahMight Books presents
        </p>
        <h1
          className="font-[family-name:var(--font-playfair)] font-extrabold text-5xl md:text-7xl mb-4 leading-tight"
          style={{ color: GOLD }}
        >
          ROLL CALL!
        </h1>
        <h2
          className="font-[family-name:var(--font-playfair)] text-xl md:text-3xl mb-2"
          style={{ color: CREAM }}
        >
          A 31-Day Gratitude Journey Through the Names of God
        </h2>
        <p className="text-base md:text-lg opacity-80 max-w-xl mt-4">
          Day 1 — <span style={{ color: GOLD }}>Jehovah Jireh</span>: The Lord
          Who Provides
        </p>
      </section>

      {/* CLIFFHANGER VIDEO */}
      <section className="flex flex-col items-center px-6 py-16">
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl md:text-4xl font-bold text-center mb-3">
          She had <span style={{ color: GOLD }}>one meal</span> left.
        </h3>
        <p className="text-center text-lg md:text-xl mb-8 opacity-90 max-w-2xl">
          The prophet Elijah asked her for it{" "}
          <span style={{ color: GOLD, fontWeight: 700 }}>first</span>. Watch
          what happens.
        </p>
        <div className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4" style={{ borderColor: GOLD }}>
          <video
            ref={videoRef}
            src={TRAILER_URL}
            controls
            playsInline
            muted
            loop
            className="w-full h-auto block"
          />
        </div>
      </section>

      {/* STORY TEASE */}
      <section
        className="px-6 py-16"
        style={{ backgroundColor: NAVY }}
      >
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src={ILLUSTRATION_URL}
            alt="The Widow of Zarephath"
            className="rounded-xl shadow-2xl w-full object-cover"
          />
          <div>
            <h3
              className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold mb-4"
              style={{ color: GOLD }}
            >
              Provision Requires Participation
            </h3>
            <p className="text-base md:text-lg opacity-90 mb-4 leading-relaxed">
              &ldquo;As the Lord your God lives, I do not have bread, only a
              handful of flour in a bin, and a little oil in a jar... that we
              may eat it, and die.&rdquo;
            </p>
            <p className="text-sm opacity-60 mb-4">— 1 Kings 17:12, NKJV</p>
            <p className="text-base md:text-lg opacity-90 leading-relaxed">
              What Elijah asked her to do next required{" "}
              <span style={{ color: GOLD, fontWeight: 700 }}>
                impossible faith
              </span>
              . Get the full Day 1 chapter — free — and find out what
              happened when she obeyed anyway.
            </p>
          </div>
        </div>
      </section>

      {/* EMAIL SIGNUP */}
      <section
        id="signup"
        className="px-6 py-20 flex flex-col items-center text-center"
      >
        <h3
          className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-bold mb-4"
          style={{ color: GOLD }}
        >
          Get the Free Day 1 Chapter
        </h3>
        <p className="max-w-xl text-base md:text-lg opacity-90 mb-8">
          Join the ROLL CALL launch list and we&rsquo;ll send the complete
          Day&nbsp;1 chapter — Jehovah Jireh: The Lord Who Provides — straight
          to your inbox, free.
        </p>

        <div
          className="w-full max-w-md rounded-2xl p-6 shadow-2xl"
          style={{ backgroundColor: CREAM }}
        >
          {/* Kit (ConvertKit) embedded form injects here via the script in layout.tsx */}
          <form
            action="https://app.kit.com/forms/9928021/subscriptions"
            className="seva-form formkit-form"
            method="post"
            data-sv-form="9928021"
            data-uid="42e94f10e1"
            data-format="inline"
            data-version="5"
          >
            <div className="flex flex-col gap-3">
              <input
                className="formkit-input w-full rounded-lg px-4 py-3 text-base"
                style={{ color: NAVY, border: `1px solid ${NAVY_LIGHT}` }}
                name="email_address"
                aria-label="Email Address"
                placeholder="Your email address"
                required
                type="email"
              />
              <button
                data-element="submit"
                className="w-full rounded-lg py-3 font-bold text-base tracking-wide transition-opacity hover:opacity-90"
                style={{ backgroundColor: NAVY, color: GOLD }}
              >
                Send Me the Free Chapter
              </button>
            </div>
          </form>
          <p className="text-xs mt-4" style={{ color: NAVY_LIGHT }}>
            No spam. Just Day 1, and updates on the ROLL CALL launch.
          </p>
        </div>

        <a
          href={CHAPTER_PDF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm md:text-base underline decoration-dotted underline-offset-4 hover:opacity-80 transition-opacity"
          style={{ color: GOLD }}
        >
          Prefer to preview it first? View the Day 1 chapter (PDF) →
        </a>
      </section>

      {/* FOOTER */}
      <footer
        className="px-6 py-10 flex flex-col items-center gap-3"
        style={{ backgroundColor: NAVY }}
      >
        <img
          src={LOGO_URL}
          alt="DinahMight Books"
          className="w-12 h-12 rounded-full object-cover"
        />
        <p className="text-xs opacity-60">
          © {new Date().getFullYear()} DinahMight Books. Stories Worth
          Telling.
        </p>
      </footer>
    </main>
  );
}
