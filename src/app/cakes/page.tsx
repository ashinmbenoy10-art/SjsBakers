"use client";

import React, { useState } from "react";
import { CAKES, Cake } from "@/data/cakes";
import { CakeCard } from "@/components/CakeCard";
import { Search, Filter, Sparkles } from "lucide-react";
import { Button } from "@/components/Button";
import { useOrderModal } from "@/context/OrderContext";

export default function CakesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { openOrderModal } = useOrderModal();

  const categories = [
    "All",
    "1Kg Custom (₹800)",
    "1000 Onwards",
  ];

  const filteredCakes = CAKES.filter((cake) => {
    const matchesCategory =
      selectedCategory === "All" || cake.category === selectedCategory;
    const matchesSearch =
      cake.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cake.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 md:pt-36 bg-[#FFFDF9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF2E8] border border-[#E8D4C0] text-[#C47A20] text-xs sm:text-sm font-semibold mb-3">
            <Sparkles className="w-4 h-4 text-[#C47A20]" />
            <span>Handmade Fresh Daily</span>
          </div>

          <h1 className="font-serif-header text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#4A2412] tracking-tight mb-3">
            Our Cakes
          </h1>

          <p className="text-base sm:text-lg text-[#7A5C4A]">
            Beautiful cakes made specially for your celebrations. Choose a design or request a custom modification!
          </p>
        </div>

        {/* SEARCH & FILTER BAR */}
        <div className="bg-[#FAF2E8] p-4 md:p-6 rounded-2xl border border-[#E8D4C0] shadow-sm mb-10 space-y-4">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7A5C4A]" />
              <input
                type="text"
                placeholder="Search cake designs or flavors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-[#E8D4C0] text-[#4A2412] text-sm focus:outline-none focus:ring-2 focus:ring-[#C47A20]"
              />
            </div>

            {/* Custom Request Trigger Button */}
            <Button
              variant="gold"
              size="sm"
              onClick={() => openOrderModal("Custom Cake")}
              className="w-full md:w-auto"
            >
              Request Custom Cake Design →
            </Button>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 pb-1 no-scrollbar">
            <Filter className="w-4 h-4 text-[#C47A20] shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all shrink-0 ${
                  selectedCategory === cat
                    ? "bg-[#4A2412] text-white shadow-sm"
                    : "bg-white text-[#6B351A] hover:bg-[#F8EBD9] border border-[#E8D4C0]"
                }`}
              >
                {cat === "All" ? "All Designs" : `${cat} Cakes`}
              </button>
            ))}
          </div>

        </div>

        {/* CAKE GRID */}
        {filteredCakes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredCakes.map((cake) => (
              <CakeCard key={cake.id} cake={cake} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#FAF2E8] rounded-3xl border border-[#E8D4C0] space-y-4">
            <p className="text-lg text-[#7A5C4A] font-medium">
              No cake designs match your search term "{searchQuery}".
            </p>
            <Button variant="primary" onClick={() => openOrderModal("Custom Cake")}>
              Describe your custom cake idea instead →
            </Button>
          </div>
        )}

      </div>
    </div>
  );
}
