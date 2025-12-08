"use client";

import { FC } from "react";
import Button from "@/components/atoms/button";
import Icon from "@/components/atoms/icon";
import type { IconName } from "@/types/icon";

interface IFooterCard {
  icon: IconName;
  label?: string;
  url?: string;
}

const FooterCard: FC<IFooterCard> = ({ icon, label, url }) => {
  return (
    <div className="2xl:w-[187px] flex flex-col gap-[12px] justify-between p-[16px] bg-white rounded-[12px]">
      <div className="w-[40px] h-[40px] bg-porcelain rounded-[8px] flex items-center justify-center">
        <Icon name={icon} />
      </div>
      <p className="text-sm text-text">{label}</p>
      <Button
        transparent
        onClick={url ? () => window.open(url, "_blank") : () => {}}
        label={
          <div className="flex flex-row gap-[4px]">
            <p className="text-sm text-subtext">바로가기</p>
            <Icon name="ArrowSquareIcon" />
          </div>
        }
      ></Button>
    </div>
  );
};

export default FooterCard;
