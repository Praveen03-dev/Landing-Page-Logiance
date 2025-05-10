import FeaturesHero from "@/components/features/FeaturesHero"
import FeatureCards from "@/components/features/FeatureCards"

export default function Features() {
  return (
    <div className="container mx-auto px-4 py-8">
      <FeaturesHero />
      <div className="mx-auto">
        <FeatureCards />
      </div>
    </div>
  )
}