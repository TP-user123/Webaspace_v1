"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { name: "Templates", href: "#templates" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6 md:pt-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-white/[0.035] px-4 py-3 backdrop-blur-xl transition-all duration-500 hover:border-white/15 md:px-6">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-60" />

            <Image
              src="/webaspace_logo.png"
              alt="WebaSpace"
              width={42}
              height={42}
              className="relative object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          <span className="text-lg font-semibold tracking-tight text-white md:text-xl">
            WebaSpace
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative rounded-full px-4 py-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
            >
              {link.name}

              <span className="absolute bottom-1 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-1/2" />
            </Link>
          ))}
        </div>

        {/* Start a Project */}
        <Link
          href="#contact"
          className="group relative hidden rounded-full p-[1px] md:block"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-70 blur-[1px] transition-all duration-500 group-hover:opacity-100 group-hover:blur-md" />

          <span className="relative flex items-center gap-2 rounded-full bg-[#08080a] px-6 py-3 text-sm font-medium text-white transition-all duration-500 group-hover:scale-[1.03] group-hover:bg-[#101014]">
            <span className="transition-all duration-500 group-hover:text-cyan-300">
              Start a Project
            </span>

            <span className="transition-all duration-500 group-hover:translate-x-1 group-hover:text-pink-400">
              →
            </span>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-px w-5 bg-white transition-transform duration-300 ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />

            <span
              className={`h-px w-5 bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`h-px w-5 bg-white transition-transform duration-300 ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mx-auto max-w-7xl overflow-hidden transition-all duration-500 md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mt-2 rounded-3xl border border-white/10 bg-[#08080a]/90 p-3 backdrop-blur-xl">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 px-4 py-3 text-center text-sm font-medium text-white"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </header>
  );
}