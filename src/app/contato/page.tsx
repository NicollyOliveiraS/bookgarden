"use client";
import { useState } from "react";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", assunto: "duvida", mensagem: "" });
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.mensagem) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setEnviado(true);
    setLoading(false);
  };

  const infos = [
    { icon: "📍", titulo: "Endereço", valor: "Av. das Esportistas, 1234\nCampinas, SP - CEP 13000-000" },
    { icon: "📞", titulo: "Telefone", valor: "(19) 99999-0000" },
    { icon: "📧", titulo: "E-mail", valor: "contato@venusactive.com.br" },
    { icon: "⏰", titulo: "Horário", valor: "Seg–Sex: 9h às 18h\nSáb: 9h às 13h" },
  ];

  return (
    <main className="bg-amber-50 text-white min-h-screen">
      {/* Header */}
      <div className="bg-amber-50 border-b border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-emerald-800 text-xs font-bold uppercase tracking-widest mb-2">Fale com a gente</p>
          <h1 className="text-4xl md:text-5xl  text-black font-black uppercase tracking-tight">Contato</h1>
          <p className="text-zinc-500 mt-2">Estamos prontos para te ajudar a atingir seus objetivos.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formulário */}
          <div>
            <h2 className="text-2xl font-black text-black uppercase tracking-tight mb-8">
              Enviar <span className="text-emerald-800">Mensagem</span>
            </h2>

            {enviado ? (
              <div className="border border-green-500/30 bg-green-500/10 p-8 text-center">
                <span className="text-5xl block mb-4">✅</span>
                <h3 className="font-black text-xl uppercase text-green-400 mb-2">Mensagem enviada!</h3>
                <p className="text-zinc-400 text-sm">Em breve nossa equipe entrará em contato.</p>
                <button
                  onClick={() => { setEnviado(false); setForm({ nome: "", email: "", assunto: "duvida", mensagem: "" }); }}
                  className="mt-6 border border-zinc-700 text-zinc-400 hover:border-emerald-500 hover:text-emerald-500 text-xs font-bold uppercase tracking-widest px-6 py-2 transition-all"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                      Nome <span className="text-emerald-800">*</span>
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full bg-amber-50 border border-zinc-500 text-white text-sm px-4 py-3 placeholder-zinc-600 focus:border-emerald-600 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                      E-mail <span className="text-emerald-800">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full bg-amber-50 border border-zinc-500 text-white text-sm px-4 py-3 placeholder-zinc-600 focus:border-emerald-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Assunto</label>
                  <select
                    name="assunto"
                    value={form.assunto}
                    onChange={handleChange}
                    className="w-full bg-amber-50 border border-zinc-500 text-white text-sm px-4 py-3 focus:border-emerald-600 focus:outline-none transition-colors"
                  >
                    <option value="duvida" className="text-zinc-700">Dúvida sobre produto</option>
                    <option value="pedido" className="text-zinc-700">Meu pedido</option>
                    <option value="troca" className="text-zinc-700">Troca ou devolução</option>
                    <option value="parceria" className="text-zinc-700">Parceria</option>
                    <option value="outro" className="text-zinc-700">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                    Mensagem <span className="text-emerald-800">*</span>
                  </label>
                  <textarea
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    placeholder="Escreva sua mensagem..."
                    rows={5}
                    className="w-full bg-zinc-900 border border-zinc-500 text-white text-sm px-4 py-3 placeholder-zinc-600 focus:border-emerald-600      focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={loading || !form.nome || !form.email || !form.mensagem}
                  className="w-full bg-amber-400 text-zinc-950 font-black uppercase tracking-widest text-sm py-4 hover:bg-emerald-500 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {loading ? "Enviando..." : "Enviar Mensagem →"}
                </button>
              </div>
            )}
          </div>

          {/* Informações */}
          <div>
            <h2 className="text-2xl font-black text-black uppercase tracking-tight mb-8">
              Nossas <span className="text-emerald-800">Informações</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {infos.map((info) => (
                <div key={info.titulo} className="bg-amber-50 border border-zinc-800 p-5">
                  <span className="text-2xl block mb-3">{info.icon}</span>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-1">{info.titulo}</p>
                  <p className="text-emerald-900 text-sm leading-relaxed whitespace-pre-line">{info.valor}</p>
                </div>
              ))}
            </div>

            {/* Redes sociais */}
            <div className="border-t border-zinc-800 pt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4">Nos siga nas redes</p>
              <div className="flex gap-3">
                {[
                  { rede: "Instagram", handle: "@venusactive" },
                  { rede: "Facebook", handle: "VenusActive" },
                  { rede: "YouTube", handle: "Venus Active" },
                ].map((social) => (
                  <a
                    key={social.rede}
                    href="#"
                    className="flex-1 border border-zinc-700 hover:border-emerald-500 p-3 text-center group transition-all"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-emerald-500 transition-colors">
                      {social.rede}
                    </p>
                    <p className="text-emerald-900 text-xs mt-1">{social.handle}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}