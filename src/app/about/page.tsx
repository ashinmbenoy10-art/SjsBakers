"use client";

import React from "react";
import Image from "next/image";
import { Heart, Award, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/Button";
import { useOrderModal } from "@/context/OrderContext";

export default function AboutPage() {
  const { openOrderModal } = useOrderModal();

  return (
    <div className="pt-28 pb-20 md:pt-36 bg-[#FFFDF9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        
        {/* HERO INTRO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF2E8] border border-[#E8D4C0] text-[#C47A20] text-xs sm:text-sm font-semibold">
              <Heart className="w-4 h-4 text-[#C83E3E] fill-[#C83E3E]" />
              <span>Our Custom Bakery Story</span>
            </div>

            <h1 className="font-serif-header text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#4A2412] leading-tight">
              Made With Love, Baked For You
            </h1>

            <p className="text-base sm:text-lg text-[#7A5C4A] leading-relaxed">
              At <strong className="text-[#4A2412]">SJS Bakers</strong>, we believe that the best celebrations are anchored by a custom cake crafted specifically for your special moment. What started as a home kitchen passion for delicate baking has grown into a beloved custom bakery trusted by hundreds of families.
            </p>

            <p className="text-base sm:text-lg text-[#7A5C4A] leading-relaxed">
              We don't mass-produce cakes for supermarket shelves. Every single cake from SJS Bakers is made to order, tailored precisely to your requested flavors, size, color theme, and custom specification.
            </p>

            <div className="pt-2 flex justify-center lg:justify-start">
              <Button
                variant="primary"
                size="lg"
                showArrow
                onClick={() => openOrderModal("Custom Cake")}
              >
                Order Your Custom Cake →
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-[#FAF2E8]">
              <Image
                src="/images/red-velvet-cake.jpg"
                alt="SJS Bakers homemade custom cake creation"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>

        {/* 4 PHILOSOPHY PILLARS */}
        <div className="bg-[#FAF2E8] rounded-3xl p-8 md:p-12 border border-[#E8D4C0] space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif-header text-3xl md:text-4xl font-bold text-[#4A2412]">
              Why Families Choose SJS Bakers
            </h2>
            <p className="text-sm md:text-base text-[#7A5C4A]">
              Our core values guide every batch, icing swirl, and custom order request.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-[#F3E6D5] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF2E8] flex items-center justify-center text-[#C47A20]">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif-header text-lg font-bold text-[#4A2412]">
                100% Homemade
              </h3>
              <p className="text-xs sm:text-sm text-[#7A5C4A] leading-relaxed">
                Small-batch baking from scratch using fresh dairy, genuine vanilla beans, and rich cocoa. No commercial premixes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#F3E6D5] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF2E8] flex items-center justify-center text-[#C47A20]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif-header text-lg font-bold text-[#4A2412]">
                Your Specification
              </h3>
              <p className="text-xs sm:text-sm text-[#7A5C4A] leading-relaxed">
                You decide the flavor, sweetness, weight, color palette, custom lettering, and theme. We bring your vision to life.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#F3E6D5] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF2E8] flex items-center justify-center text-[#C47A20]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-serif-header text-lg font-bold text-[#4A2412]">
                Premium Ingredients
              </h3>
              <p className="text-xs sm:text-sm text-[#7A5C4A] leading-relaxed">
                Real Belgian chocolate, pure butter, fresh seasonal fruits, and premium cream cheese frosting.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#F3E6D5] space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF2E8] flex items-center justify-center text-[#C47A20]">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif-header text-lg font-bold text-[#4A2412]">
                Eggless Options
              </h3>
              <p className="text-xs sm:text-sm text-[#7A5C4A] leading-relaxed">
                All our custom cake recipes can be prepared 100% eggless with unbelievable moisture and tender sponge crumb.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
