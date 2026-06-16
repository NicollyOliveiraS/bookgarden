import Carrossel from "@/components/carrossel";
import CardProduto from "@/components/ui/CardProduto";
import produtosData from "../../produtos.json"; 

export default function Home() {
  const produtosEmDestaque = Object.values(produtosData)
    .flat()
    .filter((produto: any) => produto.destaque === true);

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-zinc-50/50">
      <div className="w-full">
        <Carrossel />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mt-12 mb-10">
            <h1 className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tight uppercase">
              Produtos em Destaque
            </h1>
            <div className="w-16 h-1 bg-emerald-600 mx-auto mt-3 rounded-full"></div>
          </div>

          {/* Grid Inteligente e Responsivo */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            {produtosEmDestaque.map((produto: any) => (
              <CardProduto
                key={produto.id}
                id={produto.id}
                titulo={produto.titulo}
                descricao={produto.descricao}
                categoria={produto.categoria || produto.autor} // Fallback seguro caso seu JSON ainda use "autor"
                preco={produto.preco}
                imagem={produto.imagem}
                destaque={produto.destaque}
                produto={produto}
              />
            ))}
          </div>

          <p className="text-sm md:text-base text-center text-zinc-500 max-w-md mx-auto mb-16 font-medium">
            Explore nossos livros em destaque.
          </p>
        </div>
      </div>
    </div>
  );
}