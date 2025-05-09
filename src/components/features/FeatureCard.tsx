"use client"

import React, { useState } from "react"
import { OneClickLabelGenerationIcon } from "@/icons/features/OneClickLabelGenerationIcon"
import { BulkOrderActionsIcon } from "@/icons/features/BulkOrderActionsIcon"
import { CourierSLABreachAlertsIcon } from "@/icons/features/CourierSLABreachAlertsIcon"
import DeliveryFeedbackCaptureIcon from "@/icons/features/DeliveryFeedbackCaptureIcon"
import { WhatsAppWebhookIcon } from "@/icons/features/WhatsAppWebhookIcon"
import { NDRAutoEscalationLogicIcon } from "@/icons/features/NDRAutoEscalationLogicIcon"
import { PickupSchedulingIcon } from "@/icons/features/PickupSchedulingIcon"
import { OrderTaggingAndFilteringIcon } from "@/icons/features/OrderTaggingAndFilteringIcon"
import { RTOHeatmapVizualizationIcon } from "@/icons/features/RTOHeatmapVizualizationIcon"
import { ReturnRequestPortalIcon } from "@/icons/features/ReturnRequestPortalIcon"
import EmailNotificationIcon from "@/icons/features/EmailNotificationIcon"
import { DelayedShipmentRulesIcon } from "@/icons/features/DelayedShipmentRulesIcon"
import { DeliveryStatusSyncIcon } from "@/icons/features/DeliveryStatusSyncIcon"
import { ZoneWiseDeliveryBreakdownIcon } from "@/icons/features/ZoneWiseDeliveryBreakdownIcon"
import { MultiCourierIntegrationIcon } from "@/icons/features/MultiCourierIntegrationIcon"
import { RealTimeDeliveryUpdateIcon } from "@/icons/features/RealTimeDeliveryUpdateIcon"
import { ExportableCSVReportsIcon } from "@/icons/features/ExportableCSVReportsIcon"
import { DayBasedPerformanceDataIcon } from "@/icons/features/DayBasedPerformanceDataIcon"
import ReattemptSchedulingIcon from "@/icons/features/ReattemptSchedulingIcon"
import { EstimatedDeliveryTimeIcon } from "@/icons/features/EstimatedDeliveryTImeIcon"
import { RefundTriggerRulesIcon } from "@/icons/features/RefundTriggerRulesIcon"
import APIAccessIcon from "@/icons/features/APIAccessIcon"
import ActivityLogsIcon from "@/icons/features/ActivityLogsIcon"
import WebhookTriggersIcon from "@/icons/features/WebhookTriggersIcon"

interface FeatureCardProps {
  title: string
  iconName: string
}

// Map feature names to icon components
const getIconComponent = (iconName: string, isHovered: boolean, size = 28) => {
    switch (iconName) {
      // First row
      case "label-generation":
        return <OneClickLabelGenerationIcon isHovered={isHovered} />
      case "bulk-order":
        return <BulkOrderActionsIcon isHovered={isHovered} />
      case "sla-alerts":
        return <CourierSLABreachAlertsIcon isHovered={isHovered} />
      case "feedback":
        return <DeliveryFeedbackCaptureIcon isHovered={isHovered} />
      case "whatsapp":
        return <WhatsAppWebhookIcon isHovered={isHovered} />
      case "ndr-escalation":
        return <NDRAutoEscalationLogicIcon isHovered={isHovered} />
        
      // Second row
      case "pickup-scheduling":
        return <PickupSchedulingIcon isHovered={isHovered} />
      case "order-tagging":
        return <OrderTaggingAndFilteringIcon isHovered={isHovered} />
      case "heatmap":
        return <RTOHeatmapVizualizationIcon isHovered={isHovered} />
      case "return-request":
        return <ReturnRequestPortalIcon isHovered={isHovered} />
      case "notifications":
        return <EmailNotificationIcon isHovered={isHovered} />
      case "delayed-shipment":
        return <DelayedShipmentRulesIcon isHovered={isHovered} />
        
      // Third row
      case "delivery-status":
        return <DeliveryStatusSyncIcon isHovered={isHovered} />
      case "zone-delivery":
        return <ZoneWiseDeliveryBreakdownIcon isHovered={isHovered} />
      case "multi-courier":
        return <MultiCourierIntegrationIcon isHovered={isHovered} />
      case "realtime-update":
        return <RealTimeDeliveryUpdateIcon isHovered={isHovered} />
      case "api-access":
        return <APIAccessIcon isHovered={isHovered} />
      case "csv-reports":
        return <ExportableCSVReportsIcon isHovered={isHovered} />
        
      // Fourth row
      case "activity-logs":
        return <ActivityLogsIcon isHovered={isHovered} />
      case "performance-data":
        return <DayBasedPerformanceDataIcon isHovered={isHovered} />
      case "reattempt":
        return <ReattemptSchedulingIcon isHovered={isHovered} />
      case "delivery-time":
        return <EstimatedDeliveryTimeIcon isHovered={isHovered} />
      case "webhook-triggers":
        return <WebhookTriggersIcon isHovered={isHovered} />
      case "refund-trigger":
        return <RefundTriggerRulesIcon isHovered={isHovered} />
        
      // Default fallback
      default:
        return <div className="w-6 h-6 bg-gray-200 rounded-full" />
    }
  }

export default function FeatureCard({ title, iconName }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <div 
      className={`bg-[#F8FAFC] rounded-[12px] p-4 w-[118px] h-[118px] relative border border-gray-100 transition-all duration-300 ease-in-out ${isHovered ? 'shadow-lg scale-105 z-10' : 'shadow-sm'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col h-full justify-center items-center">
        <div className="mb-2 transition-transform duration-300 ease-in-out">
          {getIconComponent(iconName, isHovered)}
        </div>
        <p className={`text-sm font-medium text-[#64748B] text-center transition-colors duration-300 ease-in-out ${isHovered ? 'text-blue-600' : 'text-[#64748B]'}`}>
          {title}
        </p>
      </div>
    </div>
  )
}