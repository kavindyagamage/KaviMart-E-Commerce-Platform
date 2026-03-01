"use client"

import Link from "next/link";
import { Search, User, Heart, Menu } from "lucide-react";
import { MegaMenu } from "./MegaMenu";
import { CartSheet } from "../cart/CartSheet";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#0F172A] text-white shadow-lg">
      {/* Top Bar */}
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Mobile Menu & Logo */}
        <div className="flex items-center gap-4 lg:w-1/4">
          <button className="lg:hidden p-2 hover:bg-white/10 rounded-md">
            <Menu className="h-6 w-6" />
          </button>
          <Link href="/" className="flex items-center gap-1 select-none">
            {/* Icon mark */}
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center text-white font-black text-sm shadow-md shadow-violet-900/40">K</span>
            {/* Wordmark */}
            <span className="text-xl font-black tracking-tight">
              <span className="text-white">Kavi</span><span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">Mart</span>
            </span>
          </Link>
        </div>

        {/* Search Bar - Desktop */}
        <form onSubmit={handleSearch} className="hidden lg:flex flex-1 max-w-xl items-center relative">
          <input
            type="search"
            placeholder="Search for products, brands and more"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 px-4 pr-10 rounded-full bg-white/10 border border-white/20 text-sm focus:outline-none focus:bg-white focus:text-black transition-colors placeholder:text-gray-400"
          />
          <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-violet-400">
            <Search className="h-5 w-5" />
          </button>
        </form>

        {/* Icons */}
        <div className="flex items-center justify-end gap-2 lg:gap-4 lg:w-1/4">
          <Link href="/profile" className="p-2 hover:text-violet-400 transition-colors flex flex-col items-center">
            <User className="h-5 w-5" />
            <span className="text-[10px] hidden lg:block mt-1">Profile</span>
          </Link>
          <Link href="/wishlist" className="p-2 hover:text-violet-400 transition-colors flex flex-col items-center">
            <Heart className="h-5 w-5" />
            <span className="text-[10px] hidden lg:block mt-1">Wishlist</span>
          </Link>
          <CartSheet />
        </div>
      </div>

      {/* Navigation Bar - Desktop */}
      <div className="hidden lg:block bg-white text-black border-t">
        <div className="container mx-auto px-4">
          <MegaMenu />
        </div>
      </div>
    </header>
  );
}
