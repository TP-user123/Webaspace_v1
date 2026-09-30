"use client";

import { useEffect, useRef } from "react";

export default function SpaceBackground() {
  const spaceRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (spaceRef.current) {
        spaceRef.current.style.setProperty("--scroll-y", `${scrollY}px`);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={spaceRef} className="space-background">
      {/* Deep space */}
      <div className="space-stars space-stars-far" />
      <div className="space-stars space-stars-mid" />
      <div className="space-stars space-stars-near" />

      {/* Nebulas */}
      <div className="space-nebula space-nebula-blue" />
      <div className="space-nebula space-nebula-purple" />
      <div className="space-nebula space-nebula-pink" />

      {/* Planets */}
      <div className="space-planet space-planet-one">
        <div className="planet-glow" />
        <div className="planet-surface" />
        <div className="planet-ring" />
      </div>

      <div className="space-planet space-planet-two">
        <div className="planet-glow" />
        <div className="planet-surface" />
      </div>

      <div className="space-planet space-planet-three">
        <div className="planet-glow" />
        <div className="planet-surface" />
        <div className="planet-ring" />
      </div>

      {/* Shooting particles */}
      <div className="space-particle particle-1" />
      <div className="space-particle particle-2" />
      <div className="space-particle particle-3" />
      <div className="space-particle particle-4" />
      <div className="space-particle particle-5" />

      {/* Dark readability layer */}
      <div className="space-vignette" />
    </div>
  );
}