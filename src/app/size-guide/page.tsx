export const metadata = { title: "Size Guide – KaviMart" };

export default function SizeGuidePage() {
    return (
        <div className="pb-20">
            <div className="bg-[#0F172A] py-20 mb-10 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">Size Guide</h1>
                    <p className="text-[#7C3AED] font-bold tracking-widest uppercase text-sm">Find Your Perfect Fit</p>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#7C3AED]/10 skew-x-12 translate-x-1/2" />
            </div>
            <div className="container mx-auto px-4 max-w-4xl space-y-8">
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="bg-[#0F172A] text-white px-6 py-3 font-bold">Men's Tops & T-Shirts</div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-center">
                            <thead className="bg-gray-50 text-gray-600"><tr><th className="px-4 py-3">Size</th><th className="px-4 py-3">Chest (cm)</th><th className="px-4 py-3">Waist (cm)</th><th className="px-4 py-3">Shoulder (cm)</th></tr></thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr><td className="px-4 py-3 font-medium">S</td><td className="px-4 py-3 text-gray-600">88–92</td><td className="px-4 py-3 text-gray-600">76–80</td><td className="px-4 py-3 text-gray-600">43</td></tr>
                                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">M</td><td className="px-4 py-3 text-gray-600">96–100</td><td className="px-4 py-3 text-gray-600">84–88</td><td className="px-4 py-3 text-gray-600">45</td></tr>
                                <tr><td className="px-4 py-3 font-medium">L</td><td className="px-4 py-3 text-gray-600">104–108</td><td className="px-4 py-3 text-gray-600">92–96</td><td className="px-4 py-3 text-gray-600">47</td></tr>
                                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">XL</td><td className="px-4 py-3 text-gray-600">112–116</td><td className="px-4 py-3 text-gray-600">100–104</td><td className="px-4 py-3 text-gray-600">49</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                    <div className="bg-[#0F172A] text-white px-6 py-3 font-bold">Women's Tops & Dresses</div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-center">
                            <thead className="bg-gray-50 text-gray-600"><tr><th className="px-4 py-3">Size</th><th className="px-4 py-3">Bust (cm)</th><th className="px-4 py-3">Waist (cm)</th><th className="px-4 py-3">Hip (cm)</th></tr></thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr><td className="px-4 py-3 font-medium">XS</td><td className="px-4 py-3 text-gray-600">78–82</td><td className="px-4 py-3 text-gray-600">60–64</td><td className="px-4 py-3 text-gray-600">84–88</td></tr>
                                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">S</td><td className="px-4 py-3 text-gray-600">84–88</td><td className="px-4 py-3 text-gray-600">66–70</td><td className="px-4 py-3 text-gray-600">90–94</td></tr>
                                <tr><td className="px-4 py-3 font-medium">M</td><td className="px-4 py-3 text-gray-600">90–94</td><td className="px-4 py-3 text-gray-600">72–76</td><td className="px-4 py-3 text-gray-600">96–100</td></tr>
                                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">L</td><td className="px-4 py-3 text-gray-600">96–100</td><td className="px-4 py-3 text-gray-600">78–82</td><td className="px-4 py-3 text-gray-600">102–106</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="bg-[#7C3AED]/10 border border-[#7C3AED]/30 rounded-2xl p-6 text-sm text-gray-700">
                    <strong className="text-[#7C3AED]">Tip:</strong> When in doubt, size up! All measurements are in centimetres.
                </div>
            </div>
        </div>
    );
}
