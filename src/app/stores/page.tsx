import Link from "next/link";

export const metadata = { title: "Store Locator – KaviMart" };

const stores = [
    { name: "KaviMart Colombo 03", address: "123 Galle Road, Colombo 03", hours: "Mon–Sun: 9:00 AM – 9:00 PM", phone: "+94 11 234 5678" },
    { name: "KaviMart Kandy", address: "456 Peradeniya Road, Kandy", hours: "Mon–Sun: 9:00 AM – 8:00 PM", phone: "+94 81 234 5678" },
    { name: "KaviMart Nugegoda", address: "78 High Level Road, Nugegoda", hours: "Mon–Sun: 10:00 AM – 9:00 PM", phone: "+94 11 876 5432" },
    { name: "KaviMart Negombo", address: "12 Lewis Place, Negombo", hours: "Mon–Sat: 9:00 AM – 7:00 PM", phone: "+94 31 234 9876" },
    { name: "KaviMart Galle", address: "99 Matara Road, Galle", hours: "Mon–Sun: 9:00 AM – 8:00 PM", phone: "+94 91 222 3344" },
];

export default function StoresPage() {
    return (
        <div className="pb-20">
            <div className="bg-[#0F172A] py-20 mb-10 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">Store Locator</h1>
                    <p className="text-[#7C3AED] font-bold tracking-widest uppercase text-sm">Find a KaviMart near you</p>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7C3AED]/10 skew-x-12 translate-x-1/2" />
            </div>
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="grid sm:grid-cols-2 gap-6">
                    {stores.map((store, i) => (
                        <div key={i} className="bg-white rounded-2xl shadow-sm p-6 space-y-2">
                            <h3 className="font-bold text-[#0F172A] text-lg">{store.name}</h3>
                            <p className="text-sm text-gray-500">📍 {store.address}</p>
                            <p className="text-sm text-gray-500">⏰ {store.hours}</p>
                            <p className="text-sm text-gray-500">📞 {store.phone}</p>
                            <Link href={`https://maps.google.com/?q=${encodeURIComponent(store.address)}`} target="_blank" className="inline-block mt-2 text-sm text-[#7C3AED] font-semibold hover:underline">
                                Get Directions →
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
