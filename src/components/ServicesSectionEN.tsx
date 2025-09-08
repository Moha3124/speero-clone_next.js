"use client"

import { useState } from "react"

const services = [
  "Best Selling",
  "Maintenance",
  "Polishing & Care",
  "Front Protection",
  "Window Tinting",
  "Paint & Body Repair",
  "General",
  "Tire Services",
  "Car Wash",
  "AC Services",
]

export default function ServicesSectionEN() {
  const [active, setActive] = useState("Best Selling")

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Car Services</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service) => (
            <button
              key={service}
              onClick={() => setActive(service)}
              className={`px-4 py-2 rounded-md border transition ${
                active === service
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-300 hover:bg-gray-100"
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
