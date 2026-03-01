"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, ChevronRight } from "lucide-react"

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const categories = [
    {
        title: "Men",
        href: "/category/men"
    },
    {
        title: "Women",
        href: "/category/women"
    },
    {
        title: "Kids",
        href: "/category/kids"
    },
    {
        title: "Lifestyle",
        href: "/category/lifestyle"
    }
];

export function MobileMenu() {
    const [open, setOpen] = React.useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button className="lg:hidden p-2 hover:bg-white/10 rounded-md">
                    <Menu className="h-6 w-6" />
                </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0 flex flex-col">
                <SheetHeader className="p-4 border-b bg-[#0F172A] text-white">
                    <SheetTitle className="text-left text-white flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-white font-black text-sm shadow-md">K</span>
                        <span className="text-xl font-black tracking-tight">
                            <span className="text-white">Kavi</span><span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Mart</span>
                        </span>
                    </SheetTitle>
                </SheetHeader>

                <div className="flex-1 overflow-y-auto">
                    <div className="flex flex-col py-4">
                        {categories.map((category) => (
                            <Link
                                key={category.title}
                                href={category.href}
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-between px-6 py-4 text-base font-semibold text-[#0F172A] hover:bg-violet-50 hover:text-violet-700 transition-colors border-b border-gray-100"
                            >
                                {category.title}
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                            </Link>
                        ))}
                    </div>

                    <div className="px-6 py-6 border-t mt-auto">
                        <p className="text-sm text-gray-500 font-semibold mb-4 uppercase tracking-wider">My Account</p>
                        <div className="flex flex-col gap-3 text-sm font-medium text-gray-700">
                            <Link href="/profile" onClick={() => setOpen(false)} className="hover:text-violet-600">Profile & Settings</Link>
                            <Link href="/wishlist" onClick={() => setOpen(false)} className="hover:text-violet-600">Wishlist</Link>
                            <Link href="/track-order" onClick={() => setOpen(false)} className="hover:text-violet-600">Track Order</Link>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
