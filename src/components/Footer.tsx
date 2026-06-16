import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-50 border-t border-zinc-200 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-10">
          
          {/* Marca */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo/logo (2).png" alt="Book Garden" className="h-9 w-auto" />
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Livros, revistas e materiais de leitura para todos os gostos.
            </p>
            <div className="flex gap-3 mt-5">
              {["instagram", "facebook", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-500 hover:border-emerald-600 hover:text-emerald-600 transition-all text-[10px] font-bold uppercase tracking-wider"
                >
                  {social.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* Links de navegação */}
          <div>
            <h3 className="text-zinc-900 font-black text-xs uppercase tracking-widest mb-4">Navegação</h3>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Produtos", href: "/produtos" },
                { label: "Contato", href: "/contato" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-zinc-500 text-sm hover:text-emerald-700 font-medium transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato rápido */}
          <div>
            <h3 className="text-zinc-900 font-black text-xs uppercase tracking-widest mb-4">Atendimento</h3>
            <ul className="space-y-2.5 text-sm text-zinc-500 font-medium">
              <li className="hover:text-emerald-700 transition-colors cursor-pointer">contato@bookgarden.com.br</li>
              <li>(19) 99999-0000</li>
              <li>Itapeva, SP</li>
            </ul>
          </div>
        </div>

        {/* Linha de Copyright */}
        <div className="border-t border-zinc-200 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-zinc-500 text-xs">&copy; {currentYear} Book Garden. Todos os direitos reservados.</p>
          <p className="text-zinc-400 text-xs font-medium">Feito com dedicação para leitores.</p>
        </div>
      </div>
    </footer>
  );
}