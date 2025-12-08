import { FC } from "react";

interface IPill {
  label: string;
}

const Pill: FC<IPill> = ({ label }) => {
  return (
    <p className="text-sm desktop:text-base text-gray bg-white border-1 border-border2 py-[4px] px-[12px] rounded-[6px]">
      {label}
    </p>
  );
};

export default Pill;
