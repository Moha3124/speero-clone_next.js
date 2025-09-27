"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

const services = [
  {
    name: "Best Sellers",
    images: ["/images/services/best1.png", "/images/services/best2.png"],
  },
  {
    name: "Maintenance",
    images: ["/images/services/maintenance1.png", "/images/services/maintenance2.png"],
  },
  {
    name: "Polishing & Care",
    images: ["/images/services/polish1.png", "/images/services/polish2.png"],
  },
  {
    name: "Front Protection",
    images: ["/images/services/frontprotection1.png"],
  },
  {
    name: "Window Tinting",
    images: ["/images/services/window1.png"],
  },
  {
    name: "Paint & Dent Repair",
    images: ["/images/services/paint1.png"],
  },
  {
    name: "General",
    images: ["/images/services/general1.png"],
  },
  {
    name: "Tire Services",
    images: ["/images/services/tires1.png"],
  },
  {
    name: "Car Wash",
    images: ["/images/services/wash1.png"],
  },
  {
    name: "AC Services",
    images: ["/images/services/ac1.png"],
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
              {activeService.images.map((img, i) => (
                <div
                  key={i}
                  className="border rounded-lg overflow-hidden shadow-sm p-3 bg-white flex flex-col items-center justify-center hover:shadow-md transition min-h-[180px] sm:min-h-[250px] w-[130px] sm:w-[180px] flex-shrink-0"
                >
                  <Image
                    src={img}
                    alt={`${activeService.name}-service-${i}`}
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