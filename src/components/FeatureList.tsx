"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

const sections = [
  {
    name: "المكائن، القيرات وملحقاتها",
    cover: "/images/car-engine.2x.png",
    images: [
      { src: "/images/download.avif", price: "500 ريال" },
      { src: "/images/download(2).png", price: "650 ريال" },
      { src: "/images/download(3).png", price: "720 ريال" },
      { src: "/images/download(3).png", price: "720 ريال" },
      { src: "/images/download(3).png", price: "720 ريال" },
      { src: "/images/download(3).png", price: "720 ريال" },
    ],
  },
  {
    name: "نظام التكييف والتبريد",
    cover: "/images/water-pump.2x.png",
    images: [
      { src: "/images/download(4).png", price: "400 ريال" },
      { src: "/images/download(5).png", price: "550 ريال" },
      { src: "/images/download(6).png", price: "600 ريال" },
    ],
  },
  {
    name: "نظام الوقود",
    cover: "/images/fuel-gauge.2x.png",
    images: [
      { src: "/images/download(7).png", price: "350 ريال" },
      { src: "/images/download(8).png", price: "450 ريال" },
      { src: "/images/download(9).png", price: "500 ريال" },
    ],
  },
  {
    name: "البواجي، الفلاتر والسيور",
    cover: "/images/spark-plug.2x.png",
    images: [
      { src: "/images/download(10).png", price: "120 ريال" },
      { src: "/images/download(11).png", price: "150 ريال" },
      { src: "/images/download(12).png", price: "180 ريال" },
    ],
  },
  {
    name: "المساعدات، المقصات وعمود التوازن",
    cover: "/images/spring.2x.png",
    images: [
      { src: "/images/download(13).png", price: "400 ريال" },
      { src: "/images/download(14).png", price: "500 ريال" },
    ],
  },
  {
    name: "العكس، الدفرنس والرمانات",
    cover: "/images/pstons.2x.png",
    images: [
      { src: "/images/download(15).png", price: "600 ريال" },
      { src: "/images/download(16).png", price: "750 ريال" },
    ],
  },
  {
    name: "الابواب، الرفرف والكبوت",
    cover: "/images/doors.2x.png",
    images: [
      { src: "/images/download(17).png", price: "300 ريال" },
      { src: "/images/download(18).png", price: "450 ريال" },
    ],
  },
  {
    name: "الصدامات والشبوك والواجهة",
    cover: "/images/bumpars.2x.png",
    images: [
      { src: "/images/download(19).png", price: "800 ريال" },
      { src: "/images/download(20).png", price: "950 ريال" },
    ],
  },
]

export default function FeatureList() {
  const [activeSection, setActiveSection] = useState(sections[0])

  return (
    <section className="py-10 bg-secondary w-full">
      <div className="w-full px-4 sm:px-10 md:px-20 lg:px-40 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">سوق قطع الغيار</h2>

        {/* الأزرار بحجم موحد وعرض أكبر */}
        <div className="flex overflow-x-auto gap-4 mb-8 scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.name}
              onClick={() => setActiveSection(section)}
              className={`min-w-[10rem] h-36 sm:h-40 flex-shrink-0 flex flex-col items-center justify-between px-3 py-6 rounded-lg border transition-all ${activeSection.name === section.name
                ? "bg-primary text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
            >
              <Image
                src={section.cover}
                alt={section.name}
                width={
                  section.name === "المساعدات، المقصات وعمود التوازن"
                    ? 40
                    : section.name === "العكس، الدفرنس والرمانات"
                      ? 50
                      : section.name === "الأابواب، الرفرف والكبوت"
                        ? 40
                        : section.name === "الصدامات والشبوك والواجهة"
                          ? 80
                          : 60
                }
                height={
                  section.name === "المساعدات، المقصات وعمود التوازن"
                    ? 40
                    : section.name === "العكس، الدفرنس والرمانات"
                      ? 50
                      : section.name === "الأابواب، الرفرف والكبوت"
                        ? 40
                        : section.name === "الصدامات والشبوك والواجهة"
                          ? 50
                          : 30
                }
                className="object-contain"
              />
              <span className="text-xs sm:text-sm text-center leading-tight">{section.name}</span>
            </button>
          ))}
        </div>

        {/* عرض المنتجات مع روابط */}
        <Card className="p-3">
          <CardContent>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {activeSection.images.map((item, i) => (
                <a
                  key={i}
                  href={`/product/${activeSection.name}-${i}`}
                  className="border rounded-lg overflow-hidden shadow-sm p-3 bg-white flex flex-col items-center justify-between hover:shadow-md transition min-h-[180px] sm:min-h-[250px] w-[130px] sm:w-[180px] flex-shrink-0"
                >
                  <Image
                    src={item.src}
                    alt={`${activeSection.name}-part-${i}`}
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <p className="mt-2 text-xs sm:text-sm font-medium text-gray-700 text-center">{item.price}</p>
                </a>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}