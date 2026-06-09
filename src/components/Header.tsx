"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-amber-50 border-b border-zinc-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {}
        <Link href="/" className="flex items-center gap-2 group">
          
          <img src="/logo/logo (2).png" alt="VA" className="h-10 w-auto sm:block hidden group-hover:hidden" />
          
         
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-zinc-400 hover:text-amber-400 text-sm font-medium uppercase tracking-widest transition-colors">
            Home
          </Link>
          <Link href="/produtos" className="text-zinc-400 hover:text-amber-400 text-sm font-medium uppercase tracking-widest transition-colors">
            Produtos
          </Link>
          <Link href="/contato" className="text-zinc-400 hover:text-amber-400 text-sm font-medium uppercase tracking-widest transition-colors">
            Contato
          </Link>
       

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/produtos"
            className="bg-emerald-700 text-zinc-950 text-sm font-bold uppercase tracking-widest px-5 py-2 hover:bg-emerald-600 transition-colors"
          >
            Comprar
          </Link>
        </div>
         </nav>

        {/* Hamburger mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800 px-6 py-4 flex flex-col gap-4">
          <Link href="/" className="text-zinc-400 hover:text-emerald-700 text-sm font-medium uppercase tracking-widest" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/produtos" className="text-zinc-400 hover:text-emerald-700 text-sm font-medium uppercase tracking-widest" onClick={() => setMenuOpen(false)}>Produtos</Link>
          <Link href="/contato" className="text-zinc-400 hover:text-emerald-700 text-sm font-medium uppercase tracking-widest" onClick={() => setMenuOpen(false)}>Contato</Link>
          <Link href="/produtos" className="bg-emerald-700 text-zinc-950 text-sm font-bold uppercase tracking-widest px-5 py-2 text-center" onClick={() => setMenuOpen(false)}>Comprar</Link>
        </div>
      )}
    </header>
  );
}