"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

const services = [
  {
    name: "الأكثر مبيعًا",
    items: [
      { src: "/images/services/best1.png", name: "خدمة تغيير زيت", price: "150 ريال" },
      { src: "/images/services/best2.png", name: "فحص شامل", price: "200 ريال" },
    ],
  },
  {
    name: "صيانة",
    items: [
      { src: "/images/services/maintenance1.png", name: "صيانة دورية", price: "250 ريال" },
      { src: "/images/services/maintenance2.png", name: "فحص مكينة", price: "300 ريال" },
    ],
  },
  {
    name: "التلميع والعناية",
    items: [
      { src: "/images/services/polish1.png", name: "تلميع خارجي", price: "180 ريال" },
      { src: "/images/services/polish2.png", name: "تنظيف داخلي", price: "120 ريال" },
    ],
  },
  {
    name: "حماية مقدمة السيارة",
    items: [
      { src: "/images/services/frontprotection1.png", name: "حماية شفافة", price: "400 ريال" },
    ],
  },
  {
    name: "تظليل النوافذ",
    items: [
      { src: "/images/services/window1.png", name: "تظليل حراري", price: "350 ريال" },
    ],
  },
  {
    name: "إصلاح الطلاء والصدمات",
    items: [
      { src: "/images/services/paint1.png", name: "إصلاح خدوش", price: "300 ريال" },
    ],
  },
  {
    name: "عام",
    items: [
      { src: "/images/services/general1.png", name: "خدمة عامة", price: "100 ريال" },
    ],
  },
  {
    name: "خدمات الإطارات",
    items: [
      { src: "/images/services/tires1.png", name: "ترصيص إطارات", price: "80 ريال" },
    ],
  },
  {
    name: "غسيل السيارات",
    items: [
      { src: "/images/services/wash1.png", name: "غسيل خارجي", price: "50 ريال" },
    ],
  },
  {
    name: "خدمات التكييف",
    items: [
      { src: "/images/services/ac1.png", name: "تنظيف فلتر مكيف", price: "90 ريال" },
    ],
  },
]

export default function CarServices() {
  const [activeService, setActiveService] = useState(services[0])

  return (
    <section className="py-10 bg-secondary w-full">
      <div className="w-full px-4 sm:px-10 md:px-20 lg:px-40 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">خدمات السيارات</h2>

        {/* أزرار الأقسام */}
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

        {/* عرض الخدمات داخل كروت */}
        <Card className="p-3">
          <CardContent>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {activeService.items.map((item, i) => (
                <div
                  key={i}
                  className="relative border rounded-lg overflow-hidden shadow-sm p-3 bg-white flex flex-col items-center justify-start hover:shadow-md transition min-h-[240px] sm:min-h-[280px] w-[130px] sm:w-[180px] flex-shrink-0"
                >
                  {/* شارة "أصلي" */}
                  <span className="absolute top-2 left-2 bg-green-600 text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-full z-10">
                    أصلي
                  </span>

                  {/* الصورة */}
                  <Image
                    src={item.src}
                    alt={`${activeService.name}-service-${i}`}
                    width={100}
                    height={100}
                    className="object-contain mb-2 sm:mb-3"
                  />

                  {/* اسم الخدمة */}
                  <p className="text-sm sm:text-lg text-gray-800 text-center mb-1">
                    {item.name}
                  </p>

                  {/* السعر */}
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