"use client";

import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Website Design & Development",
    description:
      "Modern, responsive websites designed around your brand, audience, and business goals.",
    tags: ["UI/UX", "React", "Next.js"],
    gradient: "from-cyan-400/20 via-blue-500/10 to-transparent",
  },
  {
    number: "02",
    title: "Industry Templates",
    description:
      "Professionally designed website templates for businesses that want to launch quickly.",
    tags: ["Ready to use", "Customizable", "Responsive"],
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
  },
  {
    number: "03",
    title: "Branding",
    description:
      "Build a consistent digital identity with visuals that make your business recognizable.",
    tags: ["Identity", "Visuals", "Design"],
    gradient: "from-pink-500/20 via-purple-500/10 to-transparent",
  },
  {
    number: "04",
    title: "Website Maintenance",
    description:
      "Keep your website updated, secure, fast, and ready for your customers.",
    tags: ["Updates", "Support", "Optimization"],
    gradient: "from-orange-400/20 via-pink-500/10 to-transparent",
  },
  {
    number: "05",
    title: "Drag & Drop Builder",
    description:
      "Create and customize your website without needing to write code.",
    tags: ["No-code", "Easy editing", "Flexible"],
    gradient: "from-emerald-400/20 via-cyan-500/10 to-transparent",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative px-6 py-28 md:px-10 md:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/35">
            What we do
          </p>

          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            Everything you need
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              to grow online.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45 md:text-base">
            From your first idea to a complete digital presence, WebaSpace
            brings design, technology, and creativity together.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-4 md:grid-cols-2">

          {services.map((service, index) => (
            <div
              key={service.number}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Gradient background */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
              />

              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-purple-500/10 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative z-10">

                {/* Top */}
                <div className="flex items-start justify-between">
                  <span className="text-xs tracking-[0.2em] text-white/25">
                    {service.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/40 transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white">
                    ↗
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-12 max-w-2xl text-2xl font-medium tracking-tight md:text-3xl">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-xl text-sm leading-6 text-white/40">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/35 transition-colors duration-300 group-hover:text-white/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover line */}
                <div className="mt-8 h-px w-full bg-white/5">
                  <div className="h-full w-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-700 group-hover:w-full" />
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-[2rem] border border-white/10 bg-white/[0.025] p-6 backdrop-blur-xl sm:flex-row sm:p-8">

          <div>
            <h3 className="text-lg font-medium">
              Have something specific in mind?
            </h3>

            <p className="mt-1 text-sm text-white/40">
              Let's turn your idea into a digital experience.
            </p>
          </div>

          <Link
            href="#contact"
            className="group relative rounded-full p-[1px]"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-60 blur-sm transition-all duration-500 group-hover:opacity-100" />

            <span className="relative flex items-center gap-2 rounded-full bg-[#08080a] px-6 py-3 text-sm text-white">
              Start a conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>

        </div>

      </div>
    </section>
  );
}