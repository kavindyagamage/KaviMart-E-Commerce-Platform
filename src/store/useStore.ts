import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Product = {
    id: string
    name: string
    price: number
    originalPrice?: number
    image: string
    badge?: string
    colors?: string[]
    sizes?: string[]
    quantity?: number
    selectedSize?: string
    selectedColor?: string
}

type StoreState = {
    quickViewProduct: Product | null
    isQuickViewOpen: boolean
    setQuickViewProduct: (product: Product | null) => void
    items: Product[]
    addToCart: (product: Product) => void
    removeFromCart: (productId: string) => void
    clearCart: () => void
    updateQuantity: (productId: string, quantity: number) => void
    // Wishlist
    savedItems: Product[]
    toggleWishlist: (product: Product) => void
    isWishlisted: (productId: string) => boolean
}

export const useStore = create<StoreState>()(
    persist(
        (set, get) => ({
            quickViewProduct: null,
            isQuickViewOpen: false,
            setQuickViewProduct: (product) =>
                set({ quickViewProduct: product, isQuickViewOpen: !!product }),
            items: [],
            addToCart: (product) =>
                set((state) => {
                    const existingItem = state.items.find(item =>
                        item.id === product.id &&
                        item.selectedSize === product.selectedSize &&
                        item.selectedColor === product.selectedColor
                    )
                    if (existingItem) {
                        return {
                            items: state.items.map(item =>
                                (item.id === product.id &&
                                    item.selectedSize === product.selectedSize &&
                                    item.selectedColor === product.selectedColor)
                                    ? { ...item, quantity: (item.quantity || 1) + 1 }
                                    : item
                            )
                        }
                    }
                    return { items: [...state.items, { ...product, quantity: 1 }] }
                }),
            removeFromCart: (productId) =>
                set((state) => ({ items: state.items.filter(item => item.id !== productId) })),
            clearCart: () => set({ items: [] }),
            updateQuantity: (productId, quantity) =>
                set((state) => ({
                    items: state.items.map(item =>
                        item.id === productId ? { ...item, quantity } : item
                    )
                })),
            // Wishlist
            savedItems: [],
            toggleWishlist: (product) =>
                set((state) => {
                    const exists = state.savedItems.some(p => p.id === product.id)
                    return {
                        savedItems: exists
                            ? state.savedItems.filter(p => p.id !== product.id)
                            : [...state.savedItems, product]
                    }
                }),
            isWishlisted: (productId) => get().savedItems.some(p => p.id === productId),
        }),
        {
            name: 'kavimart-store',
            partialize: (state) => ({ items: state.items, savedItems: state.savedItems }),
        }
    )
)

