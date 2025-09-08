export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl" lang="ar" className="bg-white text-black">
      {children}
    </div>
  )
}