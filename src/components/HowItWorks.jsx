"use client";

import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, goals, and the kind of digital presence you want to create.",
    label: "Understand",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We turn your ideas into a visual direction with thoughtful layouts, interactions, and a design that fits your brand.",
    label: "Create",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Your design becomes a responsive, fast, and functional website built with modern technology.",
    label: "Develop",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Once everything is ready, your website goes live and your digital space is ready for the world.",
    label: "Go live",
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="work"
      className="how-it-works relative overflow-hidden px-6 py-32 md:px-10 md:py-40"
    >
      {/* Ambient background */}
      <div className="how-orb how-orb-blue" />
      <div className="how-orb how-orb-purple" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =========================
            HEADER
        ========================== */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/35">
            How it works
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-7xl">
            From idea
            <br />

            <span className="how-gradient-text">
              to digital space.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/45 md:text-base">
            A simple process designed to turn your vision into a digital
            experience without unnecessary complexity.
          </p>
        </div>


        {/* =========================
            DESKTOP PROCESS
        ========================== */}

        <div className="relative mt-24 hidden md:block">

          {/* Connecting line */}

          <div className="how-process-line">
            <div className="how-process-progress" />
          </div>


          {/* Steps */}

          <div className="relative grid grid-cols-4 gap-6">

            {steps.map((step, index) => {
              const isActive = activeStep === index;

              return (
                <div
                  key={step.number}
                  className="group relative text-left"
                  onMouseEnter={() => setActiveStep(index)}
                >

                  {/* Step number */}

                  <div
                    className={`how-step-number ${
                      isActive ? "how-step-active" : ""
                    }`}
                  >
                    <span>{step.number}</span>
                  </div>


                  {/* Card */}

                  <div
                    className={`how-step-card ${
                      isActive ? "how-step-card-active" : ""
                    }`}
                  >

                    <div className="relative z-10">

                      <div className="flex items-center justify-between">

                        <span className="text-[10px] uppercase tracking-[0.25em] text-white/25">
                          {step.label}
                        </span>

                        <span
                          className={`text-lg transition-all duration-500 ${
                            isActive
                              ? "rotate-45 text-purple-300"
                              : "text-white/20"
                          }`}
                        >
                          ✦
                        </span>

                      </div>


                      <h3 className="mt-8 text-xl font-medium text-white">
                        {step.title}
                      </h3>


                      <p className="mt-4 text-sm leading-6 text-white/40">
                        {step.description}
                      </p>


                      <div
                        className={`mt-8 h-px transition-all duration-700 ${
                          isActive
                            ? "w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                            : "w-8 bg-white/10"
                        }`}
                      />

                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>


        {/* =========================
            MOBILE PROCESS
        ========================== */}

        <div className="mt-16 space-y-4 md:hidden">

          {steps.map((step, index) => {
            const isActive = activeStep === index;

            return (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`how-mobile-card ${
                  isActive ? "how-mobile-card-active" : ""
                }`}
              >

                <div className="flex items-center gap-4">

                  {/* Number */}

                  <div
                    className={`how-mobile-number ${
                      isActive
                        ? "how-mobile-number-active"
                        : ""
                    }`}
                  >
                    {step.number}
                  </div>


                  {/* Title */}

                  <div className="flex-1 text-left">

                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/25">
                      {step.label}
                    </span>

                    <h3 className="mt-1 text-lg font-medium text-white">
                      {step.title}
                    </h3>

                  </div>


                  <span
                    className={`text-lg transition-all duration-500 ${
                      isActive
                        ? "rotate-45 text-purple-300"
                        : "text-white/20"
                    }`}
                  >
                    ✦
                  </span>

                </div>


                {/* Description */}

                <div
                  className={`grid transition-all duration-500 ${
                    isActive
                      ? "mt-5 grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">

                    <p className="text-sm leading-6 text-white/40">
                      {step.description}
                    </p>

                    <div className="mt-5 h-px w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />

                  </div>
                </div>

              </button>
            );
          })}

        </div>


        {/* =========================
            BOTTOM MESSAGE
        ========================== */}

        <div className="mx-auto mt-20 max-w-2xl text-center">

          <div className="mx-auto mb-7 h-px w-24 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />

          <p className="text-base leading-7 text-white/35 md:text-lg">
            No complicated process.
            <span className="text-white/80">
              {" "}
              Just a clear path from idea to launch.
            </span>
          </p>

        </div>

      </div>
    </section>
  );
}