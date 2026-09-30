"use client";

import Image from "next/image";

const benefits = [
  {
    number: "01",
    title: "Designed to stand out",
    description:
      "Thoughtful design that helps your business create a strong first impression.",
  },
  {
    number: "02",
    title: "Built around you",
    description:
      "Start with a template or build something completely custom around your needs.",
  },
  {
    number: "03",
    title: "Ready to evolve",
    description:
      "Your digital presence can grow with your business, products, and audience.",
  },
  {
    number: "04",
    title: "Everything in one space",
    description:
      "Design, development, branding, and maintenance brought together.",
  },
];

export default function WhyWebaSpace() {
  return (
    <section
      id="about"
      className="why-webaspace relative overflow-hidden px-6 py-32 md:px-10 md:py-44"
    >
      {/* Ambient background */}
      <div className="why-orb-bg why-orb-bg-blue" />
      <div className="why-orb-bg why-orb-bg-purple" />
      <div className="why-orb-bg why-orb-bg-pink" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =========================
            SECTION INTRO
        ========================== */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/35">
            Why WebaSpace
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-7xl">
            More than a website.
          </h2>

          <h3 className="why-gradient-heading mt-2 text-4xl font-semibold sm:text-5xl md:text-7xl">
            A digital space.
          </h3>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/45 md:text-base">
            We combine design, technology, and creativity to create digital
            experiences that feel like your business.
          </p>
        </div>

        {/* =========================
            CENTER VISUAL
        ========================== */}

        <div className="relative mx-auto mt-24 max-w-6xl">
          {/* =========================
              DESKTOP ORBITS
          ========================== */}

          <div className="why-orbit why-orbit-one" />
          <div className="why-orbit why-orbit-two" />

          {/* Desktop orbit particles */}

          <div className="why-particle why-particle-one" />
          <div className="why-particle why-particle-two" />
          <div className="why-particle why-particle-three" />
          <div className="why-particle why-particle-four" />

          {/* =========================
              CENTER AREA
          ========================== */}

          <div className="relative mx-auto flex h-[320px] w-[320px] items-center justify-center md:h-[420px] md:w-[420px]">
            {/* Desktop logo system */}

            <div className="why-logo-ring absolute inset-5 rounded-full" />

            <div className="why-logo-glow absolute inset-16 rounded-full" />

            <div className="why-logo-container group relative flex h-52 w-52 items-center justify-center rounded-full border border-white/10 bg-[#07070a]/80 backdrop-blur-xl md:h-64 md:w-64">
              <div className="why-logo-gradient absolute inset-0 rounded-full opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="absolute inset-3 rounded-full border border-white/5" />

              <Image
                src="/webaspace_logo.png"
                alt="WebaSpace"
                width={150}
                height={150}
                className="relative z-10 h-28 w-28 object-contain transition-all duration-700 group-hover:scale-110 md:h-36 md:w-36"
              />
            </div>

            {/* =========================
                MOBILE VISUAL
            ========================== */}

            
          </div>

          {/* =========================
              BENEFIT CARDS
          ========================== */}

          <div className="mt-10 grid gap-4 md:absolute md:inset-0 md:mt-0 md:grid-cols-2">
            <div className="why-card md:absolute md:left-0 md:top-0">
              <BenefitCard benefit={benefits[0]} />
            </div>

            <div className="why-card md:absolute md:right-0 md:top-0">
              <BenefitCard benefit={benefits[1]} />
            </div>

            <div className="why-card md:absolute md:bottom-0 md:left-0">
              <BenefitCard benefit={benefits[2]} />
            </div>

            <div className="why-card md:absolute md:bottom-0 md:right-0">
              <BenefitCard benefit={benefits[3]} />
            </div>
          </div>
        </div>

        {/* =========================
            BOTTOM MESSAGE
        ========================== */}

        <div className="mx-auto mt-24 max-w-2xl text-center">
          <div className="mx-auto mb-7 h-px w-24 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />

          <p className="text-lg leading-8 text-white/45 md:text-xl">
            Your website shouldn&apos;t just exist.
            <span className="text-white">
              {" "}
              It should create an impression.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}


/* =================================
   BENEFIT CARD
================================= */

function BenefitCard({ benefit }) {
  return (
    <div className="why-benefit-card group relative w-full overflow-hidden rounded-[1.75rem] p-[1px] md:w-[290px]">
      {/* Gradient border */}

      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 via-purple-500/0 to-pink-500/0 transition-all duration-700 group-hover:from-cyan-400/50 group-hover:via-purple-500/40 group-hover:to-pink-500/50" />

      {/* Card */}

      <div className="relative rounded-[1.75rem] border border-white/10 bg-[#08080b]/80 p-6 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-[#0c0c11]/90">
        <div className="flex items-center justify-between">
          <span className="text-xs tracking-[0.2em] text-white/25">
            {benefit.number}
          </span>

          <span className="text-white/20 transition-all duration-500 group-hover:rotate-45 group-hover:text-purple-300">
            ✦
          </span>
        </div>

        <h3 className="mt-8 text-sm font-medium text-white">
          {benefit.title}
        </h3>

        <p className="mt-3 text-xs leading-5 text-white/40">
          {benefit.description}
        </p>

        <div className="mt-6 h-px w-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-700 group-hover:w-full" />
      </div>
    </div>
  );
}