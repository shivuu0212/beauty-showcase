// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-pink-600">MyPortfolio</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-pink-600">Home</Link>
            <Link href="/about" className="hover:text-pink-600">About</Link>
            <Link href="/services" className="hover:text-pink-600">Services</Link>
            <Link href="/contact" className="hover:text-pink-600">Contact</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/" className="hover:text-pink-600">Home</Link>
            <Link href="/about" className="hover:text-pink-600">About</Link>
            <Link href="/services" className="hover:text-pink-600">Services</Link>
            <Link href="/contact" className="hover:text-pink-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
