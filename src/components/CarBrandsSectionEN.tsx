"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "./ui/card"

const carBrands = [
  { name: "Toyota", image: "/images/toyota-colored.webp", link: "/brands/toyota" },
  { name: "Hyundai", image: "/images/hyundai-colored.webp", link: "/brands/hyundai" },
  { name: "Kia", image: "/images/kia-colored.webp", link: "/brands/kia" },
  { name: "Nissan", image: "/images/nissan-colored.webp", link: "/brands/nissan" },
  { name: "Ford", image: "/images/ford-colored.webp", link: "/brands/ford" },
  { name: "Chevrolet", image: "/images/chevrolet-colored.webp", link: "/brands/chevrolet" },
  { name: "Honda", image: "/images/honda-colored.webp", link: "/brands/honda" },
  { name: "BMW", image: "/images/bmw-colored.webp", link: "/brands/bmw" },
  { name: "GMC", image: "/images/gmc-colored.webp", link: "/brands/gmc" },
  { name: "Lexus", image: "/images/lexus-colored.webp", link: "/brands/lexus" },
]

export default function CarBrandsSectionEN() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Car Brands</h2>

        <Card className="p-6">
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {carBrands.map((brand) => (
                <Link
                  key={brand.name}
                  href={brand.link}
                  className="border rounded-lg overflow-hidden shadow-sm p-2 bg-white hover:shadow-lg transition flex flex-col items-center justify-center h-36"
                >
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={60}
                    height={60}
                    className="object-contain mb-2"
                  />
                  <span className="text-sm font-medium">{brand.name}</span>
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
