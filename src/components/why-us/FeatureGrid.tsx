// components/why-us/FeatureGrid.tsx
import FeatureCard from "./FeatureCard"
import { ConnectYourStoreImage } from "@/images/why-us/ConnectYourStore"
import { PickTheBestCourierImage } from "@/images/why-us/PickTheBestCourier"
import { SyncAndImportImage } from "@/images/why-us/SyncAndImport"
import { ShipTrackAndManageReturnsImage } from "@/images/why-us/ShipTrackAndManageReturns"
import { ConnectYourStoreIcon } from "@/icons/why-us/ConnectYourStoreIcon"
import { SyncAndImportIcon } from "@/icons/why-us/SyncAndImportIcon"
import { PickTheBestCourierIcon } from "@/icons/why-us/PickTheBestCourierIcon"
import { ShipTrackAndManageReturnsIcon } from "@/icons/why-us/ShipTrackAndManageReturnsIcon"

export default function FeatureGrid() {
  const features = [
    {
      title: "Connect Your Store",
      description: "Instantly sync with Shopify, WooCommerce, or any other platform in seconds.",
      icon: <ConnectYourStoreIcon />,
      content: <ConnectYourStoreImage className="rounded-t-[16px]"/>,
    },
    {
      title: "Sync & Import Orders",
      description: "Auto-import orders from all your sales channels into one dashboard.",
      icon: <SyncAndImportIcon />,
      content: <SyncAndImportImage className="rounded-t-[16px]"/>,
    },
    {
      title: "Pick the Best Courier",
      description: "Let our smart engine recommend the fastest, cheapest, and most reliable partner.",
      icon: <PickTheBestCourierIcon />,
      content: <PickTheBestCourierImage className="rounded-t-[16px]"/>,
    },
    {
      title: "Ship, Track & Manage Returns",
      description: "Schedule pickups, track every shipment, and handle NDRs & returns like a pro.",
      icon: <ShipTrackAndManageReturnsIcon />,
      content: <ShipTrackAndManageReturnsImage className="rounded-t-[16px]"/>,
    },
  ]

  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-6 relative z-10">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className={`${index % 2 === 0 ? 'justify-self-end' : 'justify-self-start'}`}
        >
          <FeatureCard
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            content={feature.content}
          />
        </div>
      ))}
    </div>
  )
}
