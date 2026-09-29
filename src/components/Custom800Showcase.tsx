"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Check, Heart, ShieldCheck, ShoppingBag } from "lucide-react";
import { CUSTOM_800_CAKES, Custom800Cake } from "@/data/custom800";
import { useOrderModal } from "@/context/OrderContext";

export const Custom800Showcase = () => {
  const { openOrderModal } = useOrderModal();

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#FFFDF9] via-[#FAF2E8] to-[#FFFDF9] relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C47A20]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF2E8] border border-[#C47A20]/40 text-[#C47A20] text-xs sm:text-sm font-bold tracking-wide uppercase shadow-sm">
            <Sparkles className="w-4 h-4 text-[#C47A20]" />
            <span>Signature Custom Line</span>
          </div>

          <h2 className="font-serif-header text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4A2412] tracking-tight">
            ₹800 / 1Kg Custom Creations
          </h2>

          <p className="text-base sm:text-lg text-[#7A5C4A] leading-relaxed">
            High-end artisan bakery craftsmanship at an unbeatable fixed price. Every 1Kg cake is baked fresh to order with your custom name, color theme, and 100% eggless options included!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#4A2412] font-semibold pt-2">
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#E8D4C0]">
              <ShieldCheck className="w-4 h-4 text-[#C47A20]" /> 100% Fresh Homemade
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#E8D4C0]">
              <Check className="w-4 h-4 text-[#C47A20]" /> Free Custom Name Piping
            </span>
            <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-[#E8D4C0]">
              <Heart className="w-4 h-4 text-[#C83E3E]" /> Eggless Available
            </span>
          </div>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {CUSTOM_800_CAKES.map((cake: Custom800Cake) => (
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Badges Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="bg-[#4A2412]/90 backdrop-blur-md text-[#F8EBD9] text-[11px] font-semibold px-3 py-1 rounded-full border border-white/20 shadow-md">
                    Fresh Bakery Special
                  </span>
                  <span className="bg-[#C47A20] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md tracking-wider">
                    ₹{cake.price} ({cake.weight})
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-[#C47A20] uppercase tracking-wider mb-1">
                    <span>{cake.flavor}</span>
                    <span className="text-[#7A5C4A]">{cake.weight}</span>
                  </div>

                  <h3 className="font-serif-header text-xl font-bold text-[#4A2412] group-hover:text-[#C47A20] transition-colors leading-snug">
                    {cake.name}
                  </h3>

                  <p className="text-xs text-[#C47A20] font-medium mt-1 italic">
                    "{cake.tagline}"
                  </p>

                  <p className="text-xs sm:text-sm text-[#7A5C4A] mt-3 leading-relaxed">
                    {cake.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="mt-4 pt-3 border-t border-[#F8EBD9] space-y-1.5">
                    {cake.designHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#4A2412]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C47A20]" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={() =>
                      openOrderModal(`${cake.name} (₹${cake.price}/${cake.weight})`)
                    }
                    className="w-full py-3 bg-[#4A2412] hover:bg-[#C47A20] text-white font-semibold rounded-2xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 text-sm group/btn"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#E09B3E] group-hover/btn:text-white transition-colors" />
                    <span>Order This Design (₹{cake.price})</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM BANNER NOTE */}
        <div className="mt-12 bg-[#FAF2E8] border border-[#E8D4C0] rounded-2xl p-6 text-center max-w-2xl mx-auto space-y-2">
          <p className="text-sm font-bold text-[#4A2412]">
            Want custom colors or personalized lettering for your event?
          </p>
          <p className="text-xs text-[#7A5C4A]">
            Every cake in the ₹800/1Kg category is freshly made to order. You can specify custom names, messages, or color preferences during order request!
          </p>
        </div>

      </div>
    </section>
  );
};
