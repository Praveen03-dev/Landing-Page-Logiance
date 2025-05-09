// app/why-us/page.tsx
import WhyUsHero from "@/components/why-us/WhyUsHero"
import FeatureGrid from "@/components/why-us/FeatureGrid"

export default function WhyUs() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl relative">
      

      <WhyUsHero />
      <FeatureGrid />
    </div>
  )
}