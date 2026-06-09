"use client"

import Image from "next/image"
import { useState } from "react"
import React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel"

const carrosselImagens = [
  { src: "/carrossel/0001.png", alt: "Oferta com cupom" },
  { src: "/carrossel/0002.png", alt: "Dia dos namorados" },
  { src: "/carrossel/0003.png", alt: "Volta às aulas" },
]

export default function Carrossel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  const [api, setApi] = useState<CarouselApi>()

  return (
    <section className="w-screen overflow-hidden">
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
              <div className="relative h-150 w-full">
                <Image
                  src={imagem.src}
                  alt={imagem.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <button
        onClick={() => api?.scrollPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full w-12 h-12 shadow-md"
      >
        ‹
      </button>

      <button
        onClick={() => api?.scrollNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white rounded-full w-12 h-12 shadow-md"
      >
        ›
      </button>
    </section>
  )
}