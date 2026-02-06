import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* IMAGEM DE FUNDO */}
      <Image
        src="/banner.png"
        alt="Banner Sol & Neve"
        fill
        priority
        className="object-cover w-full h-full"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />

      {/* CONTEÚDO */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 text-center">
        <div className="text-white max-w-4xl">
          <span className="inline-block mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
            📍 Caraguatatuba - Litoral Norte SP
          </span>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
            Todo dia, <span className="text-yellow-400">sabor</span> e{" "}
            <span className="text-yellow-400">alegria</span>
          </h1>

          <p className="text-white/80 mb-10">
            Sorvetes artesanais com qualidade e alegria para toda a família.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/produtos"
              className="bg-[#d41d51] px-8 py-4 rounded-full font-semibold"
            >
              Nossos Produtos
            </Link>

            <a
              href="https://wa.me/5512991234567"
              className="bg-white/10 border border-white/30 px-8 py-4 rounded-full font-semibold"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
