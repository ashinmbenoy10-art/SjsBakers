"use client";

import React from "react";
import { CakeCard } from "./CakeCard";
import { CAKES } from "@/data/cakes";

export const CakeGallery = () => {
  // Select the 4 core cakes requested for the section
  const featuredCakes = CAKES.slice(0, 4);

  return (
    <section className="py-12 md:py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          
          {/* Decorative Heading with Horizontal Accent Lines */}
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="hidden sm:block h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent via-[#C47A20] to-[#C47A20]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C47A20]" />
            <h2 className="font-serif-header text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4A2412] tracking-tight">
              Some Cake Designs
            </h2>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C47A20]" />
            <div className="hidden sm:block h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent via-[#C47A20] to-[#C47A20]" />
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-[#7A5C4A] font-normal">
            Explore our most loved cake designs, crafted with care and creativity.
          </p>
          <div className="pt-2.5">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#C47A20] bg-[#FAF2E8] px-4 py-1.5 rounded-full border border-[#E8D4C0] shadow-xs">
              Custom cakes priced from ₹800 onwards
            </span>
          </div>
        </div>

        {/* 4 CAKE CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredCakes.map((cake) => (
            <CakeCard key={cake.id} cake={cake} />
          ))}
        </div>

      </div>
    </section>
  );
};
