"use client";

import Link from "next/link";

const templates = [
  {
    id: 1,
    name: "Aurelia",
    category: "Fashion Store",
    description: "A modern storefront designed for fashion brands.",
    gradient: "from-pink-500/30 via-purple-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    name: "Forge",
    category: "Fitness & Gym",
    description: "A bold website for gyms and fitness studios.",
    gradient: "from-cyan-500/30 via-blue-500/20 to-purple-500/20",
  },
  {
    id: 3,
    name: "Velora",
    category: "Beauty & Salon",
    description: "A refined digital presence for modern salons.",
    gradient: "from-purple-500/30 via-pink-500/20 to-red-500/20",
  },
  {
    id: 4,
    name: "MediCore",
    category: "Healthcare",
    description: "A clean and trustworthy website for clinics.",
    gradient: "from-cyan-500/30 via-teal-500/20 to-blue-500/20",
  },
];

export default function Templates() {
  return (
    <section
      id="templates"
      className="relative px-6 py-28 md:px-10 md:py-36"
    >
      {/* Section heading */}
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-white/35">
              Explore our work
            </p>

            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Templates built
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                to impress.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-white/45 md:text-right">
            Start with a professionally designed foundation and customize
            it around your business.
          </p>

        </div>

        {/* Featured template */}
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] backdrop-blur-xl">

          {/* Gradient glow */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-purple-500/10 blur-[100px] transition-all duration-700 group-hover:bg-purple-500/20" />

          <div className="grid md:grid-cols-[1.5fr_1fr]">

            {/* Preview */}
            <div className="relative min-h-[360px] overflow-hidden border-b border-white/10 md:border-b-0 md:border-r">

              <div
                className={`absolute inset-0 bg-gradient-to-br ${templates[0].gradient}`}
              />

              {/* Fake browser */}
              <div className="absolute inset-6 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0d] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">

                {/* Browser bar */}
                <div className="flex h-10 items-center gap-1.5 border-b border-white/10 px-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>

                {/* Website preview */}
                <div className="flex h-full flex-col items-center justify-center px-6 text-center">

                  <p className="text-[10px] uppercase tracking-[0.3em] text-pink-300/60">
                    Fashion / Collection
                  </p>

                  <h3 className="mt-4 text-3xl font-semibold md:text-5xl">
                    AURELIA
                  </h3>

                  <div className="mt-6 h-px w-24 bg-gradient-to-r from-transparent via-pink-400 to-transparent" />

                  <p className="mt-5 max-w-xs text-xs text-white/35">
                    Contemporary fashion for modern living.
                  </p>

                </div>
              </div>

            </div>

            {/* Information */}
            <div className="flex flex-col justify-between p-8 md:p-10">

              <div>

                <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/45">
                  {templates[0].category}
                </span>

                <h3 className="mt-6 text-3xl font-semibold">
                  {templates[0].name}
                </h3>

                <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
                  {templates[0].description}
                </p>

              </div>

              <Link
                href="#contact"
                className="group/link mt-10 inline-flex items-center gap-3 text-sm font-medium text-white"
              >
                View Template

                <span className="transition-transform duration-300 group-hover/link:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </div>
        </div>

        {/* Smaller templates */}
        <div className="mt-5 grid gap-5 md:grid-cols-3">

          {templates.slice(1).map((template) => (
            <div
              key={template.id}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
            >

              {/* Preview */}
              <div
                className={`relative flex h-52 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${template.gradient}`}
              >

                <div className="absolute inset-5 rounded-xl border border-white/10 bg-[#09090b]/90 shadow-xl transition-transform duration-500 group-hover:scale-[1.03]">

                  <div className="flex h-full items-center justify-center">
                    <span className="text-lg font-semibold tracking-widest text-white/80">
                      {template.name.toUpperCase()}
                    </span>
                  </div>

                </div>

              </div>

              <div className="pt-5">

                <p className="text-xs text-white/35">
                  {template.category}
                </p>

                <div className="mt-2 flex items-center justify-between">

                  <h3 className="font-medium">
                    {template.name}
                  </h3>

                  <span className="text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                    →
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* All templates */}
        <div className="mt-10 text-center">
          <Link
            href="#all-templates"
            className="text-sm text-white/45 transition-colors hover:text-white"
          >
            View all templates →
          </Link>
        </div>

      </div>
    </section>
  );
}