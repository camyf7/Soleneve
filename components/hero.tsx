"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SiInstagram } from "react-icons/si"; 


export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Sorvetes Sol e Neve"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a10]/80 via-[#1a0a10]/50 to-[#1a0a10]/90" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-3 h-3 bg-[#FFD700]/30 rounded-full animate-pulse" />
        <div
          className="absolute top-1/3 right-20 w-2 h-2 bg-[#d41d51]/40 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-[#FFD700]/20 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-2 h-2 bg-white/20 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wide">
              Caraguatatuba - Litoral Norte SP
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight text-balance">
            Todo dia,{" "}
            <span className="text-[#FFD700] relative">
              sabor
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 8 Q50 2 100 6 Q150 10 198 4"
                  stroke="#d41d51"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            e{" "}
            <span className="text-[#FFD700]">alegria</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed font-light text-pretty">
            Somos uma marca de sorvetes mineira que chegou ao Litoral Norte
            levando o melhor sabor, qualidade e alegria para voce e sua familia.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/produtos"
              className="group relative bg-[#d41d51] hover:bg-[#b8173f] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#d41d51]/30 hover:-translate-y-1 flex items-center gap-3"
            >
              Nossos Produtos
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
            <a
              href="https://www.instagram.com/soleneve_caragua/"
              
              className="group bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-3"
            >
              <svg
          className="w-10 h-8 text-[#E1306C]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <SiInstagram className="w-7 h-5" />
        </svg>

              Fale Conosco
              
            </a>
          </div>
        </div>

        
        {/* Scroll indicator */}
<div
  className={`mt-10 flex justify-center transition-all duration-1000 delay-1000 ${
    isVisible ? "opacity-100" : "opacity-0"
  }`}
>

          <div className="flex flex-col items-center gap-2 text-white/40">
            <span className="text-xs tracking-widest uppercase">Descubra</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
