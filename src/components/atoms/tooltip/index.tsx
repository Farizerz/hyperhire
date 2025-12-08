import { FC, Activity } from "react";
import type { IconName } from "@/types/icon";
import Icon from "../icon";

interface ITriangle {
  color?: string;
  className?: string;
}

interface ITooltip {
  label?: string;
  icon?: IconName;
  color?: string;
  bgColor?: string;
  arrowPosition?: "left" | "center" | "right";
  className?: string;
}

const Triangle: FC<ITriangle> = ({ color, className }) => {
  return (
    <div
      className={`${className} w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px]`}
      style={{ color: `var(--${color})` }}
    />
  );
};

const Tooltip: FC<ITooltip> = ({
  label,
  icon,
  color,
  bgColor,
  arrowPosition,
  className,
}) => {
  const arrowColor = bgColor?.replaceAll("bg-", "");
  const responsiveArrowColor = bgColor?.includes(":");
  const arrowColorDesktop = arrowColor
    ?.split(" ")
    .filter((c) => {
      return c.startsWith("desktop:");
    })
    .join(" ")
    .replace("desktop:", "");
  const arrowColorMobile = arrowColor
    ?.split(" ")
    .filter((c) => {
      return !c.startsWith("desktop:");
    })
    .join(" ");

  const position =
    arrowPosition === "left"
      ? "justify-start"
      : arrowPosition === "right"
      ? "justify-end"
      : "justify-center";

  return (
    <div
      className={`${className} animate-fadein flex-none w-fit ${bgColor} mb-[10px] py-[6px] px-[12px] rounded-[8px] relative`}
    >
      <div className="flex flex-row gap-[10px] items-center">
        <Activity mode={icon ? "visible" : "hidden"}>
          <Icon name={icon ?? "CloseIcon"} />
        </Activity>
        <p className={`text-[1.125rem] ${color}`}>{label}</p>
      </div>

      <div
        className={`absolute w-full left-0 top-[95%] px-[12px] flex ${position}`}
      >
        {responsiveArrowColor ? (
          <>
            <Triangle color={arrowColorMobile} className="desktop:hidden" />
            <Triangle
              color={arrowColorDesktop}
              className="hidden desktop:inline-flex"
            />
          </>
        ) : (
          <Triangle color={arrowColor} />
        )}
      </div>
    </div>
  );
};

export default Tooltip;
