"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function LanguageSwitcher() {
  const pathname = usePathname()

  // تحديد إذا الصفحة عربية أو انجليزية
  const isArabic = pathname.startsWith("/ar")
  
  // بناء الرابط الصحيح
  const switchTo = isArabic 
    ? pathname.replace(/^\/ar/, "/en") // من ar إلى en
    : pathname.replace(/^\/en/, "/ar") // من en إلى ar

  return (
    <Link
      href={switchTo}
      className="w-10 h-10 flex items-center justify-center bg-black text-white text-sm font-bold rounded cursor-pointer hover:bg-gray-800"
    >
      {isArabic ? "EN" : "AR"}
    </Link>
  )
}
