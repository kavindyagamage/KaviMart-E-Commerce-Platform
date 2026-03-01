export const metadata = { title: "Return Policy – KaviMart" };

const sections = [
    { title: "14-Day Return Window", body: "You have 14 calendar days from the date of delivery to initiate a return. After this period, we are unable to accept returns." },
    { title: "Eligible Items", body: "Items must be unworn, unwashed, and in their original condition with all tags attached. Sale items marked 'Final Sale' are not eligible for returns." },
    { title: "How to Initiate a Return", body: "Contact our Customer Care team via email or phone with your order number and reason for return. We'll send you a return shipping label." },
    { title: "Refund Timeline", body: "Once we receive and inspect your return, refunds are processed within 5–7 business days back to your original payment method." },
    { title: "Exchanges", body: "Size exchanges are free of charge. If you need a different size, let us know and we'll ship the replacement at no extra cost." },
    { title: "Damaged or Incorrect Items", body: "If you received a damaged or incorrect item, please contact us within 48 hours and we will arrange a replacement or full refund immediately." },
];

export default function ReturnsPage() {
    return (
        <div className="pb-20">
            <div className="bg-[#0F172A] py-20 mb-10 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">Return Policy</h1>
                    <p className="text-[#7C3AED] font-bold tracking-widest uppercase text-sm">Hassle-free returns</p>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7C3AED]/10 skew-x-12 translate-x-1/2" />
            </div>
            <div className="container mx-auto px-4 max-w-3xl space-y-4">
                {sections.map((s, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-sm p-6">
                        <h3 className="font-bold text-[#0F172A] mb-2">{s.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
