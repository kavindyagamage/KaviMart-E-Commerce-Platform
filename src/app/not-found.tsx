import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
            <div className="text-center max-w-lg">
                <h1 className="text-[12rem] font-black text-[#0F172A]/5 leading-none select-none">
                    404
                </h1>
                <div className="-mt-20 relative z-10">
                    <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
                        Oops! Page Not Found.
                    </h2>
                    <p className="text-gray-500 mb-10 text-lg">
                        The style you're looking for might have moved, or the link is broken.
                        Let's get you back to the latest trends.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/">
                            <Button size="lg" className="bg-[#0F172A] hover:bg-[#7C3AED] text-white h-14 px-8 font-bold uppercase tracking-widest transition-all">
                                <MoveLeft className="w-5 h-5 mr-2" />
                                Back to Home
                            </Button>
                        </Link>
                        <Link href="/category/men">
                            <Button variant="outline" size="lg" className="border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white h-14 px-8 font-bold uppercase tracking-widest transition-all">
                                Shop KaviMart
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
