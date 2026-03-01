export const metadata = { title: "About Us – KaviMart" };

export default function AboutPage() {
    return (
        <div className="pb-20">
            <div className="bg-[#0F172A] py-20 mb-10 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">About Us</h1>
                    <p className="text-[#7C3AED] font-bold tracking-widest uppercase text-sm">Our Story</p>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7C3AED]/10 skew-x-12 translate-x-1/2" />
            </div>
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm p-10 space-y-6 text-gray-700 leading-relaxed">
                    <h2 className="text-2xl font-bold text-[#0F172A]">Who We Are</h2>
                    <p>KaviMart is Sri Lanka's premier fashion retail destination, bringing the latest global trends and timeless styles to every corner of the island. Founded on the belief that great fashion should be accessible to everyone, we curate collections for men, women, kids, and lifestyle — all under one roof.</p>
                    <h2 className="text-2xl font-bold text-[#0F172A]">Our Mission</h2>
                    <p>We believe fashion is a form of self-expression. Our mission is to empower every customer to feel confident, stylish, and comfortable — whether they're shopping for everyday essentials or a special occasion outfit.</p>
                    <h2 className="text-2xl font-bold text-[#0F172A]">Our Values</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Quality First</strong> — Every item is carefully selected for durability and craftsmanship.</li>
                        <li><strong>Customer Centricity</strong> — Your satisfaction is our #1 priority.</li>
                        <li><strong>Sustainability</strong> — We are committed to responsible sourcing and eco-friendly packaging.</li>
                        <li><strong>Community</strong> — We give back to the communities we operate in.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
