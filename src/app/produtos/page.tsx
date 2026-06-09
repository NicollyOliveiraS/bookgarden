"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import produtos from "../../../produtos.json";

export default function Produtos() {
  // 1. Estados para controlar os filtros
  const [generoSelecionado, setGeneroSelecionado] = useState<string>("Todos");
  const [busca, setBusca] = useState<string>("");

  // 2. Pegar a lista de gêneros dinamicamente direto das chaves do JSON
  const generosDisponiveis = ["Todos", ...Object.keys(produtos)];

  // 3. Lógica do Filtro
  const livrosFiltrados = Object.entries(produtos).flatMap(([genero, listaDeLivros]) => {
    // Se escolheu um gênero específico e não é o atual, ignora essa categoria
    if (generoSelecionado !== "Todos" && generoSelecionado !== genero) {
      return [];
    }

    // Aplica o filtro de busca por texto (Título ou Autor)
    return listaDeLivros.filter((livro) =>
      livro.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      livro.autor.toLowerCase().includes(busca.toLowerCase())
    );
  });

  return (
    <div className="flex min-h-screen flex-col justify-between bg-gray-50">
      

      <main className="grow container mx-auto px-4 py-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Nossos Produtos</h1>
          <p className="text-lg text-gray-600">Explore os livros disponíveis em nossa loja.</p>
        </div>

        {/* Seção de Filtros (Barra de busca + Botões) */}
        <div className="max-w-6xl mx-auto mb-12 space-y-6">
          {/* Campo de Busca */}
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Busque por título ou autor..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-gray-800 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Botões de Gênero */}
          <div className="flex flex-wrap justify-center gap-2">
            {generosDisponiveis.map((genero) => (
              <button
                key={genero}
                onClick={() => setGeneroSelecionado(genero)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shadow-sm ${
                  generoSelecionado === genero
                    ? "bg-emerald-600 text-white shadow-emerald-200"
                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-100"
                }`}
              >
                {genero}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Produtos */}
        {livrosFiltrados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {livrosFiltrados.map((livro) => (
              <div 
                key={livro.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Container da Imagem */}
                <div className="h-64 w-full bg-gray-200 relative overflow-hidden">
                  <img 
                    src={livro.imagem} 
                    alt={livro.titulo} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {livro.destaque && (
                    <span className="absolute top-2 right-2 bg-amber-400 text-amber-900 text-[10px] font-bold px-2 py-1 rounded-full uppercase">
                      Destaque
                    </span>
                  )}
                </div>

                {/* Corpo do Card */}
                <div className="p-5 flex flex-col grow">
                  <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">
                    Livro
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1">
                    {livro.titulo}
                  </h2>
                  <p className="text-sm text-gray-500 mb-4">
                    por {livro.autor}
                  </p>
                  
                  {/* Preço e Botão */}
                  <div className="mt-auto flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-950">
                      R$ {livro.preco.toFixed(2).replace(".", ",")}
                    </span>
                    <button 
                      onClick={() => alert(`"${livro.titulo}" adicionado ao carrinho!`)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 text-sm"
                    >
                      Comprar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Aviso caso nenhum livro corresponda aos filtros */
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">Nenhum livro encontrado para os filtros selecionados.</p>
          </div>
        )}
      </main>

    </div>
  );
}