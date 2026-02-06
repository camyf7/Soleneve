"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-store.jpg"
                alt="Loja Sol e Neve Caraguatatuba"
                width={600}
                height={500}
                className="object-cover w-full h-[500px]"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-[#d41d51] text-white rounded-2xl p-6 shadow-xl max-w-[200px]">
              <div className="text-4xl font-serif font-bold mb-1">+150</div>
              <div className="text-white/80 text-sm">
                Sabores para voce experimentar
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#FFD700]/30 rounded-2xl" />
          </div>

          {/* Text Side */}
          <div>
            <span className="inline-block text-[#d41d51] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Nossa Historia
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a0a10] mb-6 leading-tight text-balance">
              O melhor de Minas{" "}
              <span className="text-[#d41d51]">
                no Litoral Norte
              </span>
            </h2>
            <p className="text-[#5a4a50] text-lg leading-relaxed mb-6">
              A Sol & Neve e uma marca de sorvetes mineira que esta presente em
              todo o Sudeste, levando sabor, alegria e o melhor de Minas para
              voce e sua familia.
            </p>
            <p className="text-[#5a4a50] leading-relaxed mb-8">
              Agora em Caraguatatuba, trazemos toda a qualidade e tradicao dos
              nossos sorvetes artesanais para o litoral norte de Sao Paulo.
              Venha nos visitar e descubra por que somos a escolha de milhares de
              familias.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { number: "16+", label: "Categorias" },
                { number: "150+", label: "Sabores" },
                { number: "100%", label: "Qualidade" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-serif font-bold text-[#d41d51]">
                    {stat.number}
                  </div>
                  <div className="text-[#5a4a50] text-sm mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/sobre"
              className="inline-flex items-center gap-3 bg-[#1a0a10] hover:bg-[#2a1520] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              Conheca Nossa Historia
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
