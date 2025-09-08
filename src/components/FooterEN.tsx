"use client"

import Image from "next/image"
import Link from "next/link"

export default function FooterEN() {
  return (
    <footer className="bg-white text-black pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        <div>
          <h3 className="font-bold mb-2">About Speero</h3>
          <Link href="#" className="text-gray-700 hover:text-white">Who We Are</Link>
        </div>

        <div>
          <h3 className="font-bold mb-2">Learn More</h3>
          <ul className="space-y-1 text-gray-700">
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Request a Quote</Link></li>
            <li><Link href="#">Customer Service Center</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Before You Start</h3>
          <ul className="space-y-1 text-gray-700">
            <li><Link href="#">Request a Quote</Link></li>
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Payment Methods</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-2">Technical Support</h3>
          <p className="text-gray-500 mb-4">support@speero.net</p>
          <h3 className="font-bold mb-2">Follow Us</h3>
          <div className="flex gap-2">
            <Image src="/images/tiktok.svg" alt="TikTok" width={40} height={1} className="cursor-pointer" />
            <Image src="/images/insta.svg" alt="Instagram" width={40} height={1} className="cursor-pointer" />
            <Image src="/images/twitter.svg" alt="X" width={40} height={1} className="cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-2">Download the App Now</h3>
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

          <h3 className="font-bold mt-4 mb-2">We Accept</h3>
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
        © 2025 All rights reserved by Speero Saudi Arabia
      </div>
    </footer>
  )
}
