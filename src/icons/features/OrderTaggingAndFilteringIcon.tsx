import { useState } from "react";

export const OrderTaggingAndFilteringIcon = ({ width = 28, height = 28, isHovered = false }) => {

  // Generate unique IDs for gradients to avoid conflicts if icon is used multiple times
  const uniqueId = Math.random().toString(36).substring(2, 9);
  const gradientId1 = `paint0_linear_${uniqueId}`;
  const gradientId2 = `paint1_linear_${uniqueId}`;

  return (
    <div
      style={{ width, height }}
    >
      {isHovered ? (
        // Hover state icon with gradient
        <svg width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" d="M26.25 14L21.2603 21.4856C21.1803 21.6055 21.072 21.7037 20.9449 21.7717C20.8179 21.8396 20.676 21.8751 20.5319 21.875H4.375C4.14294 21.875 3.92038 21.7828 3.75628 21.6187C3.59219 21.4546 3.5 21.2321 3.5 21V7C3.5 6.76794 3.59219 6.54538 3.75628 6.38128C3.92038 6.21719 4.14294 6.125 4.375 6.125H20.5319C20.676 6.12491 20.8179 6.1604 20.9449 6.22833C21.072 6.29625 21.1803 6.39451 21.2603 6.51438L26.25 14Z" fill={`url(#${gradientId1})`}/>
          <path d="M26.9784 13.5144L21.9844 6.02984C21.8254 5.79012 21.6096 5.59346 21.3561 5.45739C21.1027 5.32132 20.8195 5.25007 20.5319 5.25H4.375C3.91087 5.25 3.46575 5.43437 3.13756 5.76256C2.80937 6.09075 2.625 6.53587 2.625 7V21C2.625 21.4641 2.80937 21.9092 3.13756 22.2374C3.46575 22.5656 3.91087 22.75 4.375 22.75H20.5319C20.8193 22.7495 21.1022 22.6781 21.3555 22.5423C21.6089 22.4065 21.8248 22.2104 21.9844 21.9713L26.9752 14.4856C27.0716 14.3422 27.1233 14.1734 27.1239 14.0005C27.1245 13.8276 27.0739 13.6585 26.9784 13.5144ZM20.5319 21H4.375V7H20.5319L25.1978 14L20.5319 21Z" fill={`url(#${gradientId2})`}/>
          <defs>
            <linearGradient id={gradientId1} x1="11.997" y1="6.125" x2="27.4764" y2="9.44409" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2A35A4"/>
              <stop offset="0.5" stopColor="#3E49B8"/>
              <stop offset="1" stopColor="#407FFF"/>
            </linearGradient>
            <linearGradient id={gradientId2} x1="11.7752" y1="5.25" x2="28.4892" y2="8.72338" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2A35A4"/>
              <stop offset="0.5" stopColor="#3E49B8"/>
              <stop offset="1" stopColor="#407FFF"/>
            </linearGradient>
          </defs>
        </svg>
      ) : (
        // Default state icon
        <svg width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.9784 13.5144L21.9844 6.02984C21.8254 5.79012 21.6096 5.59346 21.3561 5.45739C21.1027 5.32132 20.8195 5.25007 20.5319 5.25H4.375C3.91087 5.25 3.46575 5.43437 3.13756 5.76256C2.80937 6.09075 2.625 6.53587 2.625 7V21C2.625 21.4641 2.80937 21.9092 3.13756 22.2374C3.46575 22.5656 3.91087 22.75 4.375 22.75H20.5319C20.8193 22.7495 21.1022 22.6781 21.3555 22.5423C21.6089 22.4065 21.8248 22.2104 21.9844 21.9713L26.9752 14.4856C27.0716 14.3422 27.1233 14.1734 27.1239 14.0005C27.1245 13.8276 27.0739 13.6585 26.9784 13.5144ZM20.5319 21H4.375V7H20.5319L25.1978 14L20.5319 21Z" fill="#64748B"/>
        </svg>
      )}
    </div>
  );
};