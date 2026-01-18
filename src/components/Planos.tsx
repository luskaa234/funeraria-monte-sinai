import Link from "next/link";

export default function Planos() {
  return (
    <section className="relative bg-white py-16 md:py-24 overflow-hidden">

      {/* SHAPES DE FUNDO */}
      <div className="hidden md:block absolute -top-24 right-10 w-40 h-40 bg-secondary/15 rounded-full animate-float-medium animate-drift-left" />
      <div className="hidden md:block absolute bottom-24 left-16 w-28 h-28 bg-primary/15 rotate-45 animate-float-medium animate-drift-right" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

        {/* Cabeçalho */}
        <div className="max-w-2xl mb-16 animate-fade-up">
          <h2 className="text-[28px] md:text-[36px] font-serif font-semibold text-dark mb-6">
            Nossos planos
          </h2>

          <div className="w-12 h-[1px] bg-secondary mb-8 opacity-80" />

          <p className="text-[15px] md:text-[16px] text-gray-700 leading-[1.8]">
            Opções pensadas para oferecer tranquilidade, cuidado e
            acolhimento, respeitando diferentes realidades e necessidades.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* BRONZE */}
          <div className="group border border-gray-200 p-8 md:p-10 transition-all duration-500
            hover:-translate-y-3 hover:shadow-lg animate-fade-up">

            <span className="block text-[13px] tracking-widest text-secondary uppercase mb-3">
              Plano Bronze
            </span>

            <h3 className="text-[20px] font-serif font-semibold text-dark mb-4">
              Essencial e digno
            </h3>

            <p className="text-[15px] text-gray-700 leading-[1.7] mb-8">
              Para quem busca cuidado, respeito e acolhimento,
              com a tranquilidade de estar amparado quando mais importa.
            </p>

            <Link
              href="/contato"
              className="text-[14px] font-medium text-primary group-hover:underline"
            >
              Conhecer este plano
            </Link>
          </div>

          {/* PRATA */}
          <div className="group border-2 border-secondary bg-light p-8 md:p-10 transition-all duration-500
            hover:-translate-y-4 hover:shadow-xl animate-fade-up delay-200">

            <span className="block text-[13px] tracking-widest text-secondary uppercase mb-3">
              Plano Prata
            </span>

            <h3 className="text-[20px] font-serif font-semibold text-dark mb-4">
              Equilíbrio e segurança
            </h3>

            <p className="text-[15px] text-gray-700 leading-[1.7] mb-8">
              Ideal para famílias que desejam mais tranquilidade
              e a certeza de um suporte sólido em todos os momentos.
            </p>

            <Link
              href="/contato"
              className="text-[14px] font-medium text-secondary group-hover:underline"
            >
              Falar com atendimento
            </Link>
          </div>

          {/* OURO */}
          <div className="group border border-gray-200 p-8 md:p-10 transition-all duration-500
            hover:-translate-y-5 hover:shadow-2xl animate-fade-up delay-300 relative">

            <span className="absolute top-6 right-6 text-[11px] uppercase tracking-widest text-secondary animate-pulse">
              Destaque
            </span>

            <span className="block text-[13px] tracking-widest text-secondary uppercase mb-3">
              Plano Ouro
            </span>

            <h3 className="text-[20px] font-serif font-semibold text-dark mb-4">
              Tranquilidade completa
            </h3>

            <p className="text-[15px] text-gray-700 leading-[1.7] mb-8">
              Pensado para quem busca máxima tranquilidade,
              com atenção integral e cuidado em cada detalhe.
            </p>

            <Link
              href="/contato"
              className="text-[14px] font-medium text-primary group-hover:underline"
            >
              Solicitar informações
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}