"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/lib/products";
import { categories } from "@/lib/products";

function generateProductColor(index: number, baseColor: string): string {
  const colors = [
    "#d41d51",
    "#e67e22",
    "#27ae60",
    "#2980b9",
    "#8e44ad",
    "#e74c3c",
    "#16a085",
    "#c0392b",
    "#2c3e50",
    "#f39c12",
  ];
  return colors[index % colors.length];
}

export default function CategoryDetail({ category }: { category: Category }) {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  // Related categories (excluding current)
  const relatedCategories = categories
    .filter((c) => c.slug !== category.slug)
    .slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a10]/85 via-[#1a0a10]/70 to-[#1a0a10]/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm mb-8">
            <Link
              href="/"
              className="text-white/50 hover:text-white transition-colors"
            >
              Inicio
            </Link>
            <svg
              className="w-4 h-4 text-white/30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <Link
              href="/produtos"
              className="text-white/50 hover:text-white transition-colors"
            >
              Produtos
            </Link>
            <svg
              className="w-4 h-4 text-white/30"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="text-white font-medium">{category.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
            <div>
              <div
                className="w-12 h-1.5 rounded-full mb-6"
                style={{ backgroundColor: category.color }}
              />
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
                {category.name}
              </h1>
              <p className="text-white/70 text-lg max-w-xl">
                {category.description}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
              <div className="text-3xl font-serif font-bold text-white">
                {category.products.length}
              </div>
              <div className="text-white/60 text-sm">
                {category.products.length === 1
                  ? "sabor disponivel"
                  : "sabores disponiveis"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-[#fdf8f5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {category.products.map((product, index) => {
              const productColor = generateProductColor(
                index,
                category.color
              );
              const isSelected = selectedProduct === product.slug;

              return (
                <div
                  key={product.slug}
                  className={`group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                    isSelected ? "ring-2 ring-offset-2" : ""
                  }`}
                  style={
                    isSelected
                      ? { ringColor: category.color }
                      : undefined
                  }
                  onClick={() =>
                    setSelectedProduct(
                      isSelected ? null : product.slug
                    )
                  }
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setSelectedProduct(
                        isSelected ? null : product.slug
                      );
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  {/* Color Header */}
                  <div
                    className="relative h-44 flex items-center justify-center overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${category.color}22, ${productColor}33)`,
                    }}
                  >
                    {/* Abstract ice cream shape */}
                    <div className="relative">
                      <div
                        className="w-24 h-24 rounded-full opacity-80 group-hover:scale-110 transition-transform duration-500 shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${category.color}, ${productColor})`,
                        }}
                      />
                      <div
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-12 rounded-b-lg opacity-60"
                        style={{ backgroundColor: `${category.color}88` }}
                      />
                    </div>

                    {/* Index Badge */}
                    <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-xs font-bold text-[#1a0a10]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-serif font-bold text-[#1a0a10] mb-2 group-hover:text-[#d41d51] transition-colors leading-tight">
                      {product.name}
                    </h3>
                    {product.description && (
                      <p className="text-[#5a4a50] text-sm leading-relaxed">
                        {product.description}
                      </p>
                    )}

                    {/* Expanded Details */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isSelected ? "max-h-40 mt-4 pt-4 border-t border-[#e8ddd5]" : "max-h-0"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor: category.color,
                          }}
                        />
                        <span className="text-xs font-semibold text-[#5a4a50] uppercase tracking-wider">
                          {category.name}
                        </span>
                      </div>
                      <a
                        href="https://wa.me/5512991234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Quero esse!
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-[#d41d51] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Explore Mais
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a0a10]">
              Outras Categorias
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/produtos/${cat.slug}`}
                className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <Image
                  src={cat.image || "/placeholder.svg"}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a10] via-[#1a0a10]/30 to-transparent opacity-80" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div
                    className="w-8 h-1 rounded-full mb-3"
                    style={{ backgroundColor: cat.color }}
                  />
                  <h3 className="text-lg font-serif font-bold text-white">
                    {cat.name}
                  </h3>
                  <p className="text-white/50 text-xs mt-1">
                    {cat.products.length} sabores
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Back to All */}
          <div className="text-center mt-12">
            <Link
              href="/produtos"
              className="inline-flex items-center gap-3 text-[#d41d51] hover:text-[#b8173f] font-semibold transition-colors"
            >
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
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Voltar para Todos os Produtos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
