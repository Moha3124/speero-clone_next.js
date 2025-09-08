"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { MenuIcon, XIcon } from "lucide-react"
import LanguageSwitcher from "./LanguageSwitcher"

export default function NavbarEN() {
  const [open, setOpen] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <nav className="bg-white text-black border-b shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/speerologo.png"
            alt="Speero"
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

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-6">
          <li className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 font-medium hover:text-gray-500"
            >
              Spare Parts Market
              <ChevronDownIcon className="w-4 h-4" />
            </button>

            {open && (
              <ul className="absolute top-full left-0 bg-white text-gray-800 shadow-lg rounded mt-2 min-w-[220px] z-20">
                {[
                  "Explore Spare Parts",
                  "Bumpers, Grills & Front",
                  "Engines, Gearboxes & Accessories",
                  "Lights & Lamps",
                  "Brakes & Fabrics",
                  "Doors, Fenders & Hoods",
                  "Exhaust",
                  "Fuel System",
                  "Axle, Differential & Bearings",
                  "Plugs, Filters & Belts",
                  "Suspensions & Balancer Shaft",
                  "Steering & Accessories",
                  "AC & Cooling System",
                ].map((item, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-100">
                    <Link href="#">{item}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li><Link href="#" className="font-medium hover:text-gray-500">Car Services</Link></li>
          <li><Link href="#" className="font-medium hover:text-gray-500">Request a Quote</Link></li>
          <li><Link href="#" className="font-medium hover:text-gray-500">Blog</Link></li>
        </ul>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <LanguageSwitcher />
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80">
            Login
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="sm:hidden px-4 pb-4 space-y-2">
          <button
            onClick={() => setOpen(!open)}
            className="w-full text-left font-medium hover:text-gray-500"
          >
            Spare Parts Market
          </button>
          {open && (
            <ul className="bg-white text-gray-800 shadow rounded mt-1 space-y-1">
              {[
                "Explore Spare Parts",
                "Bumpers, Grills & Front",
                "Engines, Gearboxes & Accessories",
                "Lights & Lamps",
                "Brakes & Fabrics",
                "Doors, Fenders & Hoods",
                "Exhaust",
                "Fuel System",
                "Axle, Differential & Bearings",
                "Plugs, Filters & Belts",
                "Suspensions & Balancer Shaft",
                "Steering & Accessories",
                "AC & Cooling System",
              ].map((item, index) => (
                <li key={index} className="px-4 py-2 hover:bg-gray-100">
                  <Link href="#">{item}</Link>
                </li>
              ))}
            </ul>
          )}

          <Link href="#" className="block font-medium hover:text-gray-500">Car Services</Link>
          <Link href="#" className="block font-medium hover:text-gray-500">Request a Quote</Link>
          <Link href="#" className="block font-medium hover:text-gray-500">Blog</Link>

          <div className="flex gap-4 mt-2">
            <LanguageSwitcher />
            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}