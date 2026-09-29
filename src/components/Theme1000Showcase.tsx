"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Check, AlertTriangle, ShoppingBag, ShieldCheck } from "lucide-react";
import { THEME_1000_CAKES, Theme1000Cake } from "@/data/theme1000";
import { useOrderModal } from "@/context/OrderContext";

export const Theme1000Showcase = () => {
  const { openOrderModal } = useOrderModal();

  return (
    <section className="py-16 md:py-24 bg-[#FFFDF9] relative overflow-hidden border-t border-b border-[#E8D4C0]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF2E8] border border-[#C47A20]/40 text-[#C47A20] text-xs sm:text-sm font-bold tracking-wide uppercase shadow-sm">
            <Sparkles className="w-4 h-4 text-[#C47A20]" />
            <span>Theme & Character Collection</span>
          </div>

          <h2 className="font-serif-header text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4A2412] tracking-tight">
            1000 Onwards Theme Cakes
          </h2>

          <p className="text-base sm:text-lg text-[#7A5C4A] leading-relaxed">
            Bring your favorite characters and sports themes to life! From 3D ballgown Barbie dolls to Spiderman web action and 3D soccer cakes.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#4A2412] font-semibold pt-1">
            <span className="flex items-center gap-1.5 bg-[#FAF2E8] px-3.5 py-1.5 rounded-full border border-[#E8D4C0]">
              <ShieldCheck className="w-4 h-4 text-[#C47A20]" /> 100% Fresh Homemade Sponge
            </span>
            <span className="flex items-center gap-1.5 bg-[#FFF4E5] px-3.5 py-1.5 rounded-full border border-[#E09B3E]/40 text-[#9A5300]">
              <AlertTriangle className="w-4 h-4 text-[#C47A20]" /> Plastic Toys Are Keepsakes (Non-Edible)
            </span>
          </div>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {THEME_1000_CAKES.map((cake: Theme1000Cake) => (
            <div
              key={cake.id}
              className="bg-white rounded-3xl border border-[#F3E6D5] shadow-bakery hover:shadow-bakery-hover transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#FAF2E8]">
                <Image
                  src={cake.image}
                  alt={cake.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Price Badge */}
                <div className="absolute top-3 right-3">
                  <span className="bg-[#4A2412] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    {cake.priceText}
                  </span>
                </div>

                {/* Plastic Topper Tag */}
                {cake.isPlasticTopper && (
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="bg-[#2B170E]/90 backdrop-blur-md text-[#FFE3C8] text-[10px] font-semibold px-2.5 py-1 rounded-lg border border-amber-500/30 flex items-center gap-1 justify-center shadow-md">
                      <AlertTriangle className="w-3 h-3 text-amber-400 shrink-0" />
                      <span>Plastic Toy Topper (Non-Edible)</span>
                    </span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#C47A20] uppercase tracking-wider mb-1">
                    <span>{cake.flavor}</span>
                    <span className="text-[#7A5C4A]">{cake.weight}</span>
                  </div>

                  <h3 className="font-serif-header text-lg font-bold text-[#4A2412] group-hover:text-[#C47A20] transition-colors leading-snug">
                    {cake.name}
                  </h3>

                  <p className="text-xs text-[#7A5C4A] mt-2 leading-relaxed">
                    {cake.description}
                  </p>

                  {/* Non-edible notice box if applicable */}
                  {cake.topperNotice && (
                    <div className="mt-3 p-2.5 bg-[#FAF2E8] border border-[#E8D4C0] rounded-xl text-[11px] text-[#8C4A1A] font-medium leading-tight flex items-start gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-[#C47A20] shrink-0 mt-0.5" />
                      <span>The character figure (Barbie / Spiderman) is a reusable plastic toy keepsake and not edible.</span>
                    </div>
                  )}

                  {/* Highlights Bullet List */}
                  <div className="mt-3 pt-3 border-t border-[#F8EBD9] space-y-1">
                    {cake.designHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#4A2412]">
                        <Check className="w-3 h-3 text-[#C47A20] shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <button
                    onClick={() =>
                      openOrderModal(`${cake.name} (${cake.priceText} - ${cake.weight})`)
                    }
                    className="w-full py-2.5 bg-[#4A2412] hover:bg-[#C47A20] text-white font-semibold rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 text-xs group/btn"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#E09B3E] group-hover/btn:text-white transition-colors" />
                    <span>Order Design ({cake.priceText})</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
