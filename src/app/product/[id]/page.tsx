import { prisma } from "@/lib/prisma";
import ProductDetailClient from "@/components/product/ProductDetailClient";
import { notFound } from "next/navigation";

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const id = resolvedParams.id;

    const product = await prisma.product.findUnique({
        where: { id },
    });

    if (!product) {
        return notFound();
    }

    const formattedProduct = {
        ...product,
        id: product.id.toString(),
        originalPrice: product.originalPrice ?? undefined,
        badge: product.badge ?? undefined,
        sizes: JSON.parse(product.sizes || '[]'),
        colors: JSON.parse(product.colors || '[]'),
    };

    return (
        <div className="container mx-auto px-4 py-8 lg:py-16 max-w-7xl">
            <ProductDetailClient product={formattedProduct} />
        </div>
    );
}
