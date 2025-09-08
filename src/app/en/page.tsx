// src/app/en/page.tsx
"use client"

import NavbarEN from "@/components/NavbarEN"
import HeroEN from "@/components/HeroEN"
import FeatureListEN from "@/components/FeatureListEN"
import PriceBannerEN from "../../components/PriceBannerEN"
import CarServicesEN from "@/components/CarServiesEN"
import AccessoriesEN from "@/components/AccessoriesEN"
import CarBrandsSectionEN from "@/components/CarBrandsSectionEN"
import FooterEN from "../../components/FooterEN"

export default function EnglishPage() {
  return (
    <>
      <NavbarEN />
      <HeroEN />
      <FeatureListEN />
      <PriceBannerEN />
      <CarServicesEN />
      <AccessoriesEN />
      <CarBrandsSectionEN />
      <FooterEN />
    </>
  )
}
