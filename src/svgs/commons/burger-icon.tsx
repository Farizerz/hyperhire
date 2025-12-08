import { FC } from "react";
import type { IIcon } from "@/types/icon";

const BurgerIcon: FC<IIcon> = ({ width, height, color }) => {
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
        d="M4 18L20 18"
        stroke={color ?? "white"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 12L20 12"
        stroke={color ?? "white"}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 6L20 6"
        stroke={color ?? "white"}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default BurgerIcon;
