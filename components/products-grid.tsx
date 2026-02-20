"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { categories, type Product, type Category } from "@/lib/products";

// Função para normalizar texto (remover acentos e caracteres especiais)
function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .replace(/[^a-z0-9\s]/g, "") // Remove caracteres especiais
    .trim();
}

// Função para calcular similaridade entre textos (Levenshtein distance simplificada)
function calculateSimilarity(str1: string, str2: string): number {
  const s1 = normalizeText(str1);
  const s2 = normalizeText(str2);
  
  if (s1 === s2) return 1;
  if (s1.includes(s2) || s2.includes(s1)) return 0.9;
  
  // Conta palavras em comum
  const words1 = s1.split(' ');
  const words2 = s2.split(' ');
  const commonWords = words1.filter(w => words2.includes(w));
  
  return commonWords.length / Math.max(words1.length, words2.length);
}

interface SearchResult {
  type: 'product' | 'category';
  item: Product | Category;
  category?: Category;
  score: number;
}

export default function ProductsGrid() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Resultados da busca inteligente
  const searchResults = useMemo<SearchResult[]>(() => {
    if (!searchQuery.trim()) return [];

    const normalizedQuery = normalizeText(searchQuery);
    const results: SearchResult[] = [];

    // Primeiro: buscar produtos exatos
    categories.forEach(category => {
      category.products.forEach(product => {
        const normalizedProductName = normalizeText(product.name);
        const similarity = calculateSimilarity(normalizedProductName, normalizedQuery);
        
        if (similarity > 0.6) { // Limiar de similaridade
          results.push({
            type: 'product',
            item: product,
            category,
            score: similarity
          });
        }
      });
    });

    // Segundo: buscar categorias
    categories.forEach(category => {
      const normalizedCategoryName = normalizeText(category.name);
      const normalizedCategoryDesc = normalizeText(category.description);
      
      // Similaridade com nome da categoria
      const nameSimilarity = calculateSimilarity(normalizedCategoryName, normalizedQuery);
      
      // Similaridade com descrição da categoria
      const descSimilarity = calculateSimilarity(normalizedCategoryDesc, normalizedQuery);
      
      // Similaridade com produtos da categoria (se não encontrou produtos exatos)
      const productSimilarity = results.filter(r => r.type === 'product' && r.category?.slug === category.slug)
        .reduce((acc, r) => Math.max(acc, r.score), 0);

      const maxSimilarity = Math.max(nameSimilarity, descSimilarity, productSimilarity * 0.8);

      if (maxSimilarity > 0.5) {
        results.push({
          type: 'category',
          item: category,
          score: maxSimilarity
        });
      }
    });

    // Ordenar por score e limitar
    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
  }, [searchQuery]);

  // Filtrar categorias para exibição normal
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categories;

    // Se houver resultados específicos, mostrar apenas categorias relevantes
    const relevantCategorySlugs = new Set(
      searchResults
        .filter(r => r.type === 'category')
        .map(r => (r.item as Category).slug)
    );

    // Adicionar categorias dos produtos encontrados
    searchResults
      .filter(r => r.type === 'product' && r.category)
      .forEach(r => relevantCategorySlugs.add(r.category!.slug));

    if (relevantCategorySlugs.size > 0) {
      return categories.filter(cat => relevantCategorySlugs.has(cat.slug));
    }

    // Fallback para busca tradicional
    return categories.filter(
      (cat) =>
        normalizeText(cat.name).includes(normalizeText(searchQuery)) ||
        normalizeText(cat.description).includes(normalizeText(searchQuery)) ||
        cat.products.some((p) =>
          normalizeText(p.name).includes(normalizeText(searchQuery))
        )
    );
  }, [searchQuery, searchResults]);

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showSuggestions || searchResults.length === 0) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => Math.min(prev + 1, searchResults.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => Math.max(prev - 1, -1));
          break;
        case 'Enter':
          if (selectedIndex >= 0) {
            const result = searchResults[selectedIndex];
            if (result.type === 'product' && result.category) {
              window.location.href = `/produtos/${result.category.slug}#${(result.item as Product).slug}`;
            } else {
              window.location.href = `/produtos/${(result.item as Category).slug}`;
            }
          }
          break;
        case 'Escape':
          setShowSuggestions(false);
          setSelectedIndex(-1);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [showSuggestions, searchResults, selectedIndex]);

  // Fechar sugestões ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="py-20 bg-[#fdf8f5]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Search com Sugestões Inteligentes */}
        <div className="max-w-lg mx-auto mb-16" ref={searchRef}>
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
              ref={inputRef}
              type="text"
              placeholder="Busque por produtos ou categorias..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
                setSelectedIndex(-1);
              }}
              onFocus={() => setShowSuggestions(true)}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-[#e8ddd5] focus:outline-none focus:ring-2 focus:ring-[#d41d51]/30 focus:border-[#d41d51] text-[#1a0a10] placeholder-[#9a8a90] shadow-sm transition-all duration-300"
            />

            {/* Sugestões Inteligentes */}
            {showSuggestions && searchResults.length > 0 && (
              <div className="absolute z-50 w-full mt-2 bg-white rounded-2xl shadow-xl border border-[#e8ddd5] overflow-hidden">
                {searchResults.map((result, index) => (
                  <Link
                    key={`${result.type}-${result.type === 'product' ? (result.item as Product).slug : (result.item as Category).slug}`}
                    href={result.type === 'product' && result.category 
                      ? `/produtos/${result.category.slug}#${(result.item as Product).slug}`
                      : `/produtos/${(result.item as Category).slug}`
                    }
                    className={`flex items-center gap-3 p-4 hover:bg-[#fdf8f5] transition-colors ${
                      index === selectedIndex ? 'bg-[#fdf8f5] border-l-4 border-[#d41d51]' : ''
                    }`}
                    onClick={() => setShowSuggestions(false)}
                  >
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={result.type === 'product' 
                          ? (result.item as Product).image 
                          : (result.item as Category).image
                        }
                        alt={result.type === 'product' 
                          ? (result.item as Product).name 
                          : (result.item as Category).name
                        }
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-[#1a0a10] truncate">
                          {result.type === 'product' 
                            ? (result.item as Product).name 
                            : (result.item as Category).name
                          }
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[#d41d51]/10 text-[#d41d51] font-medium">
                          {result.type === 'product' ? 'Produto' : 'Categoria'}
                        </span>
                        {result.score > 0.9 && (
                          <span className="text-xs text-green-600">⚡ Exato</span>
                        )}
                      </div>
                      {result.type === 'product' && result.category && (
                        <p className="text-xs text-[#9a8a90] truncate">
                          em {result.category.name}
                        </p>
                      )}
                      {result.type === 'category' && (
                        <p className="text-xs text-[#9a8a90] truncate">
                          {(result.item as Category).description}
                        </p>
                      )}
                    </div>
                    <svg
                      className="w-4 h-4 text-[#d41d51] flex-shrink-0"
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
                  </Link>
                ))}

                {/* Indicador de mais resultados */}
                {searchResults.length === 8 && (
                  <div className="p-3 text-center border-t border-[#e8ddd5]">
                    <span className="text-xs text-[#9a8a90]">
                      Mostrando 8 de {searchResults.length}+ resultados
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Feedback de busca */}
          {searchQuery && searchResults.length === 0 && (
            <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
              <p className="text-sm text-amber-800">
                🔍 Não encontramos "{searchQuery}" exatamente, mas você pode navegar pelas categorias abaixo:
              </p>
            </div>
          )}

          {/* Sugestão de correção ortográfica */}
          {searchQuery && searchResults.length === 0 && (
            <div className="mt-2 text-center">
              <span className="text-xs text-[#9a8a90]">
                Tente: acai, pistache, chocolate, morango...
              </span>
            </div>
          )}
        </div>

        {/* Grid de Categorias */}
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
              Nenhuma categoria encontrada
            </h3>
            <p className="text-[#5a4a50]">
              Tente buscar por outro termo ou limpe a busca.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-6 px-6 py-3 bg-[#d41d51] text-white rounded-full text-sm font-semibold hover:bg-[#b01842] transition-colors"
            >
              Limpar busca
            </button>
          </div>
        )}
      </div>
    </section>
  );
}