"use client"

import Link from "next/link"
import Image from "next/image"

export default function PriceBanner() {
  return (
    <Link
      href="/request-quote"
      className="max-w-5xl mx-auto block rounded-3xl bg-cyan-50 border border-cyan-300 shadow-sm px-6 py-10 my-12 transition hover:bg-cyan-100 hover:shadow-md hover:border-cyan-500"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* أيقونة وعنوان الخدمة */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-cyan-200 flex items-center justify-center">
            <Image
              src="/images/pricing.svg"
              alt="خدمة سعّرلي"
              width={32}
              height={32}
              className="object-contain"
            />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-teal-700">
            اطلب خدمة سعّرلي
          </h3>
        </div>

        {/* تفاصيل الخدمة */}
        <div className="text-sm sm:text-base text-gray-700 text-right md:text-left leading-relaxed">
          <p>تسعيرة مباشرة من شبكة تجار سبيرو الواسعة</p>
          <p>خصم إضافي عند شراء القطع</p>
          <p>رسوم التسعيرة مستردة إذا لم تناسبك</p>
        </div>
      </div>
    </Link>
  )
}