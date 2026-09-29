"use client";

import React from "react";
import { Button } from "./Button";
import { useOrderModal } from "@/context/OrderContext";
import { Heart, Sparkles } from "lucide-react";

export const CustomCakeCTA = () => {
  const { openOrderModal } = useOrderModal();

  return (
    <section className="py-16 md:py-24 bg-[#FAF2E8] border-y border-[#E8D4C0] relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#F8EBD9] rounded-full blur-2xl opacity-70 pointer-events-none" />
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#C47A20]/10 rounded-full blur-2xl opacity-70 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#E8D4C0] text-[#C47A20] text-xs sm:text-sm font-semibold tracking-wide">
          <Heart className="w-4 h-4 text-[#C83E3E] fill-[#C83E3E]" />
          <span>Made-to-Order Custom Creations</span>
        </div>

        <h2 className="font-serif-header text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#4A2412] leading-tight">
          Have something special in mind?
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-[#7A5C4A] max-w-2xl mx-auto font-normal leading-relaxed">
          Tell us your idea and we'll create a cake made specially for you. Share your desired flavor, design theme, or custom reference image!
        </p>

        <div className="pt-4 flex justify-center">
          <Button
            variant="gold"
            size="lg"
            showArrow
            onClick={() => openOrderModal("Custom Cake")}
            className="shadow-bakery hover:shadow-bakery-hover text-base md:text-lg px-8 py-4"
          >
            Create Your Custom Cake
          </Button>
        </div>
      </div>
    </section>
  );
};
