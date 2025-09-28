"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

const services = [
  {
    name: "Best Sellers",
    items: [
      { src: "/images/services/best1.png", name: "Oil Change Service", price: "150 SAR" },
      { src: "/images/services/best2.png", name: "Full Inspection", price: "200 SAR" },
    ],
  },
  {
    name: "Maintenance",
    items: [
      { src: "/images/services/maintenance1.png", name: "Routine Maintenance", price: "250 SAR" },
      { src: "/images/services/maintenance2.png", name: "Engine Check", price: "300 SAR" },
    ],
  },
  {
    name: "Polishing & Care",
    items: [
      { src: "/images/services/polish1.png", name: "Exterior Polishing", price: "180 SAR" },
      { src: "/images/services/polish2.png", name: "Interior Cleaning", price: "120 SAR" },
    ],
  },
  {
    name: "Front Protection",
    items: [
      { src: "/images/services/frontprotection1.png", name: "Clear Protection", price: "400 SAR" },
    ],
  },
  {
    name: "Window Tinting",
    items: [
      { src: "/images/services/window1.png", name: "Heat-Resistant Tint", price: "350 SAR" },
    ],
  },
  {
    name: "Paint & Dent Repair",
    items: [
      { src: "/images/services/paint1.png", name: "Scratch Repair", price: "300 SAR" },
    ],
  },
  {
    name: "General",
    items: [
      { src: "/images/services/general1.png", name: "General Service", price: "100 SAR" },
    ],
  },
  {
    name: "Tire Services",
    items: [
      { src: "/images/services/tires1.png", name: "Tire Balancing", price: "80 SAR" },
    ],
  },
  {
    name: "Car Wash",
    items: [
      { src: "/images/services/wash1.png", name: "Exterior Wash", price: "50 SAR" },
    ],
  },
  {
    name: "AC Services",
    items: [
      { src: "/images/services/ac1.png", name: "AC Filter Cleaning", price: "90 SAR" },
    ],
  },
]

export default function CarServices() {
  const [activeService, setActiveService] = useState(services[0])

  return (
    <section className="py-10 bg-secondary w-full">
      <div className="w-full px-4 sm:px-10 md:px-20 lg:px-40 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Car Services</h2>

        {/* Section buttons */}
        <div className="flex overflow-x-auto gap-4 mb-8 scrollbar-hide">
          {services.map((service) => (
            <button
              key={service.name}
              onClick={() => setActiveService(service)}
              className={`min-w-[10rem] h-20 sm:h-24 flex-shrink-0 flex items-center justify-center px-4 py-3 rounded-lg border transition-all text-sm sm:text-base font-medium ${
                activeService.name === service.name
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>

        {/* Service cards */}
        <Card className="p-3">
          <CardContent>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {activeService.items.map((item, i) => (
                <div
                  key={i}
                  className="relative border rounded-lg overflow-hidden shadow-sm p-3 bg-white flex flex-col items-center justify-start hover:shadow-md transition min-h-[240px] sm:min-h-[280px] w-[130px] sm:w-[180px] flex-shrink-0"
                >
                  {/* "Genuine" badge */}
                  <span className="absolute top-2 left-2 bg-green-600 text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-full z-10">
                    Genuine
                  </span>

                  {/* Image */}
                  <Image
                    src={item.src}
                    alt={`${activeService.name}-service-${i}`}
                    width={100}
                    height={100}
                    className="object-contain mb-2 sm:mb-3"
                  />

                  {/* Service name */}
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