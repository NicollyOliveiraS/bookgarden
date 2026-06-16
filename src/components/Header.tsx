"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-amber-50/90 backdrop-blur-md border-b border-zinc-200 sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img src="/logo/logo (2).png" alt="Book Garden Logo" className="h-9 w-auto object-contain" />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-zinc-600 hover:text-emerald-700 text-xs font-bold uppercase tracking-widest transition-colors">
            Home
          </Link>
          <Link href="/produtos" className="text-zinc-600 hover:text-emerald-700 text-xs font-bold uppercase tracking-widest transition-colors">
            Produtos
          </Link>
          <Link href="/contato" className="text-zinc-600 hover:text-emerald-700 text-xs font-bold uppercase tracking-widest transition-colors">
            Contato
          </Link>
        </nav>

        {/* CTA desktop */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/produtos"
            className="bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded hover:bg-emerald-600 transition-colors shadow-sm"
          >
            Comprar
          </Link>
        </div>

        {/* Hamburger mobile (Corrigido de text-white para text-zinc-900) */}
        <button
          className="md:hidden text-zinc-900 p-2 hover:bg-zinc-100 rounded-lg transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir Menu"
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

      {/* Mobile menu (Cores ajustadas para melhor leitura) */}
      {menuOpen && (
        <div className="md:hidden bg-amber-50 border-t border-zinc-200 px-6 py-4 flex flex-col gap-4 shadow-inner animate-in fade-in duration-200">
          <Link href="/" className="text-zinc-700 hover:text-emerald-700 text-sm font-semibold uppercase tracking-wider py-1" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/produtos" className="text-zinc-700 hover:text-emerald-700 text-sm font-semibold uppercase tracking-wider py-1" onClick={() => setMenuOpen(false)}>Produtos</Link>
          <Link href="/contato" className="text-zinc-700 hover:text-emerald-700 text-sm font-semibold uppercase tracking-wider py-1" onClick={() => setMenuOpen(false)}>Contato</Link>
          <Link href="/produtos" className="bg-emerald-700 text-white text-sm font-bold uppercase tracking-widest px-5 py-3 text-center rounded shadow-sm" onClick={() => setMenuOpen(false)}>Comprar</Link>
        </div>
      )}
    </header>
  );
}