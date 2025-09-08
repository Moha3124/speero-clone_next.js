"use client"

import Link from "next/link"
import Image from "next/image"

export default function PriceBannerEN() {
    return (
        <Link
            href="/request-quote"
            className="max-w-5xl mx-auto block border-2 border-cyan-400 rounded-2xl bg-cyan-50 shadow-md py-10 px-6 my-12 transition hover:bg-cyan-100 hover:shadow-xl hover:border-cyan-500"
        >
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-1/3 flex items-center justify-start gap-4 mb-6 md:mb-0">
                    <Image
                        src="/images/pricing.svg"
                        alt="Request a Quote Service"
                        width={50}
                        height={50}
                        className="object-contain"
                    />
                    <span className="text-xl font-bold text-teal-600 whitespace-nowrap">
                        Request a Quote
                    </span>
                </div>

                <div className="md:w-2/3 text-left md:text-right">
                    <p className="text-sm text-gray-700 mb-2">
                        Instant quote from Speero's wide network of dealers
                    </p>
                    <p className="text-sm text-gray-700 mb-2">
                        Extra discount when purchasing parts
                    </p>
                    <p className="text-sm text-gray-700">
                        Quote fee refundable if the quote does not suit you
                    </p>
                </div>
            </div>
        </Link>
    )
}
