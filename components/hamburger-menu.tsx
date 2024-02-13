"use client";
import React from "react";

type Props = {
  isOpen: boolean;
  onOpenChange: any;
};

const HamburgerMenu = ({ isOpen, onOpenChange }: Props) => {
  return (
    <button
      className="flex flex-col justify-around w-6 h-6 bg-transparent border-none cursor-pointer focus:outline-none mr-4"
      onClick={onOpenChange}
    >
      <div
        className={`h-1 w-6 rounded-lg transition-all duration-300 ${
          isOpen ? "transform rotate-45 bg-white" : "bg-white"
        }`}
      ></div>
      <div
        className={`h-1 w-6 rounded-lg transition-all duration-300 ${
          isOpen ? "opacity-0" : "bg-white"
        }`}
      ></div>
      <div
        className={`h-1 w-6 rounded-lg transition-all duration-300 ${
          isOpen ? "transform -rotate-45 bg-white" : "bg-white"
        }`}
      ></div>
    </button>
  );
};

export default HamburgerMenu;
