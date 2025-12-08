import { FC } from "react";
import type { IIcon } from "@/types/icon";

const CloseIcon: FC<IIcon> = ({ width, height, color }) => {
  return (
    <svg
      width={width ?? "24px"}
      height={height ?? "24px"}
      viewBox="0 0 24 24"
      style={{
        color: color,
      }}
      className={color}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18"
        stroke={color ?? "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke={color ?? "white"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
