import { ProductCard } from "@/components/product/ProductCard"
import { type Product } from "@/store/useStore"

export function ProductGrid({ title, products = [] }: { title: string, products: Product[] }) {
    return (
        <section className="container mx-auto px-4 py-12">
            <div className="flex items-center justify-between mb-8 border-b pb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] uppercase tracking-wide">
                    {title}
                </h2>
                <button className="text-sm font-semibold hover:text-[#7C3AED] transition-colors uppercase tracking-wider">
                    View All
                </button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}
