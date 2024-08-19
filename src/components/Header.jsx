"use client";
import React, { useState, useRef } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  return (
    <header className="bg-green-600 text-white sticky top-0 z-10">
      <section className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <a href="#hero">Bamusarq Solutions Ltd.</a>
        </h1>
        <div>
          <button
            className="text-3xl md:hidden focus:outline-none"
            onClick={toggleMobileMenu}
          >
            &#9776;
          </button>
          <nav className="hidden md:flex gap-8 text-xl" aria-label="main">
            <a href="#about" className="hover:opacity-90">
              About
            </a>
            <a href="#Solutions" className="hover:opacity-90">
              Solutions/Products
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact Us
            </a>
          </nav>
        </div>
      </section>
      <section
        ref={mobileMenuRef}
        className={`absolute top-0 bg-black w-3/4 text-3xl flex-col justify-center right-0 origin-top animate-open-menu ${
          isMobileMenuOpen ? "flex" : "hidden"
        }`}
        id="mobile-menu"
      >
        <button
          className="text-7xl py-6 self-end px-6"
          onClick={toggleMobileMenu}
        >
          &times;
        </button>
        <nav
          className="flex flex-col items-center min-h-screen py-8"
          aria-label="mobile"
        >
          <a href="#hero" className="p-3" onClick={closeMobileMenu}>
            Home
          </a>
          <a href="#about" className="p-3" onClick={closeMobileMenu}>
            About
          </a>
          <a href="#Solutions" className="p-3" onClick={closeMobileMenu}>
            Solutions/Products
          </a>
          <a href="#contact" className="p-3" onClick={closeMobileMenu}>
            Contact Us
          </a>
        </nav>
      </section>
    </header>
  );
};

export default Header;
