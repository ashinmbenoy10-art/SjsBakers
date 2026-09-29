"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "./Button";
import { Cake } from "@/data/cakes";
import { useOrderModal } from "@/context/OrderContext";

interface CakeCardProps {
  cake: Cake;
}

export const CakeCard: React.FC<CakeCardProps> = ({ cake }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { openOrderModal } = useOrderModal();

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-bakery hover:shadow-bakery-hover transition-all duration-300 transform hover:-translate-y-1.5 border border-[#F3E6D5] flex flex-col justify-between group">
      
      {/* Top Image Container */}
      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#FAF2E8] mb-4">
        <Image
          src={cake.image}
          alt={cake.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
        
        {/* Favorite Heart Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-md shadow-sm hover:scale-110 active:scale-95 transition-all text-[#C83E3E]"
          aria-label={`Favorite ${cake.name}`}
        >
          <Heart
            className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${
              isLiked ? "fill-[#C83E3E] text-[#C83E3E]" : "text-[#7A5C4A]"
            }`}
          />
        </button>
      </div>

      {/* Content Info */}
      <div className="flex flex-col flex-grow justify-between text-center">
        <div>
          <h3 className="font-serif-header text-lg sm:text-xl font-bold text-[#4A2412] leading-tight mb-1 group-hover:text-[#C47A20] transition-colors">
            {cake.name}
          </h3>
          <p className="text-sm sm:text-base font-semibold text-[#6B351A] mb-4">
            {cake.price}
          </p>
        </div>

        {/* Order Now Button */}
        <div className="w-full pt-1">
          <Button
            variant="primary"
            size="sm"
            showArrow
            onClick={() => openOrderModal(cake.name)}
            className="w-full shadow-sm py-2.5"
          >
            Order Now
          </Button>
        </div>
      </div>

    </div>
  );
};
