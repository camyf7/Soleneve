// components/promocoes-section.tsx
import Image from "next/image";
import Link from "next/link";

const promocoes = [
  {
    id: 1,
    titulo: "Cashback Sol & Neve",
    descricao: "Seu sorvete vira mais sorvete, mais açaí, mais picolés. A cada compra na sorveteria, 5% do valor volta para você em forma de crédito.",
    imagem: "/images/cashback.png", 
    link: "https://soleneve.com.br/fidelidade/#sistemafidelidade", 
    tags: ["5% DE VOLTA", "CRÉDITO", "EXCLUSIVO"],
    cor: "from-[#FFD700] to-[#d41d51]",
    destaque: true,
    cta: "Cadastre-se agora"
  },
  {
    id: 2,
    titulo: "Sabores de Verão",
    descricao: "Sorbets de frutas com gengibre, capim-limão e manjericão. Zero açúcar, sem lactose e enriquecidos com colágeno.",
    imagem: "/images/sabores-verao.png",
    link: "https://soleneve.com.br/verao",
    tags: ["Zero Açúcar", "Sem Lactose", "Colágeno"],
    cor: "from-[#4CAF50] to-[#2E8B57]",
  },
  {
    id: 3,
    titulo: "Pegada do Freddy",
    descricao: " Novo picolé da Sol&Neve terá parte da venda destinada à proteção animal",
    imagem: "/images/pegada-freddy (1).png",
    link: "https://soleneve.com.br/pegadadofreddy/",
    tags: ["Picole", "Kids"],
    cor: "from-[#1a0a10] to-[#8B4513]",
  },
  

  {
    id: 4,
    titulo: "Açaí com Sorbet de Maracujá",
    descricao: "A força do açaí brasileiro com o azedinho do maracujá. Zero lactose e pura energia!",
    imagem: "/images/acai-maracuja.png",
    link: "https://soleneve.com.br/acai-maracuja",
    tags: ["Zero Lactose", "Energia"],
    cor: "from-[#4B0082] to-[#9370DB]",
  },

];

export default function PromocoesSection() {
  // Separar o cashback dos demais
  const cashbackPromo = promocoes.find(p => p.destaque);
  const outrasPromos = promocoes.filter(p => !p.destaque);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <span className="text-[#d41d51] text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            Benefícios Exclusivos
          </span>
          <h2 className="font-serif text-5xl md:text-6xl font-light text-[#1a0a10] mb-6">
            Seu sorvete 
            <span className="font-bold block text-[#d41d51]">volta em dobro</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Cadastre-se agora e ganhe 5% de cashback em todas as suas compras. 
            Quanto mais você aproveita, mais ganha!
          </p>
        </div>

        {/* Card Principal - Cashback */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Imagem de fundo ocupando tudo */}
            <div className="absolute inset-0">
              <Image
                src={cashbackPromo?.imagem || "/images/cashback.png"}
                alt={cashbackPromo?.titulo || "Cashback"}
                fill
                className="object-cover"
                priority
              />
              {/* Overlay escuro com gradiente para texto ficar legível */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a10] via-[#1a0a10]/60 to-[#d41d51]/80" />
            </div>

            {/* Conteúdo */}
            <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12 min-h-[500px] items-center">
              {/* Lado esquerdo com texto */}
              <div className="text-white z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-[#FFD700] text-[#1a0a10] text-sm font-bold px-4 py-2 rounded-full">
                    5% DE CASHBACK
                  </span>
                  <span className="border border-white/30 text-white/90 text-sm px-4 py-2 rounded-full">
                    EXCLUSIVO
                  </span>
                </div>

                <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                  {cashbackPromo?.titulo}
                </h3>

                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  {cashbackPromo?.descricao}
                </p>

                {/* Benefícios em bullets */}
                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/90">5% de volta em todas as compras</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/90">Crédito para usar quando quiser</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#FFD700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/90">Válido para sorvetes, açaís e picolés</span>
                  </div>
                </div>

                {/* Botão de cadastro */}
                <a
                  href={cashbackPromo?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#FFD700] text-[#1a0a10] px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {cashbackPromo?.cta}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              {/* Lado direito vazio*/}
              <div className="hidden md:block" />
            </div>
          </div>
        </div>

        {/* Cards secundários  */}
        <div className="mb-16">
          <h3 className="font-serif text-2xl font-bold text-[#1a0a10] mb-8 text-center">
            Outras novidades que você vai amar
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outrasPromos.map((promo) => (
              <div
                key={promo.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-t ${promo.cor} opacity-20 group-hover:opacity-30 transition-opacity z-10`} />
                  <Image
                    src={promo.imagem}
                    alt={promo.titulo}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {promo.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 border border-gray-200 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h4 className="font-serif text-lg font-bold text-[#1a0a10] mb-2">
                    {promo.titulo}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {promo.descricao}
                  </p>

                  <a
                    href={promo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#d41d51] font-medium text-sm group/link"
                  >
                    Saiba mais
                    <svg
                      className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${promo.cor} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}