import { Input } from "./ui/input"
import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section className="bg-primary text-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          اشتر قطع غيار سيارات أصلية
        </h1>
        <p className="text-white/80 text-base sm:text-lg">
          تصفح تشكيلتنا الواسعة من قطع غيار السيارات الأصلية وخدمات السيارات المتنوعة
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 justify-center items-center sm:items-stretch">
          <Input
            placeholder="ابحث بالاسم أو رقم القطعة"
            className="w-full sm:w-96 bg-white text-black placeholder:text-gray-500"
          />
          <Button className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2">
            بحث
          </Button>
        </div>
      </div>
    </section>
  )
}