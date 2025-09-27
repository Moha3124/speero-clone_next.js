"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

const accessories = [
  {
    name: "Lights & Bulbs",
    cover: "/images/lights-and-pulps@2x.png",
    images: ["/images/accessories/lights1.png", "/images/accessories/lights2.png"],
  },
  {
    name: "Interior Accessories",
    cover: "/images/interior-accessories@2x.png",
    images: ["/images/accessories/interior1.png", "/images/accessories/interior2.png"],
  },
  {
    name: "Tools & Maintenance Equipment",
    cover: "/images/tools-accessories@2x.png",
    images: ["/images/accessories/tools1.png", "/images/accessories/tools2.png"],
  },
  {
    name: "Oils & Fluids",
    cover: "/images/oil-and-fluids@2x.png",
    images: ["/images/accessories/oils1.png", "/images/accessories/oils2.png"],
  },
  {
    name: "Car Care Accessories",
    cover: "/images/car-care-accessories@2x.png",
    images: ["/images/accessories/care1.png", "/images/accessories/care2.png"],
  },
]

export default function Accessories() {
  const [activeAccessory, setActiveAccessory] = useState(accessories[0])

  return (
    <section className="py-10 bg-secondary w-full">
      <div className="w-full px-4 sm:px-10 md:px-20 lg:px-40 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Car Accessories</h2>

        {/* Section buttons with images */}
        <div className="flex justify-center overflow-x-auto gap-4 mb-8 scrollbar-hide">
          {accessories.map((acc) => (
            <button
              key={acc.name}
              onClick={() => setActiveAccessory(acc)}
              className={`min-w-[10rem] h-36 sm:h-40 flex-shrink-0 flex flex-col items-center justify-between px-3 py-6 rounded-lg border transition-all ${
                activeAccessory.name === acc.name
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Image
                src={acc.cover}
                alt={acc.name}
                width={60}
                height={60}
                className="object-contain"
              />
              <span className="text-xs sm:text-sm text-center leading-tight">{acc.name}</span>
            </button>
          ))}
        </div>

        {/* Display accessories in small cards */}
        <Card className="p-3">
          <CardContent>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {activeAccessory.images.map((img, i) => (
                <div
                  key={i}
                  className="border rounded-lg overflow-hidden shadow-sm p-3 bg-white flex flex-col items-center justify-center hover:shadow-md transition min-h-[180px] sm:min-h-[250px] w-[130px] sm:w-[180px] flex-shrink-0"
                >
                  <Image
                    src={img}
                    alt={`${activeAccessory.name}-accessory-${i}`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}