import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import FeatureList from "@/components/FeatureList"
import Footer from "@/components/Footer"
import PriceBanner from "@/components/PriceBanner"
import CarServices from "@/components/CarServices"
import Accessories from "@/components/Accessories"
import CarBrandsSection from "@/components/CarBrandsSection"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureList />
      <PriceBanner />
      <CarServices />
      <Accessories />
      <CarBrandsSection />
      <Footer />
    </>
  )
}
