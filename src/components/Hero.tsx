"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./Button";
import { useOrderModal } from "@/context/OrderContext";
import { Sparkles, Heart, Crown } from "lucide-react";

export const Hero = () => {
  const { openOrderModal } = useOrderModal();

  return (
    <section className="relative bg-[#F8EBD9] pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-36 md:pb-28 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] md:w-[750px] h-[340px] sm:h-[600px] md:h-[750px] bg-[#FAF2E8] rounded-full blur-3xl opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Headlines & CTA */}
          <div className="lg:col-span-5 text-center lg:text-left space-y-4 sm:space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#FAF2E8] border border-[#E8D4C0] text-[#C47A20] text-xs md:text-sm font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C47A20]" />
              <span>Handcrafted Custom Bakery</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1 md:space-y-2">
              <h1 className="font-serif-header text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold text-[#4A2412] leading-[1.15] sm:leading-[1.1] tracking-tight">
                Home Made Custom Cakes
              </h1>
              <p className="font-script text-2xl sm:text-4xl md:text-5xl text-[#C47A20] font-normal leading-tight pt-1">
                with your specification.
              </p>
            </div>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-lg md:text-xl text-[#7A5C4A] max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              From birthdays to special moments, we create custom cakes made with love, just the way you want.
            </p>

            {/* CTA Button */}
            <div className="pt-2 flex justify-center lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                showArrow
                onClick={() => openOrderModal("Custom Cake")}
                className="shadow-bakery hover:shadow-bakery-hover text-sm sm:text-base md:text-lg px-6 py-3"
              >
                Order Now
              </Button>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D TRIO TRANSPARENT CAKE DISPLAY (FULL RESPONSIVE MOBILE OPTIMIZED) */}
          <div className="lg:col-span-7 flex justify-center items-center mt-6 sm:mt-10 lg:mt-0 relative">
            <div className="relative w-full max-w-[350px] xs:max-w-[400px] sm:max-w-2xl h-[310px] xs:h-[350px] sm:h-[450px] md:h-[480px] flex items-center justify-center">
              
              {/* Backlight Halo Ambient Glow */}
              <div className="absolute w-[90%] h-[90%] bg-[#C47A20]/15 rounded-full blur-2xl sm:blur-3xl animate-pulse-glow pointer-events-none" />

              {/* 1. LEFT SIDE CAKE (Barbie Doll Cake) */}
              <div className="absolute left-0 sm:left-2 top-4 sm:top-8 w-[44%] sm:w-[48%] aspect-square z-10">
                {/* Ground Shadow */}
                <div className="absolute -bottom-1.5 sm:-bottom-2 left-1/2 -translate-x-1/2 w-28 sm:w-44 h-4 sm:h-6 bg-[#4A2412]/25 rounded-[100%] blur-sm sm:blur-md animate-shadow-pulse pointer-events-none" />
                
                {/* Floating Badge */}
                <div className="absolute -top-3 left-0 sm:left-2 z-30 bg-white/95 backdrop-blur-md px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-[#E8D4C0] shadow-xs text-[9px] sm:text-[10px] font-bold text-[#4A2412] flex items-center gap-1 whitespace-nowrap">
                  <Crown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#C47A20]" />
                  <span>Barbie Doll Gown</span>
                </div>

                <div className="relative w-full h-full animate-hero-cake-entrance-left">
                  <div className="relative w-full h-full animate-hero-cake-float-left">
                    <Image
                      src="/images/hero-barbie-cake.png"
                      alt="Custom Barbie Doll Cake from SJS Bakers"
                      fill
                      sizes="(max-width: 640px) 45vw, 300px"
                      className="object-contain drop-shadow-[0_15px_20px_rgba(74,36,18,0.22)] sm:drop-shadow-[0_20px_25px_rgba(74,36,18,0.22)] transition-transform duration-500 hover:scale-105 active:scale-95 cursor-pointer"
                      onClick={() => openOrderModal("Barbie Doll Gown Cake")}
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* 2. RIGHT SIDE CAKE (Spiderman Web Cake) */}
              <div className="absolute right-0 sm:right-2 top-4 sm:top-8 w-[44%] sm:w-[48%] aspect-square z-10">
                {/* Ground Shadow */}
                <div className="absolute -bottom-1.5 sm:-bottom-2 left-1/2 -translate-x-1/2 w-28 sm:w-44 h-4 sm:h-6 bg-[#4A2412]/25 rounded-[100%] blur-sm sm:blur-md animate-shadow-pulse pointer-events-none" />

                {/* Floating Badge */}
                <div className="absolute -top-3 right-0 sm:right-2 z-30 bg-white/95 backdrop-blur-md px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-[#E8D4C0] shadow-xs text-[9px] sm:text-[10px] font-bold text-[#4A2412] flex items-center gap-1 whitespace-nowrap">
                  <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#C47A20]" />
                  <span>Spiderman Action</span>
                </div>

                <div className="relative w-full h-full animate-hero-cake-entrance-right">
                  <div className="relative w-full h-full animate-hero-cake-float-right">
                    <Image
                      src="/images/hero-spiderman-cake.png"
                      alt="Custom Spiderman Web Hero Cake from SJS Bakers"
                      fill
                      sizes="(max-width: 640px) 45vw, 300px"
                      className="object-contain drop-shadow-[0_15px_20px_rgba(74,36,18,0.22)] sm:drop-shadow-[0_20px_25px_rgba(74,36,18,0.22)] transition-transform duration-500 hover:scale-105 active:scale-95 cursor-pointer"
                      onClick={() => openOrderModal("Spiderman Action Web Cake")}
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* 3. CENTER CAKE (Red Velvet Heart Cake - Main Focal Point) */}
              <div className="absolute z-20 w-[54%] sm:w-[58%] aspect-square top-0">
                {/* Center Main Ground Shadow */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-36 sm:w-56 h-5 sm:h-7 bg-[#4A2412]/30 rounded-[100%] blur-sm sm:blur-md animate-shadow-pulse pointer-events-none" />

                {/* Center Badge */}
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-30 bg-[#4A2412] text-[#F8EBD9] px-2.5 sm:px-3.5 py-0.5 sm:py-1 rounded-full border border-white/20 shadow-md text-[10px] sm:text-xs font-bold flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                  <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C83E3E] fill-[#C83E3E]" />
                  <span>Red Velvet Heart</span>
                </div>

                <div className="relative w-full h-full animate-hero-cake-entrance">
                  <div className="relative w-full h-full animate-hero-cake-float">
                    <Image
                      src="/images/hero-transparent-cake.png"
                      alt="Red Velvet Heart Custom Cake from SJS Bakers"
                      fill
                      sizes="(max-width: 640px) 60vw, 400px"
                      className="object-contain drop-shadow-[0_20px_30px_rgba(74,36,18,0.28)] sm:drop-shadow-[0_30px_40px_rgba(74,36,18,0.3)] transition-transform duration-500 hover:scale-105 active:scale-95 cursor-pointer"
                      onClick={() => openOrderModal("Red Velvet Heart Cake")}
                      priority
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
