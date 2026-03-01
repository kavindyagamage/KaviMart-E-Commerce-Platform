import { HeroSlider } from "@/components/home/HeroSlider";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ProductGrid } from "@/components/home/ProductGrid";
import { QuickViewModal } from "@/components/product/QuickViewModal";
import { prisma } from "@/lib/prisma";

export default async function Home() {
  const products = await prisma.product.findMany({
    take: 8,
    orderBy: { createdAt: 'desc' },
    include: { category: true }
  });

  const formattedProducts = products.map(p => ({
    ...p,
    id: p.id.toString(),
    originalPrice: p.originalPrice ?? undefined,
    badge: p.badge ?? undefined,
    sizes: JSON.parse(p.sizes || '[]'),
    colors: JSON.parse(p.colors || '[]'),
  }));

  const newArrivals = formattedProducts.slice(0, 4);
  const trendingNow = formattedProducts.slice(4, 8);

  return (
    <>
      <HeroSlider />
      <CategoryGrid />
      <div className="bg-[#F5F5F5]/50 py-8">
        <ProductGrid title="New Arrivals" products={newArrivals} />
      </div>
      <ProductGrid title="Trending Now" products={trendingNow} />
      <QuickViewModal />
    </>
  );
}
