"use client";
import React, { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-gray-800 text-white sticky top-0 z-10">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-3xl font-medium">
          <Link href="#hero" className="text-green-500">
            Bamusarq Solutions ltd.
          </Link>
        </h1>
        <div className="md:hidden">
          <button
            className="text-4xl focus:outline-none text-green-700 hover:text-green-500"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <>&times;</> : <>&#9776;</>}
          </button>
        </div>
        <nav className="hidden md:flex space-x-4 text-lg">
          <Link href="#hero" className="hover:bg-green-500 rounded-xl p-2">
            Home
          </Link>
          <Link href="#about" className="hover:bg-green-500 rounded-xl p-2">
            About
          </Link>
          <Link href="#Solutions" className="hover:bg-green-500 rounded-xl p-2">
            Solutions/Products
          </Link>
          <Link href="#contact" className="hover:bg-green-500 rounded-xl p-2">
            Contact us
          </Link>
        </nav>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-900">
          <ul className="flex flex-col space-y-4 text-center p-4">
            <li>
              <Link href="#hero" className="hover:bg-green-500 rounded-xl text-xl font-bold p-2" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:bg-green-500 rounded-xl text-xl p-2 font-bold" onClick={closeMobileMenu}>
                About us
              </Link>
            </li>
            <li>
              <Link href="#Solutions" className="hover:bg-green-500 rounded-xl text-xl p-2 font-bold" onClick={closeMobileMenu}>
                Solutions/Products
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:bg-green-500 rounded-xl text-xl p-2 font-bold" onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
            
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
