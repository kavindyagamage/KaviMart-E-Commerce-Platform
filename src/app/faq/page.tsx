export const metadata = { title: "FAQ – KaviMart" };

const faqs = [
    { q: "How long does delivery take?", a: "Standard delivery takes 3–5 business days within Sri Lanka. Express delivery is available in 1–2 business days for major cities." },
    { q: "How do I return an item?", a: "Items can be returned within 14 days of purchase. They must be unworn, unwashed, with original tags attached. Visit our Return Policy page for full details." },
    { q: "Do you offer international shipping?", a: "Currently we ship within Sri Lanka only. International shipping is coming soon!" },
    { q: "How do I track my order?", a: "Once your order ships, you'll receive a confirmation email with a tracking number. You can also use our Track Order page." },
    { q: "Can I exchange an item for a different size?", a: "Yes! Size exchanges are free of charge. Contact our Customer Care team and we'll arrange the exchange for you." },
    { q: "What payment methods do you accept?", a: "We accept Visa, Mastercard, American Express, and major digital wallets. Cash on delivery is available for orders under LKR 50,000." },
    { q: "How do I use a promo code?", a: "Enter your promo code at checkout in the 'Discount Code' field. Only one code can be used per order." },
    { q: "Is my personal information safe?", a: "Absolutely. We use industry-standard encryption to protect your data. See our Privacy Policy for full details." },
];

export default function FaqPage() {
    return (
        <div className="pb-20">
            <div className="bg-[#0F172A] py-20 mb-10 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">FAQ</h1>
                    <p className="text-[#7C3AED] font-bold tracking-widest uppercase text-sm">Frequently Asked Questions</p>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7C3AED]/10 skew-x-12 translate-x-1/2" />
            </div>
            <div className="container mx-auto px-4 max-w-3xl space-y-4">
                {faqs.map((faq, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-sm p-6">
                        <h3 className="font-bold text-[#0F172A] mb-2">Q: {faq.q}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">A: {faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
