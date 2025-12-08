import { FC } from "react";
import type { IIcon } from "@/types/icon";

const TriangleIcon: FC<IIcon> = ({ width, height, color, className }) => {
  return (
    <svg
      width={width ?? "12"}
      height={height ?? "10"}
      viewBox="0 0 12 10"
      style={{
        color: color,
      }}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.12991 9.75C5.93746 10.0833 5.45634 10.0833 5.26389 9.75L0.0677346 0.749999C-0.124715 0.416665 0.115848 -1.09987e-06 0.500748 -1.06622e-06L10.8931 -1.57697e-07C11.278 -1.24048e-07 11.5185 0.416667 11.3261 0.75L6.12991 9.75Z"
        fill={color ?? "white"}
      />
    </svg>
  );
};

export default TriangleIcon;
