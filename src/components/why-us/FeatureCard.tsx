import type React from "react"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  content: React.ReactNode
}

export default function FeatureCard({ title, description, icon, content }: FeatureCardProps) {
  return (
    <div className="rounded-[16px] w-[500px] transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <div className="flex flex-col h-full ">
        <div className="flex-1 mb-2 rounded-t-[16px]">
          {content}
        </div>
        <div className="bg-[#F1F5F9] p-4 rounded-b-[16px] relative w-[500px] h-[144px]">
          <div className="absolute top-4 right-4">
            {icon}
          </div>
          <h3 className="font-Geist font-[126] text-[28px] text-[#334155] mb-4 mt-[4px]">{title}</h3>
          <p className="font-Satoshi font-[500] text-[16px] text-[#334155] text-muted-foreground pr-8">{description}</p>
        </div>
      </div>
    </div>
  )
}