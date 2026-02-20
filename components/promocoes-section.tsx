// components/promocoes-section.tsx
"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";

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
    descricao: "Novo picolé da Sol&Neve terá parte da venda destinada à proteção animal",
    imagem: "/images/pegada-freddy (1).png",
    link: "https://soleneve.com.br/pegadadofreddy/",
    tags: ["Picolé", "Kids"],
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
  {
    id: 5,
    titulo: "Cookies Nero",
    descricao: "sensação do momento acabou de chegar e já tem nome: Aurus Cookies Nero!",
    imagem: "/images/Para-Casa (1).png",
    link: "https://soleneve.com.br/aurus-cookies-nero-o-novo-picole-premium-da-sol-neve-que-e-puro-protagonismo/",
    tags: ["Picolé", "Zero"],
    cor: "from-[#FF6B6B] to-[#FF8E53]",
  },
  {
    id: 6,
    titulo: "Leve para Casa",
    descricao: "Peça pelo delivery ou monte seu pote para levar",
    imagem: "/images/Para-Casa.png",
    link: "https://www.ifood.com.br/delivery/caraguatatuba-sp/sorveteria-sol--neve----caragua-centro/478c0603-4ca3-4de5-8c8a-d136fc94cafa",
    tags: ["Edição Limitada", "Delivery"],
    cor: "from-[#C0A080] to-[#8B5A2B]",
  },
];

export default function PromocoesSection() {
  const cashbackPromo = promocoes.find(p => p.destaque);
  const outrasPromos = promocoes.filter(p => !p.destaque);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [itemsPerView, setItemsPerView] = useState(1);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 768) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const maxIndex = Math.max(0, outrasPromos.length - itemsPerView);
  
  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  };
  
  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };
  
  const toggleCardExpansion = (cardId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setExpandedCards(prev => 
      prev.includes(cardId) 
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };
  
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#d41d51] text-xs md:text-sm font-semibold tracking-[0.3em] uppercase mb-3 md:mb-4 block">
            Benefícios Exclusivos
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#1a0a10] mb-4 md:mb-6">
            Seu sorvete 
            <span className="font-bold block text-[#d41d51]">volta em dobro</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg px-4">
            Cadastre-se agora e ganhe 5% de cashback em todas as suas compras. 
            Quanto mais você aproveita, mais ganha!
          </p>
        </div>

        {/* Card Principal - Cashback */}
        <div className="mb-16 md:mb-20">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0">
              <Image
                src={cashbackPromo?.imagem || "/images/cashback.png"}
                alt={cashbackPromo?.titulo || "Cashback"}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a10] via-[#1a0a10]/60 to-[#d41d51]/80" />
            </div>

            <div className="relative grid md:grid-cols-2 gap-6 md:gap-8 p-6 md:p-12 min-h-[400px] md:min-h-[500px] items-center">
              <div className="text-white z-10">
                <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
                  <span className="bg-[#FFD700] text-[#1a0a10] text-xs md:text-sm font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                    5% DE CASHBACK
                  </span>
                  <span className="border border-white/30 text-white/90 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full">
                    EXCLUSIVO
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                  {cashbackPromo?.titulo}
                </h3>

                <p className="text-white/90 text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  {cashbackPromo?.descricao}
                </p>

                <a
                  href={cashbackPromo?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 md:gap-3 bg-[#FFD700] text-[#1a0a10] px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  {cashbackPromo?.cta}
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
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
              <div className="hidden md:block" />
            </div>
          </div>
        </div>

        {/* Mobile View - Cards em Grid */}
        <div className="block md:hidden mb-16">
          <h3 className="font-serif text-xl font-bold text-[#1a0a10] mb-6">
            Outras novidades que você vai amar
          </h3>
          
          <div className="space-y-4">
            {outrasPromos.map((promo) => {
              const isExpanded = expandedCards.includes(promo.id);
              
              return (
                <div key={promo.id} className="bg-white rounded-xl overflow-hidden shadow-md">
                  <div className="relative h-48">
                    <Image
                      src={promo.imagem}
                      alt={promo.titulo}
                      fill
                      className="object-cover"
                    />
                    
                    {/* Botão de expandir - Agora isolado */}
                    <button
                      onClick={(e) => toggleCardExpansion(promo.id, e)}
                      className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg z-20"
                      aria-label="Ver descrição"
                    >
                      <svg
                        className={`w-5 h-5 text-[#d41d51] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="p-4">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {promo.tags.map((tag, idx) => (
                        <span key={idx} className="text-[8px] font-semibold uppercase text-gray-400 border border-gray-200 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h4 className="font-serif text-base font-bold text-[#1a0a10] mb-2">
                      {promo.titulo}
                    </h4>
                    
                    {/* Descrição expansível */}
                    <div className={`
                      transition-all duration-300 overflow-hidden
                      ${isExpanded ? 'max-h-24 opacity-100 mb-3' : 'max-h-0 opacity-0'}
                    `}>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {promo.descricao}
                      </p>
                    </div>
                    
                    {/* Link Saiba mais - Separado do botão de expandir */}
                    <a
                      href={promo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#d41d51] font-medium text-xs hover:gap-2 transition-all"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Saiba mais
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop View - Carrossel */}
        <div className="hidden md:block mb-16">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-[#1a0a10]">
              Outras novidades que você vai amar
            </h3>
            
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  currentIndex === 0
                    ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                    : 'border-[#d41d51] text-[#d41d51] hover:bg-[#d41d51] hover:text-white'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  currentIndex === maxIndex
                    ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                    : 'border-[#d41d51] text-[#d41d51] hover:bg-[#d41d51] hover:text-white'
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {outrasPromos.map((promo) => (
                <div key={promo.id} className="px-3" style={{ minWidth: `${100 / itemsPerView}%` }}>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-md h-full">
                    <div className="relative h-56">
                      <Image
                        src={promo.imagem}
                        alt={promo.titulo}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {promo.tags.map((tag, idx) => (
                          <span key={idx} className="text-[10px] font-semibold uppercase text-gray-400 border border-gray-200 px-2 py-1 rounded-full">
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
                        className="inline-flex items-center gap-2 text-[#d41d51] font-medium text-sm hover:gap-3 transition-all"
                      >
                        Saiba mais
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicadores Desktop */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-2 bg-[#d41d51]'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}