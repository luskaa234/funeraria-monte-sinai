import Link from "next/link";

export default function Servicos() {
  return (
    <section className="relative bg-light py-14 md:py-20 lg:py-24 overflow-hidden">

      {/* SHAPES — APENAS DESKTOP */}
      <div className="hidden lg:block absolute top-24 right-16 w-36 h-36 bg-secondary/20 rounded-full lg:animate-float-medium lg:animate-drift-left" />
      <div className="hidden lg:block absolute bottom-24 left-20 w-28 h-28 bg-primary/20 rotate-45 lg:animate-float-medium lg:animate-drift-right" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

        {/* CABEÇALHO */}
        <div className="max-w-2xl mb-14 md:mb-16">
          <h2 className="text-[26px] md:text-[32px] lg:text-[36px] font-serif font-semibold text-dark mb-6">
            Nossos serviços
          </h2>

          <div className="w-12 h-[1px] bg-secondary mb-8 opacity-80" />

          <p className="text-[14px] md:text-[15px] lg:text-[16px] text-gray-700 leading-[1.8]">
            Atuamos com sensibilidade, respeito e estrutura completa,
            oferecendo serviços que garantem tranquilidade às famílias
            em todos os momentos.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">

          {[
            {
              title: "Atendimento funerário 24h",
              text: "Presença constante e orientação clara quando mais se precisa.",
              icon: (
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5h-2v6l5 3 .9-1.5-3.9-2.3V7z" />
              ),
            },
            {
              title: "Translado funerário",
              text: "Atuação organizada e responsável, respeitando cada situação.",
              icon: (
                <path d="M3 11h18v2H3zm2-4h14v2H5zm4-4h6v2H9z" />
              ),
            },
            {
              title: "Orientação à família",
              text: "Acompanhamento humano em todas as etapas necessárias.",
              icon: (
                <path d="M12 12c2.7 0 5-2.3 5-5S14.7 2 12 2 7 4.3 7 7s2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
              ),
            },
            {
              title: "Planos funerários",
              text: "Opções pensadas para garantir segurança e tranquilidade.",
              icon: (
                <path d="M4 4h16v2H4zm0 4h16v2H4zm0 4h10v2H4z" />
              ),
            },
            {
              title: "Coroas de flores",
              text: "Arranjos preparados com respeito e sensibilidade.",
              icon: (
                <path d="M12 2l2 6h6l-4.9 3.6L17 18l-5-3.4L7 18l1.9-6.4L4 8h6z" />
              ),
            },
            {
              title: "Suporte completo",
              text: "Estrutura e equipe prontas para atender com dignidade.",
              icon: (
                <path d="M12 5a7 7 0 017 7v5h-2v-5a5 5 0 00-10 0v5H5v-5a7 7 0 017-7z" />
              ),
            },
          ].map((service, index) => (
            <div
              key={index}
              className="
                group bg-white/85 backdrop-blur-sm p-7 md:p-8
                border border-gray-200 transition-all duration-500
                lg:hover:-translate-y-3 lg:hover:shadow-xl
                animate-fade-up
              "
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {/* ÍCONE */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="
                  w-9 h-9 md:w-10 md:h-10 text-secondary mb-5
                  lg:group-hover:scale-110 transition-transform duration-500
                "
              >
                {service.icon}
              </svg>

              <h3 className="text-[17px] md:text-[18px] font-serif font-semibold text-dark mb-3">
                {service.title}
              </h3>

              <p className="text-[14px] md:text-[15px] text-gray-700 leading-[1.7]">
                {service.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 md:mt-20 text-center">
          <Link
            href="/contato"
            className="
              inline-block border border-secondary px-8 py-4
              text-[14px] font-medium text-secondary
              hover:bg-secondary hover:text-white
              transition-colors duration-300
            "
          >
            Falar com atendimento
          </Link>
        </div>

      </div>
    </section>
  );
}