export default function QuemSomos() {
  return (
    <section className="relative bg-light py-16 md:py-24 overflow-hidden">

      {/* BOLHA GRANDE */}
      <svg
        className="hidden md:block absolute -top-24 -left-24 w-[420px] h-[420px] text-secondary/20 animate-float-medium"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <path d="M45,-66.5C58.3,-57.2,69.5,-44.5,75.2,-29.1C80.9,-13.7,81.1,4.5,74.6,20.2C68.1,35.9,54.9,49.1,39.7,59.5C24.5,69.9,7.3,77.6,-9.8,80.3C-26.9,83,-53.8,80.7,-67.3,68.8C-80.8,56.9,-80.9,35.4,-77.5,16.6C-74.1,-2.2,-67.2,-18.3,-57.4,-29.7C-47.6,-41.1,-34.9,-47.8,-21.4,-57.5C-7.9,-67.2,6.4,-80,21.6,-83.3C36.8,-86.6,53.6,-80.3,45,-66.5Z"
        transform="translate(100 100)"
      />
      </svg>

      {/* TRIÂNGULO */}
      <svg
        className="hidden md:block absolute bottom-20 right-24 w-40 h-40 text-primary/20 animate-drift-right animate-rotate-slow"
        viewBox="0 0 100 100"
        fill="currentColor"
      >
        <polygon points="50 0, 100 100, 0 100" />
      </svg>

      {/* BOLHA MÉDIA */}
      <svg
        className="hidden md:block absolute top-1/2 right-1/3 w-48 h-48 text-secondary/15 animate-float-medium animate-drift-left"
        viewBox="0 0 200 200"
        fill="currentColor"
      >
        <circle cx="100" cy="100" r="90" />
      </svg>

      {/* CONTEÚDO */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* TEXTO */}
        <div>
          <h2 className="text-[28px] md:text-[36px] font-serif font-semibold text-dark mb-6">
            Quem somos
          </h2>

          <div className="w-12 h-[1px] bg-secondary mb-8 opacity-80" />

          <p className="text-[15px] md:text-[16px] text-gray-700 leading-[1.8] mb-6">
            O <strong>Grupo Monte Sinai</strong> atua com seriedade,
            respeito e compromisso no cuidado às famílias em momentos
            delicados, oferecendo apoio completo, orientação clara
            e atendimento humanizado.
          </p>

          <p className="text-[15px] md:text-[16px] text-gray-700 leading-[1.8]">
            Nossa estrutura e equipe são preparadas para atuar com
            discrição, empatia e responsabilidade, respeitando a
            história e os valores de cada família atendida.
          </p>
        </div>

        {/* DESTAQUE */}
        <div className="bg-white/85 backdrop-blur-sm p-8 md:p-10 border-l-4 border-secondary shadow-sm">
          <p className="text-[17px] md:text-[18px] font-serif text-dark leading-[1.7]">
            Nosso compromisso é oferecer tranquilidade, apoio e confiança,
            atuando com excelência em todos os momentos.
          </p>
        </div>

      </div>
    </section>
  );
}