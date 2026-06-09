"use client";
import { useState } from "react";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", assunto: "duvida", mensagem: "" });
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.mensagem) return;
    
    setLoading(true);
    // Simulando envio de API
    await new Promise((r) => setTimeout(r, 1200));
    setEnviado(true);
    setLoading(false);
  };

  const handleReset = () => {
    setForm({ nome: "", email: "", assunto: "duvida", mensagem: "" });
    setEnviado(false);
  };

  const infos = [
    { icon: "📍", titulo: "Endereço", valor: "Av. das Esportistas, 1234\nCampinas, SP - CEP 13000-000" },
    { icon: "📞", titulo: "Telefone", valor: "(19) 99999-0000" },
    { icon: "📧", titulo: "E-mail", valor: "contato@venusactive.com.br" },
    { icon: "⏰", titulo: "Horário", valor: "Seg–Sex: 9h às 18h\nSáb: 9h às 13h" },
  ];

  return (
    <main className="bg-amber-50/60 text-zinc-800 min-h-screen antialiased">
      {/* Header */}
      <div className="bg-white border-b border-zinc-200/80 py-16 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-emerald-800 text-xs font-bold uppercase tracking-widest mb-2">Fale com a gente</p>
          <h1 className="text-4xl md:text-5xl text-zinc-900 font-black uppercase tracking-tight">Contato</h1>
          <p className="text-zinc-500 mt-2 text-sm md:text-base">Estamos prontos para te ajudar a atingir seus objetivos.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Coluna do Formulário */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200/60">
            <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight mb-8">
              Enviar <span className="text-emerald-800">Mensagem</span>
            </h2>

            {enviado ? (
              <div className="border border-emerald-200 bg-emerald-50/50 p-8 rounded-xl text-center flex flex-col items-center">
                <span className="text-5xl block mb-4 animate-bounce">✅</span>
                <h3 className="font-black text-xl uppercase text-emerald-800 mb-2">Mensagem enviada!</h3>
                <p className="text-zinc-600 text-sm max-w-xs mx-auto">Em breve nossa equipe entrará em contato com você.</p>
                <button
                  onClick={handleReset}
                  className="mt-6 border border-zinc-300 text-zinc-700 hover:border-emerald-700 hover:text-emerald-700 text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-lg transition-all bg-white shadow-sm"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                      Nome <span className="text-emerald-800">*</span>
                    </label>
                    <input
                      type="text"
                      name="nome"
                      required
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-lg text-zinc-900 text-sm px-4 py-3 placeholder-zinc-400 focus:border-emerald-600 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                      E-mail <span className="text-emerald-800">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full bg-zinc-50 border border-zinc-300 rounded-lg text-zinc-900 text-sm px-4 py-3 placeholder-zinc-400 focus:border-emerald-600 focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Assunto</label>
                  <select
                    name="assunto"
                    value={form.assunto}
                    onChange={handleChange}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-lg text-zinc-900 text-sm px-4 py-3 focus:border-emerald-600 focus:bg-white focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="duvida">Dúvida sobre produto</option>
                    <option value="pedido">Meu pedido</option>
                    <option value="troca">Troca ou devolução</option>
                    <option value="parceria">Parceria</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">
                    Mensagem <span className="text-emerald-800">*</span>
                  </label>
                  <textarea
                    name="mensagem"
                    required
                    value={form.mensagem}
                    onChange={handleChange}
                    placeholder="Escreva sua mensagem detalhadamente..."
                    rows={5}
                    className="w-full bg-zinc-50 border border-zinc-300 rounded-lg text-zinc-900 text-sm px-4 py-3 placeholder-zinc-400 focus:border-emerald-600 focus:bg-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !form.nome || !form.email || !form.mensagem}
                  className="w-full bg-emerald-800 text-white font-bold uppercase tracking-widest text-sm py-4 rounded-lg hover:bg-emerald-900 transition-colors shadow-md disabled:opacity-40 disabled:cursor-not-allowed dynamic-hover"
                >
                  {loading ? "Enviando..." : "Enviar Mensagem →"}
                </button>
              </form>
            )}
          </div>

          {/* Coluna de Informações adicionais */}
          <div className="lg:sticky lg:top-24">
            <h2 className="text-2xl font-black text-zinc-900 uppercase tracking-tight mb-8">
              Nossas <span className="text-emerald-800">Informações</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {infos.map((info) => (
                <div key={info.titulo} className="bg-white border border-zinc-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-2xl block mb-2">{info.icon}</span>
                  <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-1">{info.titulo}</p>
                  <p className="text-zinc-800 text-sm leading-relaxed whitespace-pre-line font-medium">{info.valor}</p>
                </div>
              ))}
            </div>

            {/* Redes sociais */}
            <div className="border-t border-zinc-300 pt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">Nos siga nas redes</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { rede: "Instagram", handle: "@venusactive" },
                  { rede: "Facebook", handle: "VenusActive" },
                  { rede: "YouTube", handle: "Venus Active" },
                ].map((social) => (
                  <a
                    key={social.rede}
                    href="#"
                    className="flex-1 min-w-30 bg-white border border-zinc-200 rounded-xl p-3 text-center group hover:border-emerald-700 hover:shadow-sm transition-all"
                  >
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 group-hover:text-emerald-800 transition-colors">
                      {social.rede}
                    </p>
                    <p className="text-zinc-600 text-xs mt-0.5">{social.handle}</p>
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