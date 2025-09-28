"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

const accessories = [
  {
    name: "Lights & Bulbs",
    cover: "/images/lights-and-pulps@2x.png",
    items: [
      { src: "/images/accessories/lights1.png", name: "Headlight", price: "120 SAR" },
      { src: "/images/accessories/lights2.png", name: "Taillight", price: "80 SAR" },
    ],
  },
  {
    name: "Interior Accessories",
    cover: "/images/interior-accessories@2x.png",
    items: [
      { src: "/images/accessories/interior1.png", name: "Steering Cover", price: "60 SAR" },
      { src: "/images/accessories/interior2.png", name: "Floor Mat", price: "90 SAR" },
    ],
  },
  {
    name: "Tools & Maintenance Equipment",
    cover: "/images/tools-accessories@2x.png",
    items: [
      { src: "/images/accessories/tools1.png", name: "Screwdriver Set", price: "150 SAR" },
      { src: "/images/accessories/tools2.png", name: "Car Jack", price: "200 SAR" },
    ],
  },
  {
    name: "Oils & Fluids",
    cover: "/images/oil-and-fluids@2x.png",
    items: [
      { src: "/images/accessories/oils1.png", name: "Engine Oil", price: "100 SAR" },
      { src: "/images/accessories/oils2.png", name: "Coolant", price: "70 SAR" },
    ],
  },
  {
    name: "Car Care Accessories",
    cover: "/images/car-care-accessories@2x.png",
    items: [
      { src: "/images/accessories/care1.png", name: "Car Shampoo", price: "40 SAR" },
      { src: "/images/accessories/care2.png", name: "Cleaning Towel", price: "25 SAR" },
    ],
  },
]

export default function Accessories() {
  const [activeAccessory, setActiveAccessory] = useState(accessories[0])

  return (
    <section className="py-10 bg-secondary w-full">
      <div className="w-full px-4 sm:px-10 md:px-20 lg:px-40 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Car Accessories</h2>

        {/* Section buttons with responsive images */}
        <div className="flex justify-center overflow-x-auto gap-4 mb-8 scrollbar-hide">
          {accessories.map((acc) => (
            <button
              key={acc.name}
              onClick={() => setActiveAccessory(acc)}
              className={`min-w-[10rem] h-36 sm:h-40 flex-shrink-0 flex flex-col items-center justify-start px-3 py-4 rounded-lg border transition-all ${
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
                className="object-contain mb-2"
              />
              <span className="text-xs sm:text-sm text-center leading-tight">{acc.name}</span>
            </button>
          ))}
        </div>

        {/* Product cards */}
        <Card className="p-3">
          <CardContent>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {activeAccessory.items.map((item, i) => (
                <div
                  key={i}
                  className="relative border rounded-lg overflow-hidden shadow-sm p-3 bg-white flex flex-col items-center justify-start hover:shadow-md transition min-h-[240px] sm:min-h-[280px] w-[130px] sm:w-[180px] flex-shrink-0"
                >
                  {/* "Genuine" badge */}
                  <span className="absolute top-2 left-2 bg-green-600 text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-full z-10">
                    Genuine
                  </span>

                  {/* Product image */}
                  <Image
                    src={item.src}
                    alt={`${activeAccessory.name}-accessory-${i}`}
                    width={100}
                    height={100}
                    className="object-contain mb-2 sm:mb-3"
                  />

                  {/* Product name */}
                  <p className="text-sm sm:text-lg text-gray-800 text-center mb-1">
                    {item.name}
                  </p>

                  {/* Price */}
                  <p className="text-sm sm:text-base font-bold text-gray-700 text-center mt-auto">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}