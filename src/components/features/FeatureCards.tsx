"use client"

import React from "react"
import FeatureCard from "./FeatureCard"
import HighlightedFeature from "./HighlightedFeature"

export default function FeatureCards() {
  const features = [
    { id: 1, title: "One-click label generation", iconName: "label-generation" },
    { id: 2, title: "Pickup scheduling", iconName: "pickup-scheduling" },
    { id: 3, title: "Delivery status sync", iconName: "delivery-status" },
    { id: 4, title: "Activity logs", iconName: "activity-logs" },
    { id: 5, title: "Bulk order actions", iconName: "bulk-order" },
    { id: 6, title: "Order tagging & filtering", iconName: "order-tagging" },
    { id: 7, title: "Zone-wise delivery breakdown", iconName: "zone-delivery" },
    { id: 8, title: "Hour/day-based performance data", iconName: "performance-data" },
    { id: 9, title: "Courier SLA breach alerts", iconName: "sla-alerts" },
    { id: 10, title: "RTO heatmap visualization", iconName: "heatmap" },
    { id: 11, title: "Multi-courier integration", iconName: "multi-courier" },
    { id: 12, title: "Reattempt scheduling", iconName: "reattempt" },
    {
      id: 13,
      title: "Smart Courier Recommendation",
      description: "Automatically assigns the best courier based on cost, speed & reliability",
      iconName: "smart-courier",
    },
    {
      id: 14,
      title: "One-click Order Imports",
      description: "Instantly sync orders from Shopify, WooCommerce, and more",
      iconName: "order-imports",
    },
    {
      id: 15,
      title: "Nationwide Reach",
      description: "Serve customers across India and beyond with 25,000+ pincodes covered",
      iconName: "nationwide",
    },
    {
      id: 16,
      title: "Advanced NDR Handling",
      description: "Automate realtemps, escalations & reduce returns with proactive workflows",
      iconName: "ndr-handling",
    },
    { id: 17, title: "Delivery feedback capture", iconName: "feedback" },
    { id: 18, title: "Return request portal", iconName: "return-request" },
    { id: 19, title: "Real time delivery update", iconName: "realtime-update" },
    { id: 20, title: "Estimated delivery time", iconName: "delivery-time" },
    { id: 21, title: "WhatsApp webhook relay", iconName: "whatsapp" },
    { id: 22, title: "SMS/Email notifications", iconName: "notifications" },
    { id: 23, title: "API access", iconName: "api-access" },
    { id: 24, title: "Webhook triggers", iconName: "webhook-triggers" },
    { id: 25, title: "NDR auto-escalation logic", iconName: "ndr-escalation" },
    { id: 26, title: "Delayed shipment rules", iconName: "delayed-shipment" },
    { id: 27, title: "Exportable CSV reports", iconName: "csv-reports" },
    { id: 28, title: "Refund trigger rules", iconName: "refund-trigger" },
  ]

  // Helper function to determine fade level of a column
  const getColumnFadeClass = (id: number) => {
    // Outermost columns (most faded)
    const outermostIds = [1, 2, 3, 4, 25, 26, 27, 28];
    // Second level columns (slightly faded)
    const secondLevelIds = [5, 6, 7, 8, 21, 22, 23, 24];
    
    if (outermostIds.includes(id)) return "opacity-60"; // Most faded
    if (secondLevelIds.includes(id)) return "opacity-80"; // Slightly faded
    return ""; // No fading for central columns
  }

  return (
    <div className="relative overflow-hidden max-w-[1400px] mx-auto">
      {/* Soft radial gradient for background effect */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-60 pointer-events-none z-0"
      />

      {/* Radial blur for corner cards - positioned above the grid with a higher z-index */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Top-left corner blur */}
        <div className="absolute top-0 left-0 w-1/4 h-1/4 bg-white opacity-20 blur-md rounded-[12px]" />
        
        {/* Top-right corner blur */}
        <div className="absolute top-0 right-0 w-1/4 h-1/4 bg-white opacity-20 blur-md rounded-[12px]" />
        
        {/* Bottom-left corner blur */}
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-white opacity-20 blur-md rounded-[12px]" />
        
        {/* Bottom-right corner blur */}
        <div className="absolute bottom-0 right-0 w-1/4 h-1/4 bg-white opacity-20 blur-md rounded-[12px]" />
      </div>

      {/* Fixed grid layout with proper column and row definitions */}
      <div 
        className="relative z-10 grid gap-4 md:gap-6"
        style={{
          gridTemplateColumns: 'repeat(10, minmax(0, 1fr))',
          gridTemplateRows: 'repeat(4, auto)',
          gridAutoFlow: 'dense'
        }}
      >
        {features.map((feature) => {
          // Get the appropriate fade class based on column position
          const fadeClass = getColumnFadeClass(feature.id);
          
          // Regular small feature cards
          if (![13, 14, 15, 16].includes(feature.id)) {
            return (
              <div
                key={feature.id}
                className={`${fadeClass} transition-opacity duration-300`}
                style={{
                  gridColumn: (() => {
                    if (feature.id === 1 || feature.id === 2 || feature.id === 3 || feature.id === 4) return '1';
                    if (feature.id === 5 || feature.id === 6 || feature.id === 7 || feature.id === 8) return '2';
                    if (feature.id === 9 || feature.id === 10 || feature.id === 11 || feature.id === 12) return '3';
                    if (feature.id === 17 || feature.id === 18 || feature.id === 19 || feature.id === 20) return '8';
                    if (feature.id === 21 || feature.id === 22 || feature.id === 23 || feature.id === 24) return '9';
                    if (feature.id === 25 || feature.id === 26 || feature.id === 27 || feature.id === 28) return '10';
                    return 'auto';
                  })(),
                  gridRow: (() => {
                    if (feature.id === 1 || feature.id === 5 || feature.id === 9 || feature.id === 17 
                      || feature.id === 21 || feature.id === 25) return '1';
                    if (feature.id === 2 || feature.id === 6 || feature.id === 10 || feature.id === 18 
                      || feature.id === 22 || feature.id === 26) return '2';
                    if (feature.id === 3 || feature.id === 7 || feature.id === 11 || feature.id === 19 
                      || feature.id === 23 || feature.id === 27) return '3';
                    if (feature.id === 4 || feature.id === 8 || feature.id === 12 || feature.id === 20 
                      || feature.id === 24 || feature.id === 28) return '4';
                    return 'auto';
                  })()
                }}
              >
                <FeatureCard title={feature.title} iconName={feature.iconName} />
              </div>
            )
          }

          // Highlighted feature cards (larger ones)
          return (
            <div
              key={feature.id}
              style={{
                gridColumn: (() => {
                  if (feature.id === 13) return '4 / span 2';
                  if (feature.id === 14) return '4 / span 2';
                  if (feature.id === 15) return '6 / span 2';
                  if (feature.id === 16) return '6 / span 2';
                  return 'auto';
                })(),
                gridRow: (() => {
                  if (feature.id === 13) return '1 / span 2';
                  if (feature.id === 14) return '3 / span 2';
                  if (feature.id === 15) return '1 / span 2';
                  if (feature.id === 16) return '3 / span 2';
                  return 'auto';
                })()
              }}
            >
              <HighlightedFeature 
                title={feature.title} 
                description={feature.description || ""} 
                iconName={feature.iconName} 
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}