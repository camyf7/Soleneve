"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          
          {/* ================= IMAGE SIDE ================= */}
          <div className="relative w-full">
            
            {/* Image Container */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Freddy.png"
                alt="Loja Sol e Neve Caraguatatuba"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-[#d41d51] text-white rounded-2xl p-4 sm:p-6 shadow-xl max-w-[160px] sm:max-w-[200px]">
              <div className="text-2xl sm:text-4xl font-serif font-bold">
                +150
              </div>
              <div className="text-xs sm:text-sm text-white/80 mt-1 leading-snug">
                Sabores para você experimentar
              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-24 sm:h-24 border-2 border-[#FFD700]/30 rounded-2xl" />
          </div>

          {/* ================= TEXT SIDE ================= */}
          <div>
            <span className="inline-block text-[#d41d51] text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Nossa História
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1a0a10] mb-6 leading-tight">
              O melhor de Minas{" "}
              <span className="text-[#d41d51]">
                no Litoral Norte
              </span>
            </h2>

            <p className="text-[#5a4a50] text-base sm:text-lg leading-relaxed mb-6">
              A Sol & Neve é uma marca de sorvetes mineira presente em todo o
              Sudeste, levando sabor, alegria e o melhor de Minas para você e
              sua família.
            </p>

            <p className="text-[#5a4a50] leading-relaxed mb-8">
              Agora em Caraguatatuba, trazemos toda a qualidade e tradição dos
              nossos sorvetes artesanais para o litoral norte de São Paulo.
              Venha nos visitar e descubra por que somos a escolha de milhares
              de famílias.
            </p>

            {/* ================= STATS ================= */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-10">
              {[
                { number: "16+", label: "Categorias" },
                { number: "150+", label: "Sabores" },
                { number: "100%", label: "Qualidade" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-serif font-bold text-[#d41d51]">
                    {stat.number}
                  </div>
                  <div className="text-[#5a4a50] text-xs sm:text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* ================= BUTTON ================= */}
            <Link
              href="/sobre"
              className="inline-flex items-center gap-3 bg-[#1a0a10] hover:bg-[#2a1520] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Conheça Nossa História
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}