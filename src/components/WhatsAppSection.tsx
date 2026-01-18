import Link from "next/link";

export default function WhatsAppSection() {
  return (
    <section className="relative bg-light py-16 md:py-20 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center">

        <h2 className="text-[26px] md:text-[34px] font-serif font-semibold text-dark mb-6">
          Precisa de atendimento imediato?
        </h2>

        <div className="w-12 h-[1px] bg-secondary mx-auto mb-8 opacity-80" />

        <p className="text-[15px] md:text-[16px] text-gray-700 leading-[1.8] mb-10">
          Nossa equipe está pronta para oferecer orientação, apoio e
          atendimento humanizado sempre que necessário.
        </p>

        <Link
          href="https://wa.me/5599999999999"
          target="_blank"
          className="
            inline-flex items-center gap-3
            bg-secondary text-white px-8 py-4
            text-[14px] font-medium
            hover:bg-secondary/90 transition
          "
        >
          💬 Falar com atendimento
        </Link>

      </div>
    </section>
  );
}