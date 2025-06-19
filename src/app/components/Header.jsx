'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, School } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md border-b border-gray-800 font-semibold">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 tracking-wider">
          <School className="text-[#e94560]" size={26} />
          <span className="text-2xl font-bold uppercase">LMS Portal</span>
        </Link>

        {/* Desktop Nav - Centered */}
        <nav className="hidden md:flex gap-10 text-lg mx-auto tracking-wide">
          {['Dashboard', 'Courses', 'Teachers', 'Students', 'About'].map((text, i) => (
            <Link
              key={i}
              href={`/${text.toLowerCase()}`}
              className="relative group"
            >
              <span className="group-hover:text-[#e94560] transition">{text}</span>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-[#e94560] group-hover:w-full transition-all duration-300"></span>
              <span className="absolute left-0 top-0 h-0.5 w-0 bg-[#e94560] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>

        {/* Login button */}
        <Link
          href="/login"
          className="hidden md:inline-block px-4 py-2 rounded-full bg-[#e94560] hover:bg-white hover:text-[#e94560] transition font-semibold"
        >
          Login
        </Link>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-[#0f0f0f] border-t border-gray-700 px-6 py-6 space-y-5 text-lg">
          {['Home', 'Courses', 'Teachers', 'Students', 'About'].map((text, i) => (
            <Link
              key={i}
              href={`/${text.toLowerCase()}`}
              className="block hover:text-[#e94560] transition"
            >
              {text}
            </Link>
          ))}
          <Link
            href="/login"
            className="block bg-[#e94560] text-center py-2 rounded-full font-semibold hover:bg-white hover:text-[#e94560] transition"
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
