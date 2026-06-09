"use client";

// Definição das interfaces de tipo (TypeScript)
interface LivroProps {
  id: number;
  titulo: string;
  descricao: string;
  autor: string;
  preco: number;
  imagem: string;
  destaque: boolean;
}

interface CardProdutoProps {
  id: number;
  titulo: string;
  descricao: string;
  autor: string;
  preco: number;
  imagem: string;
  destaque: boolean;
  produto: LivroProps;
}

export default function CardProduto(props: CardProdutoProps) {
  // Desestruturando aqui dentro evita o erro de interpretação do compilador
  const { titulo, descricao, autor, preco, imagem, destaque } = props;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      
      {/* Container da Imagem */}
      <div className="h-64 w-full bg-gray-200 relative overflow-hidden">
        <img
          src={imagem}
          alt={titulo}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {destaque && (
          <span className="absolute top-3 right-3 bg-amber-400 text-amber-950 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
            ★ Destaque
          </span>
        )}
      </div>

      {/* Corpo do Card */}
      <div className="p-5 flex flex-col grow">
        <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">
          Livro
        </span>
        
        <h2 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1" title={titulo}>
          {titulo}
        </h2>
        
        <p className="text-sm text-gray-500 mb-2">
          por <span className="font-medium text-gray-700">{autor}</span>
        </p>

        <p className="text-sm text-gray-600 line-clamp-2 mb-4 grow">
          {descricao}
        </p>
        
        {/* Preço e Botão */}
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-50">
          <div className="flex flex-col">
            <span className="text-xs text-gray-400 font-medium">Preço</span>
            <span className="text-2xl font-black text-gray-950">
              R$ {preco.toFixed(2).replace(".", ",")}
            </span>
          </div>
          
          <button 
            onClick={() => alert(`"${titulo}" adicionado ao carrinho!`)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-colors duration-200 text-sm shadow-sm"
          >
            Comprar
          </button>
        </div>

      </div>
    </div>
  );
}