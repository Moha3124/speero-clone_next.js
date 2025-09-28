"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"

const accessories = [
  {
    name: "الإضاءات والمصابيح",
    cover: "/images/lights-and-pulps@2x.png",
    items: [
      { src: "/images/accessories/lights1.png", name: "مصباح أمامي", price: "120 ريال" },
      { src: "/images/accessories/lights2.png", name: "لمبة خلفية", price: "80 ريال" },
    ],
  },
  {
    name: "الإكسسوارات الداخلية",
    cover: "/images/interior-accessories@2x.png",
    items: [
      { src: "/images/accessories/interior1.png", name: "غطاء مقود", price: "60 ريال" },
      { src: "/images/accessories/interior2.png", name: "فرشة أرضية", price: "90 ريال" },
    ],
  },
  {
    name: "أدوات ومعدات الصيانة",
    cover: "/images/tools-accessories@2x.png",
    items: [
      { src: "/images/accessories/tools1.png", name: "عدة مفكات", price: "150 ريال" },
      { src: "/images/accessories/tools2.png", name: "رافعة سيارة", price: "200 ريال" },
    ],
  },
  {
    name: "الزيوت والسوائل",
    cover: "/images/oil-and-fluids@2x.png",
    items: [
      { src: "/images/accessories/oils1.png", name: "زيت محرك", price: "100 ريال" },
      { src: "/images/accessories/oils2.png", name: "سائل تبريد", price: "70 ريال" },
    ],
  },
  {
    name: "إكسسوارات العناية",
    cover: "/images/car-care-accessories@2x.png",
    items: [
      { src: "/images/accessories/care1.png", name: "شامبو سيارات", price: "40 ريال" },
      { src: "/images/accessories/care2.png", name: "منشفة تنظيف", price: "25 ريال" },
    ],
  },
]

export default function Accessories() {
  const [activeAccessory, setActiveAccessory] = useState(accessories[0])

  return (
    <section className="py-10 bg-secondary w-full">
      <div className="w-full px-4 sm:px-10 md:px-20 lg:px-40 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">إكسسوارات السيارات</h2>

        {/* أزرار الأقسام بصور متجاوبة */}
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

        {/* عرض المنتجات داخل كروت متجاوبة */}
        <Card className="p-3">
          <CardContent>
            <div className="flex gap-3 overflow-x-auto scrollbar-hide">
              {activeAccessory.items.map((item, i) => (
                <div
                  key={i}
                  className="relative border rounded-lg overflow-hidden shadow-sm p-3 bg-white flex flex-col items-center justify-start hover:shadow-md transition min-h-[240px] sm:min-h-[280px] w-[130px] sm:w-[180px] flex-shrink-0"
                >
                  {/* شارة "أصلي-بديل" */}
                  <span className="absolute top-2 left-2 bg-green-600 text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-full z-10">
                    أصلي
                  </span>

                  {/* صورة المنتج */}
                  <Image
                    src={item.src}
                    alt={`${activeAccessory.name}-accessory-${i}`}
                    width={100}
                    height={100}
                    className="object-contain mb-2 sm:mb-3"
                  />

                  {/* اسم المنتج */}
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