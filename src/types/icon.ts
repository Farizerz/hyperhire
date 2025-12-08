import { FC, SVGProps } from "react";
import { IconMap } from "@/svgs/commons";

export interface IIcon {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

export type IconName = keyof typeof IconMap;
export type IconComponent = FC<SVGProps<SVGSVGElement>>;
