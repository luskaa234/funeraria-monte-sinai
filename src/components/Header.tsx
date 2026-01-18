"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Quem somos", href: "#quem-somos" },
    { label: "Planos", href: "#planos" },
    { label: "Serviços", href: "#servicos" },
    { label: "Perguntas", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <>
      {/* HEADER */}
      <header className="bg-primary sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[80px] flex items-center justify-between">

          {/* LOGO */}
          <Image
            src="/images/logo.png"
            alt="Grupo Monte Sinai"
            width={190}
            height={56}
            priority
            className="object-contain"
          />

          {/* MENU DESKTOP */}
          <nav className="hidden lg:flex items-center gap-12 text-[15px] text-white font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative hover:after:absolute hover:after:-bottom-2 hover:after:left-0
                           hover:after:w-full hover:after:h-[1px] hover:after:bg-secondary/70"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* BOTÃO HAMBÚRGUER */}
          <button
            className="lg:hidden text-white text-3xl"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
          >
            ☰
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SIDEBAR MOBILE */}
      <aside
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-primary z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between px-6 h-[80px] border-b border-white/10">
          <span className="text-white font-serif text-lg">Menu</span>
          <button
            className="text-white text-3xl"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>

        <nav className="flex flex-col px-6 py-8 gap-6 text-white text-[16px]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 pb-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}