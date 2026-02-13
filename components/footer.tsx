import Link from "next/link";
import Image from "next/image";
import { SiIfood } from "react-icons/si";
import { SiInstagram } from "react-icons/si"; 


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
                  icon: <SiInstagram className="w-5 h-5" />, // Ícone do Instagram como componente  

                },
                {
                  name: "iFood",
                  link: "https://www.ifood.com.br/delivery/caraguatatuba-sp/sorveteria-sol--neve----caragua-centro/478c0603-4ca3-4de5-8c8a-d136fc94cafa",
                  icon: <SiIfood className="w-5 h-5" />, // Ícone do iFood como componente
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
                  {typeof social.icon === "string" ? (
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {social.icon}
                    </svg>
                  ) : (
                    social.icon // Para o ícone do iFood que é um componente
                  )}
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
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
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