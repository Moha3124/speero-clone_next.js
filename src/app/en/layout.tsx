export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en" dir="ltr" className="bg-white text-black">
      {children}
    </div>
  )
}