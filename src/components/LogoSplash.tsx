"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export const LogoSplash = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const triggerAnimation = () => {
    setIsVisible(true);
    setIsFadingOut(false);

    // Show animation for 1.8s, then 0.4s fade out
    const timer1 = setTimeout(() => {
      setIsFadingOut(true);
    }, 1800);

    const timer2 = setTimeout(() => {
      setIsVisible(false);
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  };

  useEffect(() => {
    const handleReplay = () => triggerAnimation();
    window.addEventListener("replay-sjs-splash", handleReplay);

    const cleanup = triggerAnimation();

    return () => {
      window.removeEventListener("replay-sjs-splash", handleReplay);
      cleanup();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#2B170E] transition-opacity duration-500 select-none ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full bg-[#E09B3E]/15 blur-3xl animate-pulse" />

      {/* Main Logo Card */}
      <div className="relative flex flex-col items-center z-10 px-6 text-center">
        {/* Animated Logo Image */}
        <div className="relative w-36 h-36 md:w-44 md:h-44 mb-6 shadow-2xl rounded-2xl overflow-hidden border border-[#FAF2E8]/10 animate-splash-logo bg-[#2B170E] p-1">
          <Image
            src="/images/sjs-logo.jpg"
            alt="SJS Bakers Logo"
            fill
            className="object-contain p-1"
            priority
          />
        </div>

        {/* Brand Title */}
        <div className="overflow-hidden">
          <h1 className="font-serif-header text-3xl md:text-4xl font-bold text-[#F8EBD9] tracking-[0.25em] uppercase animate-splash-text">
            SJS BAKERS
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-xs md:text-sm font-medium text-[#D4A574] tracking-[0.3em] uppercase mt-2.5 opacity-90 animate-fade-in">
          Homemade Custom Cakes
        </p>

        {/* Progress Bar */}
        <div className="w-44 h-1 bg-[#4A2412] rounded-full mt-7 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#C47A20] via-[#F8EBD9] to-[#C47A20] animate-splash-bar rounded-full" />
        </div>
      </div>
    </div>
  );
};
