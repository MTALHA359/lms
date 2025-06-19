'use client';

import { useState } from 'react';
import { Menu, X, School, BookOpen, Users, LogIn } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <School size={30} className="text-[#e94560]" />
          <span className="text-2xl font-bold tracking-wide">School LMS</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-lg font-medium">
          <NavItem href="/" label="Home" />
          <NavItem href="/courses" label="Courses" />
          <NavItem href="/teachers" label="Teachers" />
          <NavItem href="/students" label="Students" />
          <NavItem href="/login" label="Login" icon={<LogIn size={18} />} />
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
          {navOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {navOpen && (
        <div className="md:hidden bg-[#1c1b2f] px-6 pb-6 space-y-4 text-lg font-medium">
          <MobileNavItem href="/" label="Home" />
          <MobileNavItem href="/courses" label="Courses" />
          <MobileNavItem href="/teachers" label="Teachers" />
          <MobileNavItem href="/students" label="Students" />
          <MobileNavItem href="/login" label="Login" />
        </div>
      )}
    </header>
  );
}

function NavItem({ href, label, icon }) {
  return (
    <Link
      href={href}
      className="relative group transition duration-300"
    >
      <span className="group-hover:text-[#e94560] transition-all duration-300">
        {label}
      </span>
      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#e94560] group-hover:w-full transition-all duration-300"></span>
    </Link>
  );
}

function MobileNavItem({ href, label }) {
  return (
    <Link href={href} className="block hover:text-[#e94560] transition">
      {label}
    </Link>
  );
}
