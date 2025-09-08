"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { MenuIcon, XIcon } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  const pathname = usePathname()
  const isArabic = pathname.startsWith("/ar")
  const switchTo = isArabic ? pathname.replace("/ar", "/en") : "/ar" + pathname

  return (
    <nav className="bg-white text-black border-b shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/speerologo.png"
            alt="سبيرو"
            width={120}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-black"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Links */}
        <ul className="hidden sm:flex items-center gap-6">
          <li className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 font-medium hover:text-gray-500"
            >
              سوق قطع الغيار
              <ChevronDownIcon className="w-4 h-4" />
            </button>

            {open && (
              <ul className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded mt-2 min-w-[220px] z-20">
                {[
                  "اكتشف قطع الغيار",
                  "الصدامات والشبوك والواجهة",
                  "المكائن، القيرات وملحقاتها",
                  "الشمعات والاصطبات (الإضاءة)",
                  "الفرامل والأقمشة",
                  "الأبواب، الرفرف والكبوت",
                  "الشكمان",
                  "نظام الوقود",
                  "العكس، الدفرنس والرمانات",
                  "البواجي، الفلاتر والسيور",
                  "المساعدات، المقصات وعمود التوازن",
                  "الدركسون وملحقاته",
                  "نظام التكييف والتبريد",
                ].map((item, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-100">
                    <Link href="#">{item}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><Link href="#" className="font-medium hover:text-gray-500">خدمات السيارات</Link></li>
          <li><Link href="#" className="font-medium hover:text-gray-500">سعّرلي</Link></li>
          <li><Link href="#" className="font-medium hover:text-gray-500">المدونة</Link></li>
        </ul>

        {/* Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href={switchTo}
            className="w-10 h-10 flex items-center justify-center bg-black text-white text-sm font-bold rounded hover:bg-gray-800"
          >
            {isArabic ? "EN" : "AR"}
          </Link>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80">
            تسجيل الدخول
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="sm:hidden px-4 pb-4 space-y-2">
          <Link href="#" className="block font-medium hover:text-gray-500">سوق قطع الغيار</Link>
          <Link href="#" className="block font-medium hover:text-gray-500">خدمات السيارات</Link>
          <Link href="#" className="block font-medium hover:text-gray-500">سعّرلي</Link>
          <Link href="#" className="block font-medium hover:text-gray-500">المدونة</Link>
          <div className="flex gap-4 mt-2">
            <Link
              href={switchTo}
              className="w-10 h-10 flex items-center justify-center bg-black text-white text-sm font-bold rounded hover:bg-gray-800"
            >
              {isArabic ? "EN" : "AR"}
            </Link>
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80">
              تسجيل الدخول
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}