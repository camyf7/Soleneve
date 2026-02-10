"use client";

import Image from "next/image";

export default function ContactContent() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-[#1a0a10] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#d41d51] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-20 w-48 h-48 bg-[#FFD700] rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-[#FFD700] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Fale Conosco
          </span>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Entre em <span className="text-[#d41d51]">Contato</span>
          </h1>

          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Estamos aqui para te atender. Fale conosco pelo WhatsApp ou visite
            nossa loja.
          </p>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section className="py-24 bg-[#fdf8f5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* COLUNA 1 — INFORMAÇÕES */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#1a0a10] mb-8">
                Informações de Contato
              </h2>

              <div className="space-y-6 mb-12">
                {/* IFOOD */}
                <InfoCard title="Ifood">
                  <a
                    href="https://www.ifood.com.br/delivery/caraguatatuba-sp/sorveteria-sol--neve----caragua-centro/478c0603-4ca3-4de5-8c8a-d136fc94cafa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d41d51] font-medium hover:underline"
                  >
                    Acesse nosso cardápio no iFood
                  </a>
                </InfoCard>

                {/* WHATSAPP */}
                <InfoCard title="WhatsApp">
                  <a
                    href="https://wa.me/5512991234567"
                    className="text-[#25D366] font-medium hover:underline"
                  >
                    (12) 99123-4567
                  </a>
                </InfoCard>

                {/* HORÁRIO */}
                <InfoCard title="Horário de Funcionamento">
                  Segunda a Sexta: <strong>12h - 22:30h</strong>
                  <br />
                  Sábados e Domingos: <strong>12h - 23:30h</strong>
                  <br />
                  
                </InfoCard>

                {/* INSTAGRAM */}
                <InfoCard title="Instagram">
                  <a
                    href="https://www.instagram.com/solenevecaragua"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E1306C] font-medium hover:underline"
                  >
                    @solenevecaragua
                  </a>
                </InfoCard>
              </div>

              {/* MAPA */}
              <div className="relative h-72 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/fora.png"
                  alt="Localização Caraguatatuba"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <a
                    href="https://maps.app.goo.gl/T29iTYKVgbFZKCNd8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transition"
                  >
                    Abrir no Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* COLUNA 2 — WHATSAPP */}
            <div className="flex items-center">
              <div className="w-full p-8 bg-[#25D366]/5 border border-[#25D366]/20 rounded-3xl text-center">
                <p className="text-[#5a4a50] mb-6">
                  Fale diretamente com a gente pelo WhatsApp
                </p>

                <a
                  href="https://wa.me/5512991234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-10 py-4 rounded-full font-semibold transition-all hover:shadow-lg"
                >
                  Abrir WhatsApp Agora
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

/* COMPONENTE AUXILIAR */
function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="font-semibold text-[#1a0a10] mb-2">{title}</h3>
      <p className="text-[#5a4a50] text-sm leading-relaxed">{children}</p>
    </div>
  );
}
