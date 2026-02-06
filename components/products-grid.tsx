"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/products";

export default function ProductsGrid() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCategories = categories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.products.some((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <section className="py-20 bg-[#fdf8f5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Search */}
        <div className="max-w-lg mx-auto mb-16">
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#5a4a50]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Buscar categorias ou sabores..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-[#e8ddd5] focus:outline-none focus:ring-2 focus:ring-[#d41d51]/30 focus:border-[#d41d51] text-[#1a0a10] placeholder-[#9a8a90] shadow-sm transition-all duration-300"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCategories.map((category) => (
            <Link
              key={category.slug}
              href={`/produtos/${category.slug}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a10]/60 to-transparent" />

                {/* Product Count Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#1a0a10] px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
                  {category.products.length}{" "}
                  {category.products.length === 1 ? "sabor" : "sabores"}
                </div>

                {/* Color Accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 group-hover:h-1.5"
                  style={{ backgroundColor: category.color }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold text-[#1a0a10] mb-2 group-hover:text-[#d41d51] transition-colors">
                  {category.name}
                </h3>
                <p className="text-[#5a4a50] text-sm leading-relaxed mb-4">
                  {category.description}
                </p>

                {/* Preview of products */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {category.products.slice(0, 3).map((product) => (
                    <span
                      key={product.slug}
                      className="text-xs bg-[#fdf8f5] text-[#5a4a50] px-2.5 py-1 rounded-full"
                    >
                      {product.name}
                    </span>
                  ))}
                  {category.products.length > 3 && (
                    <span className="text-xs bg-[#d41d51]/10 text-[#d41d51] px-2.5 py-1 rounded-full font-medium">
                      +{category.products.length - 3}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-[#d41d51] text-sm font-semibold group-hover:gap-3 transition-all">
                  <span>Ver todos</span>
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
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-[#fdf8f5] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-[#d41d51]/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold text-[#1a0a10] mb-2">
              Nenhum resultado encontrado
            </h3>
            <p className="text-[#5a4a50]">
              Tente buscar por outro termo ou navegue pelas categorias.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
