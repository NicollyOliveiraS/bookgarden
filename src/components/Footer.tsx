import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amber-50 border-t border-zinc-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
            <img src="/logo/logo (2).png" alt="VA" className="h-10 w-auto" />
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Roupas e suplementos esportivos para quem leva o treino a sério. Performance, estilo e resultados.
            </p>
            <div className="flex gap-4 mt-5">
              {["instagram", "facebook", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 border border-zinc-700 flex items-center justify-center text-zinc-500 hover:border-amber-400 hover:text-amber-400 transition-all text-xs uppercase tracking-wider"
                >
                  {social.slice(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-zinc-950 font-bold text-xs uppercase tracking-widest mb-4">Navegação</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Produtos", href: "/produtos" },
                { label: "Contato", href: "/contato" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-zinc-500 text-sm hover:text-amber-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato rápido */}
          <div>
            <h3 className="text-zinc-950 font-bold text-xs uppercase tracking-widest mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-zinc-500">
              <li>contato@venusactive.com.br</li>
              <li>(19) 99999-0000</li>
              <li>Itapeva, SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-zinc-600 text-xs">&copy; {currentYear} . Todos os direitos reservados.</p>
          <p className="text-zinc-700 text-xs">Feito com dedicação para atletas de verdade.</p>
        </div>
      </div>
    </footer>
  );
}