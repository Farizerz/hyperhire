import { FC, ReactNode } from "react";

interface IInfoCard {
  title: string;
  subtitle: string;
  details: string | ReactNode;
}

const InfoCard: FC<IInfoCard> = ({ title, subtitle, details }) => {
  return (
    <div className="flex flex-col gap-[8px]">
      <h4 className="text-text mb-[2px]">{title}</h4>
      <p className="text-[0.813rem] text-gray">{subtitle}</p>
      <p className="text-[0.813rem] text-subtext">{details}</p>
    </div>
  );
};

export default InfoCard;
