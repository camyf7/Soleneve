import Header from "@/components/header";
import Footer from "@/components/footer";
import ProductsGrid from "@/components/products-grid";

export const metadata = {
  title: "Nossos Produtos - Sol & Neve Caraguatatuba",
  description:
    "Confira toda nossa linha de produtos: acais, picoles, potes, paletas, sobremesas, sorvetes self service e muito mais.",
};

export default function ProdutosPage() {
  return (
    <main>
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-[#1a0a10] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#d41d51] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-20 w-48 h-48 bg-[#FFD700] rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-[#FFD700] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Linha Completa
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 text-balance">
            Nossos{" "}
            <span className="text-[#d41d51]">Produtos</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto text-pretty">
            Mais de 150 sabores distribuidos em 16 categorias para todos os
            gostos. Encontre seu favorito!
          </p>
        </div>
      </section>

      <ProductsGrid />
      <Footer />
    </main>
  );
}
