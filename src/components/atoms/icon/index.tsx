import { FC } from "react";
import { IconMap } from "@/svgs/commons";
import type { IconName } from "@/types/icon";

interface IIcon {
  name: IconName;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

const Icon: FC<IIcon> = ({ name, width, height, color, className }) => {
  const Icon = IconMap[name];

  return (
    <Icon width={width} height={height} color={color} className={className} />
  );
};

export default Icon;
