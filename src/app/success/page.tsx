import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export default function SuccessPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <div className="bg-green-100 p-4 rounded-full mb-6">
                <CheckCircle2 className="w-16 h-16 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4">Payment Successful!</h1>
            <p className="text-gray-600 mb-8 max-w-md">
                Thank you for your purchase. Your order has been placed and is being processed.
                You will receive a confirmation email shortly.
            </p>
            <Link
                href="/"
                className="bg-[#0F172A] text-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-[#7C3AED] transition-colors"
            >
                Continue Shopping
            </Link>
        </div>
    )
}
