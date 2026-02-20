"use client";

import Image from "next/image";
import { SiIfood } from "react-icons/si";

export default function CtaSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/caraguatatuba.jpg"
          alt="Caraguatatuba"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#d41d51]/90 to-[#1a0a10]/90" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 text-balance">
          Visite nossa loja em{" "}
          <span className="text-[#FFD700]">Caraguatatuba</span>
        </h2>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Estamos esperando voce com os melhores sorvetes, acais, sobremesas e
          muito mais. Traga sua familia e venha se refrescar!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
          href="https://www.ifood.com.br/delivery/caraguatatuba-sp/sorveteria-sol--neve----caragua-centro/478c0603-4ca3-4de5-8c8a-d136fc94cafa"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1"
        >
          <SiIfood className="w-5 h-5 text-[#]" />
          Peça pelo iFood
        </a>
          <a
            href="https://maps.google.com/?q=Caraguatatuba+SP"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Como Chegar
          </a>
          <a
            href="https://www.google.com/maps/place/Sorveteria+Sol+e+Neve+Caragua/@-23.6208466,-45.4096449,17z/data=!3m1!4b1!4m6!3m5!1s0x94cd63002fa9ced3:0x6a30aeb1eff3404c!8m2!3d-23.6208466!4d-45.40707!16s%2Fg%2F11vq9wd4r1?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D">
            
            </a>
        </div>
      </div>
    </section>
  );
}
