import { FC } from "react";
import Icon from "@/components/atoms/icon";
import type { ISliderCard } from "@/types/slider";

const SliderCard: FC<ISliderCard> = ({ icon, label }) => {
  return (
    <div className="pr-[10px] height-[88px]">
      <div className="p-[16px] bg-white/[20%] rounded-[12px] flex flex-row items-center gap-[24px]">
        <div className="p-[12px] bg-white/[40%] rounded-[8px]">
          <Icon name={icon} width={32} height={32} color="white" />
        </div>
        <h2 className="w-full leading-[150%]">{label}</h2>
      </div>
    </div>
  );
};

export default SliderCard;
