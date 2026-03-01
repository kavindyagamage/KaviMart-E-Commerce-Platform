export const metadata = { title: "Shipping Info – KaviMart" };

const infos = [
    { title: "Order Processing", body: "Orders are processed within 1–2 business days. Orders placed on weekends or public holidays will be processed the next working day." },
    { title: "Delivery Coverage", body: "We deliver island-wide across Sri Lanka. Some remote areas may have extended delivery times of up to 7 business days." },
    { title: "Order Tracking", body: "Once your order ships, you will receive an SMS and email with your tracking number. Use the Track Order page to monitor your delivery." },
];

export default function ShippingPage() {
    return (
        <div className="pb-20">
            <div className="bg-[#0F172A] py-20 mb-10 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">Shipping Info</h1>
                    <p className="text-[#7C3AED] font-bold tracking-widest uppercase text-sm">Fast & Reliable Delivery</p>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7C3AED]/10 skew-x-12 translate-x-1/2" />
            </div>
            <div className="container mx-auto px-4 max-w-3xl space-y-6">
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <table className="w-full text-sm">
                        <thead className="bg-[#0F172A] text-white">
                            <tr>
                                <th className="text-left px-6 py-4">Shipping Method</th>
                                <th className="text-left px-6 py-4">Delivery Time</th>
                                <th className="text-left px-6 py-4">Cost</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr><td className="px-6 py-4 font-medium">Standard Delivery</td><td className="px-6 py-4 text-gray-600">3–5 Business Days</td><td className="px-6 py-4 text-gray-600">LKR 300</td></tr>
                            <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Express Delivery</td><td className="px-6 py-4 text-gray-600">1–2 Business Days</td><td className="px-6 py-4 text-gray-600">LKR 600</td></tr>
                            <tr><td className="px-6 py-4 font-medium">Same-Day (Colombo)</td><td className="px-6 py-4 text-gray-600">Within 8 Hours</td><td className="px-6 py-4 text-gray-600">LKR 900</td></tr>
                            <tr className="bg-gray-50"><td className="px-6 py-4 font-medium text-[#7C3AED]">Free Shipping</td><td className="px-6 py-4 text-gray-600">3–5 Business Days</td><td className="px-6 py-4 text-[#7C3AED] font-semibold">Orders over LKR 5,000</td></tr>
                        </tbody>
                    </table>
                </div>
                {infos.map((s, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-sm p-6">
                        <h3 className="font-bold text-[#0F172A] mb-2">{s.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
