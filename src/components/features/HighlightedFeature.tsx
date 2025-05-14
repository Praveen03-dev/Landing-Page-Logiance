"use client"

import React, { useState } from "react"
import { SmartCourierRecommendationIcon } from "@/icons/features/SmartCourierRecommendationIcon"
import { OneClickOrderImportsIcon } from "@/icons/features/OneClickOrderImportsIcon"
import { NationWideReachIcon } from "@/icons/features/NationWideReachIcon"
import { AdvancedNDRHandlingIcon } from "@/icons/features/AdvancedNDRHandlingIcon"

interface HighlightedFeatureProps {
  title: string
  description: string
  iconName: string
}

// Map feature names to icon components
const getIconComponent = (iconName: string, isHovered: boolean) => {
  switch (iconName) {
    case "smart-courier":
      return <SmartCourierRecommendationIcon />
    case "order-imports":
      return <OneClickOrderImportsIcon />
    case "nationwide":
      return <NationWideReachIcon />
    case "ndr-handling":
        return <AdvancedNDRHandlingIcon />
    default:
      return null
  }
}

export default function HighlightedFeature({ title, description, iconName }: HighlightedFeatureProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      className={`bg-[#F8FAFC] rounded-lg p-6 h-[252px] w-[252px] relative border border-gray-100
        transition-all duration-200 ease-in-out 
        ${isHovered ? 'shadow-2xl scale-[1.03] z-10' : 'shadow-xl'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full justify-start items-center">
        <div className="mb-4 transition-transform duration-300 ease-in-out">
          {getIconComponent(iconName, isHovered)}
        </div>
        <div className="text-center">
          <h3 
            className="mb-2 text-xl font-semibold bg-gradient-to-r from-[#2A35A4] via-[#3E49B8] to-[#407FFF] bg-clip-text text-transparent transition-transform duration-200 ease-in-out"
          >
            {title}
          </h3>
          <p className="font-Satoshi font-[500] text-[16px] text-[#334155]">{description}</p>
        </div>
      </div>
    </div>
  )
}