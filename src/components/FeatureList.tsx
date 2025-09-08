"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

const sections = [
  {
    name: "المكائن، القيرات وملحقاتها",
    images: [
      { src: "/images/download(1).png", price: "500 ريال" },
      { src: "/images/download(2).png", price: "650 ريال" },
      { src: "/images/download(3).png", price: "720 ريال" },
    ],
  },
  {
    name: "نظام التكييف والتبريد",
    images: [
      { src: "/images/download(4).png", price: "400 ريال" },
      { src: "/images/download(5).png", price: "550 ريال" },
      { src: "/images/download(6).png", price: "600 ريال" },
    ],
  },
  {
    name: "نظام الوقود",
    images: [
      { src: "/images/download(7).png", price: "350 ريال" },
      { src: "/images/download(8).png", price: "450 ريال" },
      { src: "/images/download(9).png", price: "500 ريال" },
    ],
  },
  {
    name: "البواجي، الفلاتر والسيور",
    images: [
      { src: "/images/download(10).png", price: "120 ريال" },
      { src: "/images/download(11).png", price: "150 ريال" },
      { src: "/images/download(12).png", price: "180 ريال" },
    ],
  },
  {
    name: "المساعدات، المقصات وعمود التوازن",
    images: [
      { src: "/images/download(13).png", price: "400 ريال" },
      { src: "/images/download(14).png", price: "500 ريال" },
    ],
  },
  {
    name: "العكس، الدفرنس والرمانات",
    images: [
      { src: "/images/download(15).png", price: "600 ريال" },
      { src: "/images/download(16).png", price: "750 ريال" },
    ],
  },
  {
    name: "الابواب، الرفرف والكبوت",
    images: [
      { src: "/images/download(17).png", price: "300 ريال" },
      { src: "/images/download(18).png", price: "450 ريال" },
    ],
  },
  {
    name: "الصدامات والشبوك والواجهة",
    images: [
      { src: "/images/download(19).png", price: "800 ريال" },
      { src: "/images/download(20).png", price: "950 ريال" },
    ],
  },
]

export default function FeatureList() {
  const [activeSection, setActiveSection] = useState(sections[0])

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">سوق قطع الغيار</h2>

        {/* الأقسام */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeSection.name === section.name
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {section.name}
            </button>
          ))}
        </div>

        {/* عرض الصور */}
        <Card className="p-6">
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
              {activeSection.images.map((item, i) => (
                <div
                  key={i}
                  className="border rounded-lg overflow-hidden shadow-sm p-2 bg-white flex flex-col items-center"
                >
                  {/* الصورة */}
                  <Image
                    src={item.src}
                    alt={`${activeSection.name}-part-${i}`}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                  {/* مساحة السعر أو النص */}
                  <p className="mt-2 font-medium text-gray-700">{item.price}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
