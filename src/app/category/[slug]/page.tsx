import { prisma } from "@/lib/prisma";
import { ProductGrid } from "@/components/home/ProductGrid";
import { notFound } from "next/navigation";
import { QuickViewModal } from "@/components/product/QuickViewModal";

export default async function CategoryPage({
    params,
    searchParams
}: {
    params: Promise<{ slug: string }>,
    searchParams: Promise<{ sub?: string }>
}) {
    const [resolvedParams, resolvedSearchParams] = await Promise.all([params, searchParams]);
    const slug = resolvedParams.slug;
    const sub = resolvedSearchParams.sub;

    const category = await prisma.category.findUnique({
        where: { slug },
    }) as any;

    if (!category) {
        return notFound();
    }

    // Use queryRaw because the stale client (locked generate) doesn't select the new subCategory field
    // SQLite query to get products for this category
    const rawProducts = await prisma.$queryRaw`SELECT * FROM Product WHERE categoryId = ${category.id} ORDER BY createdAt DESC` as any[];

    // JS-level filter fallback
    const filteredProducts = sub
        ? rawProducts.filter(p =>
            p.subCategory?.toLowerCase() === sub.toLowerCase()
        )
        : rawProducts;

    const formattedProducts = filteredProducts.map((p: any) => ({
        ...p,
        id: p.id.toString(),
        originalPrice: p.originalPrice ?? undefined,
        badge: p.badge ?? undefined,
        sizes: JSON.parse(p.sizes || '[]'),
        colors: JSON.parse(p.colors || '[]'),
    }));

    return (
        <div className="pb-20">
            <div className="bg-[#0F172A] py-20 mb-10 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
                        {category.name}
                    </h1>
                    <p className="text-[#7C3AED] font-bold tracking-widest uppercase text-sm">
                        Curated Collection / 2026
                    </p>
                </div>
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7C3AED]/10 skew-x-12 translate-x-1/2" />
            </div>

            <ProductGrid
                title={sub ? `${sub.charAt(0).toUpperCase() + sub.slice(1)} Collection` : `${category.name} Collection`}
                products={formattedProducts}
            />
            <QuickViewModal />
        </div>
    );
}
