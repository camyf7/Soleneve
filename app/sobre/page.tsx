import Header from "@/components/header";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sobre - Sol & Neve Caraguatatuba",
  description:
    "Conheca a historia da Sol & Neve, uma marca de sorvetes mineira que chegou ao litoral norte de Sao Paulo.",
};

export default function SobrePage() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#1a0a10] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#d41d51] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-20 w-48 h-48 bg-[#FFD700] rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-[#FFD700] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Nossa Historia
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 text-balance">
            Sobre a{" "}
            <span className="text-[#d41d51]">Sol & Neve</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto text-pretty">
            Uma marca mineira de sorvetes que conquistou o Sudeste e agora esta
            em Caraguatatuba.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-[#fdf8f5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-store.jpg"
                alt="Loja Sol e Neve"
                width={600}
                height={450}
                className="object-cover w-full h-[450px]"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a0a10] mb-6 text-balance">
                Todo dia, sabor e alegria
              </h2>
              <p className="text-[#5a4a50] text-lg leading-relaxed mb-6">
                A Sol & Neve e uma marca de sorvetes mineira que esta presente
                em todo o Sudeste, levando sabor, alegria e o melhor de Minas
                para voce e sua familia.
              </p>
              <p className="text-[#5a4a50] leading-relaxed mb-6">
                Com uma linha completa que vai de acais a sobremesas sofisticadas,
                passando por picoles de frutas naturais, paletas gourmet, a
                exclusiva linha Aurus premium e opcoes para todos os estilos de
                vida como Zero Acucar, Zero Lactose e Fit.
              </p>
              <p className="text-[#5a4a50] leading-relaxed">
                Agora em Caraguatatuba, no litoral norte de Sao Paulo, estamos
                prontos para trazer toda essa experiencia unica de sabor e
                qualidade para voce e sua familia curtirem o melhor do verao - e
                de todas as estacoes!
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Qualidade Premium",
                description:
                  "Ingredientes selecionados e processos artesanais que garantem o melhor sabor em cada produto.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                ),
              },
              {
                title: "Variedade Unica",
                description:
                  "Mais de 150 sabores em 16 categorias diferentes para atender todos os gostos e momentos.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                ),
              },
              {
                title: "Para Todos",
                description:
                  "Linhas Zero Acucar, Zero Lactose e Fit para que todos possam aproveitar nossos sorvetes.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                ),
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#d41d51]/10 flex items-center justify-center mb-6">
                  <svg
                    className="w-7 h-7 text-[#d41d51]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {value.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#1a0a10] mb-3">
                  {value.title}
                </h3>
                <p className="text-[#5a4a50] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/caraguatatuba.jpg"
            alt="Caraguatatuba"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#d41d51]/90 to-[#1a0a10]/90" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 text-balance">
            Venha nos visitar!
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Estamos em Caraguatatuba com todo sabor e alegria da Sol & Neve.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contato"
              className="bg-white text-[#d41d51] hover:bg-white/90 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Como Chegar
            </Link>
            <Link
              href="/produtos"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1"
            >
              Ver Produtos
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
