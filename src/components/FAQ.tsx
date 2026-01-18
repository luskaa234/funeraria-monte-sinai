"use client";

import { useState } from "react";

const perguntas = [
  {
    q: "O atendimento funciona 24 horas?",
    a: "Sim. Nosso atendimento está disponível 24 horas por dia, todos os dias da semana, para oferecer apoio imediato às famílias.",
  },
  {
    q: "Como funcionam os planos funerários?",
    a: "Os planos são pensados para garantir tranquilidade e segurança, permitindo que a família esteja amparada quando mais precisa.",
  },
  {
    q: "Atendem outras cidades?",
    a: "Sim. Realizamos atendimento e translado conforme a necessidade, sempre respeitando cada situação.",
  },
  {
    q: "Como entrar em contato rapidamente?",
    a: "O contato pode ser feito diretamente pelo WhatsApp ou pelos nossos canais de atendimento.",
  },
];

export default function FAQ() {
  const [aberta, setAberta] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-8">

        <h2 className="text-[26px] md:text-[34px] font-serif font-semibold text-dark mb-6">
          Perguntas frequentes
        </h2>

        <div className="w-12 h-[1px] bg-secondary mb-10 opacity-80" />

        <div className="space-y-4">
          {perguntas.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-sm overflow-hidden"
            >
              <button
                onClick={() => setAberta(aberta === index ? null : index)}
                className="w-full flex justify-between items-center px-6 py-5
                           text-left text-[15px] md:text-[16px]
                           font-medium text-dark hover:bg-light transition"
              >
                {item.q}
                <span className="text-secondary text-xl">
                  {aberta === index ? "–" : "+"}
                </span>
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  aberta === index ? "max-h-40 py-4" : "max-h-0"
                }`}
              >
                <p className="text-[14px] md:text-[15px] text-gray-700 leading-[1.7]">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}