"use client"

import * as React from "react"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

const slides = [
    {
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=2600&auto=format&fit=crop",
        title: "Summer Collection",
        subtitle: "Discover the latest trends in fashion for a vibrant new look.",
        cta: "Shop Women"
    },
    {
        image: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?q=80&w=2600&auto=format&fit=crop",
        title: "Urban Menswear",
        subtitle: "Premium comfort meets sharp street-style. Upgrade your wardrobe today.",
        cta: "Shop Men"
    },
    {
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2600&auto=format&fit=crop",
        title: "Kids Special",
        subtitle: "Playful, durable, and stylish outfits for the little ones.",
        cta: "Shop Kids"
    }
]

export function HeroSlider() {
    return (
        <div className="relative w-full overflow-hidden">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent>
                    {slides.map((slide, index) => (
                        <CarouselItem key={index}>
                            <div className="relative w-full h-[600px] lg:h-[700px]">
                                <div className="absolute inset-0 bg-black/40 z-10" />
                                <Image
                                    src={slide.image}
                                    alt={slide.title}
                                    fill
                                    className="object-cover object-center"
                                    priority={index === 0}
                                />
                                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white p-6">
                                    <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight drop-shadow-lg">
                                        {slide.title}
                                    </h1>
                                    <p className="text-lg md:text-xl mb-8 max-w-2xl drop-shadow-md">
                                        {slide.subtitle}
                                    </p>
                                    <Button
                                        size="lg"
                                        className="bg-white text-[#0F172A] hover:bg-violet-600 hover:text-white transition-colors text-lg font-semibold px-8 py-6 rounded-none uppercase tracking-wide"
                                    >
                                        {slide.cta}
                                    </Button>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                {/* Navigation arrows positioned over the slider */}
                <div className="hidden lg:block absolute inset-y-0 left-8 z-30 flex items-center">
                    <CarouselPrevious className="relative static bg-white/20 text-white border-none hover:bg-white hover:text-black hover:scale-110 transition-all h-12 w-12" />
                </div>
                <div className="hidden lg:block absolute inset-y-0 right-8 z-30 flex items-center">
                    <CarouselNext className="relative static bg-white/20 text-white border-none hover:bg-white hover:text-black hover:scale-110 transition-all h-12 w-12" />
                </div>
            </Carousel>
        </div>
    )
}
