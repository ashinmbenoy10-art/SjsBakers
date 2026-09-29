"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "gold";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  showArrow = false,
  children,
  className = "",
  ...props
}) => {
  let baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 transform active:scale-95 shadow-sm";

  let variantStyles = "";
  switch (variant) {
    case "primary":
      variantStyles =
        "bg-[#4A2412] hover:bg-[#35180B] text-white hover:shadow-md border border-transparent";
      break;
    case "gold":
      variantStyles =
        "bg-[#C47A20] hover:bg-[#A86414] text-white hover:shadow-md border border-transparent";
      break;
    case "secondary":
      variantStyles =
        "bg-[#FAF2E8] hover:bg-[#F8EBD9] text-[#4A2412] border border-[#E8D4C0]";
      break;
    case "outline":
      variantStyles =
        "bg-transparent hover:bg-[#4A2412] text-[#4A2412] hover:text-white border-2 border-[#4A2412]";
      break;
  }

  let sizeStyles = "";
  switch (size) {
    case "sm":
      sizeStyles = "px-4 py-2 text-xs md:text-sm";
      break;
    case "md":
      sizeStyles = "px-6 py-3 text-sm md:text-base";
      break;
    case "lg":
      sizeStyles = "px-8 py-4 text-base md:text-lg tracking-wide";
      break;
  }

  return (
    <button
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />}
    </button>
  );
};
