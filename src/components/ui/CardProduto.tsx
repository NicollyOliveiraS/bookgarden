"use client";

interface ProdutoProps {
  id: number;
  titulo: string;
  descricao: string;
  categoria?: string; // Substitui o conceito de autor/livro
  preco: number;
  imagem: string;
  destaque: boolean;
}

interface CardProdutoProps {
  id: number;
  titulo: string;
  descricao: string;
  categoria?: string; 
  preco: number;
  imagem: string;
  destaque: boolean;
  produto: ProdutoProps;
}

export default function CardProduto(props: CardProdutoProps) {
  const { titulo, descricao, categoria = "Performance", preco, imagem, destaque } = props;

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-zinc-100 transition-all duration-300 flex flex-col h-full group overflow-hidden">
      
      {/* Container da Imagem */}
      <div className="aspect-square w-full bg-zinc-50 relative overflow-hidden">
        <img
          src={imagem}
          alt={titulo}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {destaque && (
          <span className="absolute top-3 right-3 bg-amber-400 text-amber-950 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-widest shadow-sm z-10">
            ★ Destaque
          </span>
        )}
      </div>

      {/* Corpo do Card */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-widest mb-1.5">
          {categoria}
        </span>
        
        <h2 className="text-lg font-bold text-zinc-900 mb-1 line-clamp-1 group-hover:text-emerald-700 transition-colors" title={titulo}>
          {titulo}
        </h2>

        <p className="text-xs text-zinc-500 line-clamp-2 mb-4 flex-1 leading-relaxed">
          {descricao}
        </p>
        
        {/* Preço e Botão */}
        <div className="mt-auto pt-4 border-t border-zinc-100 flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Valor</span>
            <span className="text-xl font-black text-zinc-950 tracking-tight">
              R$ {preco.toFixed(2).replace(".", ",")}
            </span>
          </div>
          
          <button 
            onClick={() => alert(`"${titulo}" adicionado ao carrinho!`)}
            className="bg-zinc-900 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 text-xs uppercase tracking-wider shadow-sm"
          >
            Adicionar
          </button>
        </div>

      </div>
    </div>
  );
}