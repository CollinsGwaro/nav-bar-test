"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">

      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="font-bold text-lg color-red">
          MySite
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 font-medium">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Services</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>

        {/* Desktop Debug Button */}
        <button
          className="hidden md:flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full"
          onClick={() => alert("Desktop works!")}
        >
          ☰
        </button>

        {/* Mobile Button */}
        <button
          className="md:hidden px-3 py-2 bg-yellow-300 rounded"
          onClick={() => setOpen(prev => !prev)}
        >
          {open ? "Close" : "Menu"}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t px-4 py-3 space-y-3 bg-white">
          <a href="#" className="block">Home</a>
          <a href="#" className="block">About</a>
          <a href="#" className="block">Services</a>
          <a href="#" className="block">Contact</a>
        </div>
      )}

    </nav>
  );
}