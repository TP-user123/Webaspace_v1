"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative flex min-h-[calc(100vh-100px)] items-center justify-center overflow-hidden px-6 py-24">

      {/* Interactive ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-[100px] transition-transform duration-700 ease-out"
        style={{
          transform: `translate(
            calc(-50% + ${mouse.x * 40}px),
            calc(-50% + ${mouse.y * 30}px)
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl text-center">

        {/* Eyebrow */}
        <div className="hero-fade-in mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/50 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gradient-to-r from-cyan-400 to-pink-500" />
            Digital Experiences
          </span>
        </div>

        {/* Heading */}
        <h1 className="hero-fade-in-delay text-5xl font-bold leading-[1.05] tracking-[-0.04em] sm:text-6xl md:text-8xl">

          Build your

          <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-[heroGradient_6s_ease_infinite]">
            digital presence.
          </span>

        </h1>

        {/* Description */}
        <p className="hero-fade-in-delay-2 mx-auto mt-7 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
          Modern websites, creative templates and digital experiences
          designed to help businesses stand out in the digital world.
        </p>

        {/* Buttons */}
        <div className="hero-fade-in-delay-3 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

          {/* Primary CTA */}
          <Link
            href="#templates"
            className="group relative overflow-hidden rounded-full p-[1px]"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-80 blur-[1px] transition-all duration-500 group-hover:opacity-100 group-hover:blur-md" />

            <span className="relative flex items-center gap-2 rounded-full bg-[#08080a] px-7 py-3.5 text-sm font-medium text-white transition-all duration-500 group-hover:bg-[#101014]">
              Explore Templates

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>

          {/* Secondary CTA */}
          <Link
            href="#services"
            className="rounded-full border border-white/10 bg-white/[0.035] px-7 py-3.5 text-sm font-medium text-white/70 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
          >
            Explore Services
          </Link>

        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-3 text-white/25">
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Scroll to explore
          </span>

          <div className="flex h-10 w-6 justify-center rounded-full border border-white/10 p-1">
            <span className="h-2 w-1 rounded-full bg-gradient-to-b from-cyan-400 to-pink-500 animate-bounce" />
          </div>
        </div>

      </div>
    </section>
  );
}