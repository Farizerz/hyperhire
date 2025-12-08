import { FC } from "react";

interface IServices {
  title: string;
  description: string;
}

const Services: FC<IServices> = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-[8px] w-[161px]">
      <span className="w-[129px] h-[1px] bg-white" />
      <h3>{title}</h3>
      <p className="opacity-80">{description}</p>
    </div>
  );
};

export default Services;
