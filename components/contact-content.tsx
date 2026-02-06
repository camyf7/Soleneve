"use client";

import React from "react"

import { useState } from "react";
import Image from "next/image";

export default function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct WhatsApp message
    const msg = `Ola! Meu nome e ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/5512991234567?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#1a0a10] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-64 h-64 bg-[#d41d51] rounded-full blur-[120px]" />
          <div className="absolute bottom-10 right-20 w-48 h-48 bg-[#FFD700] rounded-full blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-[#FFD700] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Fale Conosco
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 text-balance">
            Entre em{" "}
            <span className="text-[#d41d51]">Contato</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto text-pretty">
            Estamos aqui para te atender. Fale conosco pelo WhatsApp, visite
            nossa loja ou envie uma mensagem.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-[#fdf8f5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#1a0a10] mb-8">
                Informacoes de Contato
              </h2>

              <div className="space-y-6 mb-12">
                {/* Address */}
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-[#d41d51]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#d41d51]"
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
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a0a10] mb-1">
                      Endereco
                    </h3>
                    <p className="text-[#5a4a50] text-sm leading-relaxed">
                      Caraguatatuba - SP
                      <br />
                      Litoral Norte de Sao Paulo
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#25D366]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a0a10] mb-1">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/5512991234567"
                      className="text-[#25D366] font-medium hover:underline"
                    >
                      (12) 99123-4567
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-[#FFD700]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#FFD700]"
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
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a0a10] mb-1">
                      Horario de Funcionamento
                    </h3>
                    <div className="text-[#5a4a50] text-sm space-y-1">
                      <p>
                        Segunda a Sexta:{" "}
                        <span className="font-medium text-[#1a0a10]">
                          10h - 22h
                        </span>
                      </p>
                      <p>
                        Sabados:{" "}
                        <span className="font-medium text-[#1a0a10]">
                          10h - 23h
                        </span>
                      </p>
                      <p>
                        Domingos e Feriados:{" "}
                        <span className="font-medium text-[#1a0a10]">
                          12h - 22h
                        </span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-[#E1306C]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#E1306C]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1a0a10] mb-1">
                      Instagram
                    </h3>
                    <a
                      href="https://instagram.com/soleneve"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E1306C] font-medium hover:underline"
                    >
                      @solenevecaragua
                    </a>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-72">
                <Image
                  src="/images/caraguatatuba.jpg"
                  alt="Localizacao Caraguatatuba"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#1a0a10]/40 flex items-center justify-center">
                  <a
                    href="https://maps.google.com/?q=Caraguatatuba+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white text-[#1a0a10] px-6 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg
                      className="w-5 h-5 text-[#d41d51]"
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
                    Abrir no Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#1a0a10] mb-8">
                Envie uma Mensagem
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#1a0a10] mb-2"
                  >
                    Seu Nome
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-white rounded-2xl border border-[#e8ddd5] focus:outline-none focus:ring-2 focus:ring-[#d41d51]/30 focus:border-[#d41d51] text-[#1a0a10] placeholder-[#9a8a90] transition-all duration-300"
                    placeholder="Digite seu nome"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#1a0a10] mb-2"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-white rounded-2xl border border-[#e8ddd5] focus:outline-none focus:ring-2 focus:ring-[#d41d51]/30 focus:border-[#d41d51] text-[#1a0a10] placeholder-[#9a8a90] transition-all duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#1a0a10] mb-2"
                  >
                    Telefone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-white rounded-2xl border border-[#e8ddd5] focus:outline-none focus:ring-2 focus:ring-[#d41d51]/30 focus:border-[#d41d51] text-[#1a0a10] placeholder-[#9a8a90] transition-all duration-300"
                    placeholder="(12) 99999-9999"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#1a0a10] mb-2"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-white rounded-2xl border border-[#e8ddd5] focus:outline-none focus:ring-2 focus:ring-[#d41d51]/30 focus:border-[#d41d51] text-[#1a0a10] placeholder-[#9a8a90] resize-none transition-all duration-300"
                    placeholder="Sua mensagem..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#d41d51] hover:bg-[#b8173f] text-white py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#d41d51]/20 hover:-translate-y-0.5 flex items-center justify-center gap-3"
                >
                  {submitted ? (
                    <>
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
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Redirecionando para WhatsApp...
                    </>
                  ) : (
                    <>
                      Enviar pelo WhatsApp
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              {/* WhatsApp Direct */}
              <div className="mt-8 p-6 bg-[#25D366]/5 border border-[#25D366]/20 rounded-2xl text-center">
                <p className="text-[#5a4a50] text-sm mb-4">
                  Ou fale diretamente pelo WhatsApp:
                </p>
                <a
                  href="https://wa.me/5512991234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/30 hover:-translate-y-0.5"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
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
