import { prisma } from "@/lib/prisma";
import { ProductGrid } from "@/components/home/ProductGrid";
import { QuickViewModal } from "@/components/product/QuickViewModal";

export default async function SearchPage({
    searchParams,
}: {
    searchParams: Promise<{ q?: string }>;
}) {
    const params = await searchParams;
    const query = params.q || "";

    let products: any[] = [];
    if (query) {
        products = await prisma.product.findMany({
            where: {
                OR: [
                    { name: { contains: query } },
                    { description: { contains: query } },
                    { category: { name: { contains: query } } },
                ],
            },
            include: {
                category: true,
            },
        });
    }

    const formattedProducts = products.map((p) => ({
        ...p,
        id: p.id.toString(),
        sizes: JSON.parse(p.sizes || "[]"),
        colors: JSON.parse(p.colors || "[]"),
        originalPrice: p.originalPrice ?? undefined,
        badge: p.badge ?? undefined,
    }));

    return (
        <div className="pb-20 pt-10">
            <div className="container mx-auto px-4 mb-10">
                <h1 className="text-3xl font-bold text-[#0F172A]">
                    Search Results for: <span className="text-[#7C3AED]">"{query}"</span>
                </h1>
                <p className="text-gray-500 mt-2">
                    Found {formattedProducts.length} items
                </p>
            </div>

            {formattedProducts.length > 0 ? (
                <ProductGrid title="Matching Products" products={formattedProducts} />
            ) : (
                <div className="container mx-auto px-4 py-20 text-center">
                    <p className="text-xl text-gray-400">No products found for your search.</p>
                </div>
            )}
            <QuickViewModal />
        </div>
    );
}
