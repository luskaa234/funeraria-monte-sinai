export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >

      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      {/* Véu geral suave */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-28">
        <div className="max-w-xl bg-white/80 backdrop-blur-sm px-10 py-10">

          {/* Logo tipográfica */}
          <div className="mb-6 leading-none">
            <span className="block text-[13px] tracking-[0.32em] text-secondary font-medium uppercase">
              Grupo
            </span>
            <span className="block text-[36px] md:text-[40px] font-serif font-semibold text-primary">
              Monte Sinai
            </span>
          </div>

          {/* Título */}
          <h1 className="text-[48px] md:text-[54px] font-serif font-medium text-dark leading-[1.1] tracking-tight">
            Excelência, respeito <br /> e acolhimento
          </h1>

          {/* Linha dourada */}
          <div className="w-12 h-[1px] bg-secondary mt-6 mb-8 opacity-80" />

          {/* Texto */}
          <p className="text-[15px] text-gray-700 leading-[1.7]">
            Atuamos com dignidade, cuidado e compromisso, oferecendo apoio
            completo às famílias em momentos que exigem sensibilidade
            e respeito.
          </p>

        </div>
      </div>
    </section>
  );
}