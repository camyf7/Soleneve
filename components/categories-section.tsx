"use client";

import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/products";

export default function CategoriesSection() {
  const featured = categories.slice(0, 8);

  return (
    <section className="py-24 bg-[#fdf8f5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#d41d51] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Linha de Produtos
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a0a10] mb-6 text-balance">
            Nossos{" "}
            <span className="text-[#d41d51]">Produtos</span>
          </h2>
          <p className="text-[#5a4a50] text-lg max-w-2xl mx-auto text-pretty">
            Descubra nossa linha completa de sorvetes, acais, paletas,
            sobremesas e muito mais. Tudo feito com ingredientes selecionados.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((category, index) => (
            <Link
              key={category.slug}
              href={`/produtos/${category.slug}`}
              className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a10] via-[#1a0a10]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div
                    className="w-10 h-1 rounded-full mb-4 transition-all duration-500 group-hover:w-16"
                    style={{ backgroundColor: category.color }}
                  />
                  <h3 className="text-xl font-serif font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/60 text-sm line-clamp-2 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-[#FFD700] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span>Ver produtos</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Link
            href="/produtos"
            className="inline-flex items-center gap-3 bg-[#d41d51] hover:bg-[#b8173f] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-[#d41d51]/20 hover:-translate-y-1"
          >
            Ver Todos os Produtos
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
    </section>
  );
}
