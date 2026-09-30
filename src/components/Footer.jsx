"use client";

import Image from "next/image";
import Link from "next/link";

const footerLinks = {
  Explore: [
    { name: "Templates", href: "#templates" },
    { name: "Services", href: "#services" },
    { name: "How It Works", href: "#work" },
    { name: "About", href: "#about" },
  ],

  Connect: [
    { name: "Start a Project", href: "#contact" },
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "GitHub", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="webaspace-footer relative overflow-hidden px-4 pb-4 md:px-6">
      {/* Ambient glow */}
      <div className="footer-glow footer-glow-blue" />
      <div className="footer-glow footer-glow-purple" />
      <div className="footer-glow footer-glow-pink" />

      <div className="footer-container relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 px-6 py-12 backdrop-blur-xl sm:px-8 md:rounded-[2.5rem] md:px-12 md:py-16">

        {/* Background grid */}
        <div className="footer-grid" />

        <div className="relative z-10">

          {/* Main footer */}
          <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">

            {/* Brand */}
            <div className="max-w-sm">

              <Link
                href="/"
                className="group inline-flex items-center gap-3"
              >
                <div className="relative">

                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-60" />

                  <Image
                    src="/webaspace_logo.png"
                    alt="WebaSpace"
                    width={48}
                    height={48}
                    className="relative object-contain transition-transform duration-500 group-hover:scale-110"
                  />

                </div>

                <span className="text-xl font-semibold tracking-tight text-white">
                  WebaSpace
                </span>
              </Link>


              <p className="mt-6 text-sm font-medium leading-7 text-white/50">
                Building thoughtful digital experiences
                for businesses, creators, and ideas that
                deserve their own space.
              </p>


              <Link
                href="#contact"
                className="footer-project-link group mt-7 inline-flex items-center gap-3"
              >
                <span>
                  Start a project
                </span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>


            {/* Explore */}
            <FooterColumn
              title="Explore"
              links={footerLinks.Explore}
            />


            {/* Connect */}
            <FooterColumn
              title="Connect"
              links={footerLinks.Connect}
            />

          </div>


          {/* Divider */}
          <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:my-14" />


          {/* Bottom */}
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

            <p className="text-xs font-medium text-white/35">
              © {new Date().getFullYear()} WebaSpace.
              All rights reserved.
            </p>


            <div className="flex items-center gap-2">

              <span className="text-xs font-medium text-white/30">
                Built with
              </span>

              <span className="footer-heart">
                ♥
              </span>

              <span className="text-xs font-medium text-white/45">
                for the web
              </span>

            </div>

          </div>

        </div>


        {/* Decorative corners */}
        <div className="footer-corner footer-corner-top-left" />
        <div className="footer-corner footer-corner-top-right" />
        <div className="footer-corner footer-corner-bottom-left" />
        <div className="footer-corner footer-corner-bottom-right" />

      </div>
    </footer>
  );
}


/* -----------------------------------------
   FOOTER COLUMN
----------------------------------------- */

function FooterColumn({ title, links }) {
  return (
    <div>

      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
        {title}
      </h3>


      <div className="mt-5 space-y-3">

        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="footer-link group flex w-fit items-center gap-2"
          >
            <span>
              {link.name}
            </span>

            <span className="footer-link-arrow">
              →
            </span>
          </Link>
        ))}

      </div>

    </div>
  );
}