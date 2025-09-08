"use client"

import Link from "next/link"
import Image from "next/image"

export default function PriceBanner() {
    return (
        <Link
            href="/request-quote"
            className="max-w-5xl mx-auto block border-2 border-cyan-400 rounded-2xl bg-cyan-50 shadow-md py-10 px-6 my-12 transition hover:bg-cyan-100 hover:shadow-xl hover:border-cyan-500"
        >
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/3 flex items-center justify-start gap-4 mb-6 md:mb-0">
                    <Image
                        src="/images/pricing.svg"
                        alt="خدمة سعّرلي"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                    <span className="text-xl font-bold text-teal-600 whitespace-nowrap">
                        اطلب خدمة سعّرلي
                    </span>
                </div>

                <div className="md:w-2/3 text-left md:text-left">
                    <p className="text-sm text-gray-700 mb-2">
                        تسعيرة مباشرة من شبكة تجار سبيرو الواسعة
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                        خصم إضافي عند شراء القطع
                    </p>
                    <p className="text-sm text-gray-700">
                        رسوم تسعيرة مستردة في حال لم تناسبك التسعيرة
                    </p>
                </div>
            </div>
        </Link>
    )
}
