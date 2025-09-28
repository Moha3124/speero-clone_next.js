"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

const sections = [
  {
    name: "Engines, Transmissions & Components",
    cover: "/images/car-engine.2x.png",
    images: [
      { src: "/images/download.avif", price: "500 SAR", name: "Toyota Engine" },
      { src: "/images/download(2).png", price: "650 SAR", name: "Hyundai Transmission" },
      { src: "/images/download(3).png", price: "720 SAR", name: "Nissan Radiator" },
      { src: "/images/download(3).png", price: "720 SAR", name: "Nissan Radiator" },
      { src: "/images/download(3).png", price: "720 SAR", name: "Nissan Radiator" },
      { src: "/images/download(3).png", price: "720 SAR", name: "Nissan Radiator" },
    ],
  },
  {
    name: "Cooling & AC System",
    cover: "/images/water-pump.2x.png",
    images: [
      { src: "/images/download(4).png", price: "400 SAR", name: "AC Compressor" },
      { src: "/images/download(5).png", price: "550 SAR", name: "AC Radiator" },
      { src: "/images/download(6).png", price: "600 SAR", name: "Cooling Fan" },
    ],
  },
  {
    name: "Fuel System",
    cover: "/images/fuel-gauge.2x.png",
    images: [
      { src: "/images/download(7).png", price: "350 SAR", name: "Fuel Pump" },
      { src: "/images/download(8).png", price: "450 SAR", name: "Fuel Filter" },
      { src: "/images/download(9).png", price: "500 SAR", name: "Fuel Pressure Sensor" },
    ],
  },
  {
    name: "Spark Plugs, Filters & Belts",
    cover: "/images/spark-plug.2x.png",
    images: [
      { src: "/images/download(10).png", price: "120 SAR", name: "NGK Spark Plug" },
      { src: "/images/download(11).png", price: "150 SAR", name: "Air Filter" },
      { src: "/images/download(12).png", price: "180 SAR", name: "Engine Belt" },
    ],
  },
  {
    name: "Shocks, Arms & Stabilizers",
    cover: "/images/spring.2x.png",
    images: [
      { src: "/images/download(13).png", price: "400 SAR", name: "Front Shock" },
      { src: "/images/download(14).png", price: "500 SAR", name: "Rear Arm" },
    ],
  },
  {
    name: "Axles, Differentials & Bearings",
    cover: "/images/pstons.2x.png",
    images: [
      { src: "/images/download(15).png", price: "600 SAR", name: "Wheel Bearing" },
      { src: "/images/download(16).png", price: "750 SAR", name: "Rear Differential" },
    ],
  },
  {
    name: "Doors, Fenders & Hood",
    cover: "/images/doors.2x.png",
    images: [
      { src: "/images/download(17).png", price: "300 SAR", name: "Front Door" },
      { src: "/images/download(18).png", price: "450 SAR", name: "Rear Fender" },
    ],
  },
  {
    name: "Bumpers, Grilles & Front End",
    cover: "/images/bumpars.2x.png",
    images: [
      { src: "/images/download(19).png", price: "800 SAR", name: "Front Bumper" },
      { src: "/images/download(20).png", price: "950 SAR", name: "Grille" },
    ],
  },
]

export default function FeatureList() {
  const [activeSection, setActiveSection] = useState(sections[0])

  return (
    <section className="py-10 bg-secondary w-full">
      <div className="w-full px-4 sm:px-10 md:px-20 lg:px-40 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Spare Parts Marketplace</h2>

        <div className="flex overflow-x-auto gap-4 mb-8 scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() => setActiveSection(section)}
              className={`min-w-[10rem] h-36 sm:h-40 flex-shrink-0 flex flex-col items-center justify-between px-3 py-6 rounded-lg border transition-all ${
                activeSection.name === section.name
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Image
                src={section.cover}
                alt={section.name}
                width={section.name === "Shocks, Arms & Stabilizers" ? 40 : 60}
                height={section.name === "Shocks, Arms & Stabilizers" ? 30 : 40}
                className="object-contain"
              />
              <span className="text-xs sm:text-sm text-center leading-tight">{section.name}</span>
            </button>
          ))}
        </div>

        <Card className="p-3">
          <CardContent>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {activeSection.images.map((item, i) => (
                <a
                  key={i}
                  href={`/product/${activeSection.name}-${i}`}
                  className="relative border rounded-lg overflow-hidden shadow-sm p-3 bg-white flex flex-col items-center justify-start hover:shadow-md transition min-h-[240px] sm:min-h-[280px] w-[130px] sm:w-[180px] flex-shrink-0"
                >
                  <span className="absolute top-2 left-2 bg-green-600 text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-full z-10">
                    Genuine
                  </span>

                  <Image
                    src={item.src}
                    alt={`${activeSection.name}-part-${i}`}
                    width={100}
                    height={100}
                    className="object-contain mb-2 sm:mb-3"
                  />

                  <p className="text-sm sm:text-lg text-gray-800 text-center mb-1">
                    {item.name}
                  </p>

                  <p className="text-sm sm:text-base font-bold text-gray-700 text-center mt-auto">
                    {item.price}
                  </p>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}