import Image from "next/image";
import Link from "next/link";

const categories = [
    {
        id: 1,
        title: "Women's Fashion",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1400&auto=format&fit=crop",
        link: "/category/women",
        span: "col-span-1 md:col-span-2 row-span-2",
    },
    {
        id: 2,
        title: "Men's Collection",
        image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=1400&auto=format&fit=crop",
        link: "/category/men",
        span: "col-span-1 md:col-span-2 row-span-1",
    },
    {
        id: 3,
        title: "Kids & Baby",
        image: "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?q=80&w=1400&auto=format&fit=crop",
        link: "/category/kids",
        span: "col-span-1 md:col-span-1 row-span-1",
    },
    {
        id: 4,
        title: "Lifestyle & Home",
        image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1400&auto=format&fit=crop",
        link: "/category/lifestyle",
        span: "col-span-1 md:col-span-1 row-span-1",
    },
]

export function CategoryGrid() {
    return (
        <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[800px] md:h-[600px]">
                {categories.map((category) => (
                    <Link
                        key={category.id}
                        href={category.link}
                        className={`relative group overflow-hidden ${category.span}`}
                    >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
                        <Image
                            src={category.image}
                            alt={category.title}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 z-20 flex items-center justify-center">
                            <div className="bg-white/95 backdrop-blur-sm px-8 py-4 transition-transform duration-500 group-hover:-translate-y-2">
                                <h3 className="text-lg md:text-xl font-bold text-[#0F172A] tracking-wide uppercase">
                                    {category.title}
                                </h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
