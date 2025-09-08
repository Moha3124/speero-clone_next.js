"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

const accessories = [
  { name: "Lights & Lamps", images: ["/images/accessories/lights1.png", "/images/accessories/lights2.png"] },
  { name: "Interior Accessories", images: ["/images/accessories/interior1.png", "/images/accessories/interior2.png"] },
  { name: "Maintenance Tools & Equipment", images: ["/images/accessories/tools1.png", "/images/accessories/tools2.png"] },
  { name: "Oils & Fluids", images: ["/images/accessories/oils1.png", "/images/accessories/oils2.png"] },
  { name: "Care Accessories", images: ["/images/accessories/care1.png", "/images/accessories/care2.png"] },
]

export default function AccessoriesEN() {
  const [activeAccessory, setActiveAccessory] = useState(accessories[0])

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Car Accessories</h2>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {accessories.map((acc) => (
            <button
              key={acc.name}
              onClick={() => setActiveAccessory(acc)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeAccessory.name === acc.name
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {acc.name}
            </button>
          ))}
        </div>

        {/* Display Images */}
        <Card className="p-6">
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {activeAccessory.images.map((img, i) => (
                <div key={i} className="border rounded-lg overflow-hidden shadow-sm p-2 bg-white h-32 relative">
                  <Image
                    src={img}
                    alt={`${activeAccessory.name}-accessory-${i}`}
                    fill
                    className="object-cover"
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
