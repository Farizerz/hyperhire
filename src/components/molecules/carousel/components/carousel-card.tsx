import { FC } from "react";
import Image from "next/image";
import Pill from "@/components/atoms/pill";
import { ICarouselCard } from "@/types/carousel";
import "../styles.scss";

const CarouselCard: FC<ICarouselCard> = ({
  name,
  picture,
  flag,
  experience,
  skills,
}) => {
  return (
    <div className="card bg-white drop-shadow-xl py-[36px] px-[6px] desktop:px-[26px] gap-[16px] desktop:gap-[36px]">
      <section className="text-center flex flex-col gap-[16px]">
        <div className="flex items-center justify-center">
          <div className="relative w-auto">
            <Image
              src={picture}
              alt={name}
              width={120}
              height={120}
              className="rounded-full w-[64px] h-[64px] desktop:w-[120px] desktop:h-[120px]"
            />
            <Image
              src={flag}
              alt="flag"
              width={25}
              height={18}
              className="absolute bottom-0 desktop:bottom-1 -right-1 desktop:right-[6px]"
            />
          </div>
        </div>

        <span>
          <h2 className="text-black">{name}</h2>
          <p className="text-blueberry text-sm desktop:text-base">
            {experience}
          </p>
        </span>
      </section>
      <section className="flex flex-row flex-wrap gap-y-[4px] gap-x-[1px] items-center justify-center text-center">
        {skills.map((item, index) => (
          <Pill key={index} label={item} />
        ))}
      </section>
    </div>
  );
};

export default CarouselCard;
