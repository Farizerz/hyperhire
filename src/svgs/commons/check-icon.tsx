import { FC } from "react";
import type { IIcon } from "@/types/icon";

const CheckIcon: FC<IIcon> = ({ width, height, color, className }) => {
  return (
    <svg
      width={width ?? "14"}
      height={height ?? "14"}
      viewBox="0 0 14 14"
      fill="none"
      style={{
        color: color,
      }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6666 3.5L5.24992 9.91667L2.33325 7"
        stroke={color ?? "#2C599B"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CheckIcon;
