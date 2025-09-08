"use client"

import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white text-black pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        <div>
          <h3 className="font-bold mb-2">عن سبيرو</h3>
          <Link href="#" className="text-gray-700 hover:text-white">من نحن</Link>
        </div>

        <div>
          <h3 className="font-bold mb-2">اعرف اكثر</h3>
          <ul className="space-y-1 text-gray-700">
            <li><Link href="#">المدونة</Link></li>
            <li><Link href="#">خدمة سعرلي</Link></li>
            <li><Link href="#">مركز خدمة العملاء</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">قبل ان تبدأ</h3>
          <ul className="space-y-1 text-gray-700">
            <li><Link href="#">خدمة سعرلي</Link></li>
            <li><Link href="#">سياسة الخصوصية</Link></li>
            <li><Link href="#">الشروط والاحكام</Link></li>
            <li><Link href="#">طرق الدفع</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">الدعم الفني</h3>
          <p className="text-gray-500 mb-4">support@speero.net</p>
          <h3 className="font-bold mb-2">شبكاتنا الاجتماعية</h3>
          <div className="flex gap-2">
            <Image src="/images/tiktok.svg" alt="TikTok" width={40} height={1} className="cursor-pointer" />
            <Image src="/images/insta.svg" alt="Instagram" width={40} height={1} className="cursor-pointer" />
            <Image src="/images/twitter.svg" alt="X" width={40} height={1} className="cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-2">حمل التطبيق الان</h3>
          <div className="flex flex-col gap-2">
            <Link href="https://play.google.com/store">
              <Image src="/images/google-play.webp" alt="Google Play" width={140} height={40} className="object-contain" />
            </Link>
            <Link href="https://www.apple.com/app-store/">
              <Image src="/images/apple-store.webp" alt="App Store" width={140} height={40} className="object-contain" />
            </Link>
            <Link href="#">
              <Image src="/images/app-gallery-black.webp" alt="AppGallery" width={140} height={40} className="object-contain" />
            </Link>
          </div>

          <h3 className="font-bold mt-4 mb-2">نقبل طرق الدفع</h3>
          <div className="flex flex-wrap gap-2">
            <Image src="/images/tabby-logo.svg" alt="Tappy" width={50} height={27} />
            <Image src="/images/mastercard.svg" alt="MasterCard" width={50} height={27} />
            <Image src="/images/visa.svg" alt="Visa" width={50} height={27} />
            <Image src="/images/mada-footer.svg" alt="Mada" width={100} height={27} />
            <Image src="/images/apple-pay-logo.svg" alt="Apple Pay" width={50} height={27} />
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        © 2025 جميع الحقوق محفوظة لدى شركة سبيرو السعودية
      </div>
    </footer>
  )
}
