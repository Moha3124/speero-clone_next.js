"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

const services = [
  { name: "Best Sellers", images: ["/images/services/best1.png", "/images/services/best2.png"] },
  { name: "Maintenance", images: ["/images/services/maintenance1.png", "/images/services/maintenance2.png"] },
  { name: "Polish & Care", images: ["/images/services/polish1.png", "/images/services/polish2.png"] },
  { name: "Front Car Protection", images: ["/images/services/frontprotection1.png"] },
  { name: "Window Tinting", images: ["/images/services/window1.png"] },
  { name: "Paint & Dent Repair", images: ["/images/services/paint1.png"] },
  { name: "General", images: ["/images/services/general1.png"] },
  { name: "Tire Services", images: ["/images/services/tires1.png"] },
  { name: "Car Wash", images: ["/images/services/wash1.png"] },
  { name: "AC Services", images: ["/images/services/ac1.png"] },
]

export default function CarServicesEN() {
  const [activeService, setActiveService] = useState(services[0])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Car Services</h2>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {services.map((service) => (
            <button
              key={service.name}
              onClick={() => setActiveService(service)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeService.name === service.name
                  ? "bg-black text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {service.name}
            </button>
          ))}
        </div>

        <Card className="p-6">
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {activeService.images.map((img, i) => (
                <div key={i} className="border rounded-lg overflow-hidden shadow-sm p-2 bg-white h-32 relative">
                  <Image
                    src={img}
                    alt={`${activeService.name}-service-${i}`}
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
