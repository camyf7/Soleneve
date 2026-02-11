import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a0a10] text-white">
      {/* Wave Separator */}
      <div className="relative -mt-1">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path
            d="M0 40 Q360 80 720 40 Q1080 0 1440 40 L1440 80 L0 80 Z"
            fill="#1a0a10"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 group mb-6">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-[#d41d51] flex items-center justify-center shadow-lg overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/logo.png"
                    alt="Logo Sol & Neve"
                    width={40}
                    height={40}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-white font-serif text-xl font-bold tracking-tight leading-tight">
                  Sol & Neve
                </span>
                <span className="text-[#FFD700] text-[10px] font-sans font-semibold tracking-[0.2em] uppercase">
                  Caraguatatuba
                </span>
              </div>
            </Link>

            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Levando sabor, alegria e o melhor de Minas para Caraguatatuba.
              Todo dia, sabor e alegria.
            </p>

            <div className="flex gap-3">
              {[
                {
                  name: "Instagram",
                  link: "https://www.instagram.com/soleneve_caragua/",
                  icon: (
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  ),
                },
                {
                  name: "iFood",
                  link: "https://www.ifood.com.br/delivery/caraguatatuba-sp/sorveteria-sol--neve----caragua-centro/478c0603-4ca3-4de5-8c8a-d136fc94cafa",
                  icon: (
                     <path d="M3 3h18v2H3V3zm2 4h14l-1.5 14h-11L5 7zm4 2v8h2V9H9zm4 0v8h2V9h-2z" />
                  ),
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#d41d51] transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-[#FFD700]">
              Navegação
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Início" },
                { href: "/produtos", label: "Nossos Produtos" },
                { href: "/sobre", label: "Sobre Nós" },
                { href: "/contato", label: "Contato" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d41d51] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-[#FFD700]">
              Produtos
            </h3>
            <ul className="space-y-3">
              {[
                "Açaís",
                "Picolés",
                "Potes",
                "Paletas",
                "Sobremesas",
                "Self Service",
              ].map((product) => (
                <li key={product}>
                  <Link
                    href="/produtos"
                    className="text-white/60 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#d41d51] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-[#FFD700]">
              Contato
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#d41d51] mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/60 text-sm leading-relaxed">
                  Caraguatatuba - SP
                  <br />
                  Litoral Norte
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#d41d51] mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white/60 text-sm leading-relaxed">
                  Seg - Dom: 10h - 22h
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
