import Carrossel from "@/components/carrossel";
import CardProduto from "@/components/ui/CardProduto";
// Importamos o JSON (ajuste o caminho se o arquivo estiver em outro lugar)
import produtosData from "../../produtos.json"; 

export default function Home() {
  // 1. Criamos a variável pegando todos os livros e filtrando apenas os que são destaque
  const produtosEmDestaque = Object.values(produtosData)
    .flat()
    .filter((produto: any) => produto.destaque === true);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-gray-50">
      <div className="w-full">
        <Carrossel />

        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mt-12 mb-6 text-gray-900">
            Produtos em Destaque
          </h1>

          {/* 2. Criamos um Grid para os cards não ficarem um embaixo do outro ocupando a tela toda */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {produtosEmDestaque.map((produto: any) => (
              <CardProduto
                key={produto.id}
                id={produto.id}
                titulo={produto.titulo}
                descricao={produto.descricao}
                autor={produto.autor}
                preco={produto.preco}
                imagem={produto.imagem}
                destaque={produto.destaque}
                produto={produto}
              />
            ))}
          </div>

          <p className="text-lg text-center text-gray-600 mb-12">
            Descubra os livros mais populares e recomendados por nossos clientes.
          </p>
        </div>
      </div>
    </div>
  );
}