"use client"

import Image from "next/image"
import { useState, useRef } from "react"
import React from "react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel"

const carrosselImagens = [
  { src: "/carrossel/0001.png", alt: "Book Garden — Sua Livraria Online" },
  { src: "/carrossel/0002.png", alt: "Explore Nossos Gêneros Literários" },
  { src: "/carrossel/0003.png", alt: "Ofertas e Lançamentos Imperdíveis" },
]

export default function Carrossel() {
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }))
  const [api, setApi] = useState<CarouselApi>()

  return (
    <section className="relative w-full overflow-hidden group">
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="w-full"
        plugins={[plugin.current]}
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.reset()}
      >
        <CarouselContent className="ml-0">
          {carrosselImagens.map((imagem, index) => (
            <CarouselItem key={index} className="basis-full pl-0">
              {/* Proporções fluidas e responsivas para evitar distorção de imagens */}
              <div className="relative w-full aspect-[16/7] md:aspect-[21/9] min-h-[250px] max-h-[550px] bg-zinc-900">
                <Image
                  src={imagem.src}
                  alt={imagem.alt}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Botões de navegação estilizados e visíveis (aparecem no hover em telas grandes) */}
      <button
        onClick={() => api?.scrollPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-zinc-900/40 hover:bg-zinc-900/80 backdrop-blur-sm text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => api?.scrollNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-zinc-900/40 hover:bg-zinc-900/80 backdrop-blur-sm text-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  )
}