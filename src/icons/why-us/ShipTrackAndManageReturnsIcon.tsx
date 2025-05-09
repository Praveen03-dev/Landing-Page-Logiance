interface ShipTrackAndManageReturnsIconProps {
  width?: number | string;
  height?: number | string;
  fill?: string;
  weight?: number | string;
}

export const ShipTrackAndManageReturnsIcon = ({
  width = 16,
  height = 16,
  fill = "#334155",
  weight = 2,
}: ShipTrackAndManageReturnsIconProps) => {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.2"
        d="M12.375 14.625V28.125H4.5V14.625H12.375Z"
        fill="#4653DC"
      />
      <path
        d="M31.5 6.75H4.5C4.20163 6.75 3.91548 6.86853 3.7045 7.07951C3.49353 7.29048 3.375 7.57663 3.375 7.875V27C3.375 27.5967 3.61205 28.169 4.03401 28.591C4.45597 29.0129 5.02826 29.25 5.625 29.25H30.375C30.9717 29.25 31.544 29.0129 31.966 28.591C32.3879 28.169 32.625 27.5967 32.625 27V7.875C32.625 7.57663 32.5065 7.29048 32.2955 7.07951C32.0845 6.86853 31.7984 6.75 31.5 6.75ZM5.625 15.75H11.25V20.25H5.625V15.75ZM13.5 15.75H30.375V20.25H13.5V15.75ZM30.375 9V13.5H5.625V9H30.375ZM5.625 22.5H11.25V27H5.625V22.5ZM30.375 27H13.5V22.5H30.375V27Z"
        fill="#4653DC"
      />
    </svg>
  );
};
