"use client";

import { FC, useState, Children, CSSProperties, ReactNode } from "react";
import Button from "@/components/atoms/button";
import Icon from "@/components/atoms/icon";
import CarouselCard from "./components/carousel-card";
import type { ICarouselData } from "@/types/carousel";
import "./styles.scss";

const CarouselContainer = ({ children }: { children: ReactNode }) => {
  const [active, setActive] = useState(1);
  const count = Children.count(children);

  return (
    <div className="carousel w-[234px] h-[378px] desktop:w-[292px] desktop:h-[408px] flex justify-center">
      {active > 0 && (
        <Button
          className="absolute top-[38%] desktop:top-[48%] -left-16 desktop:-left-42 z-[10] scale-75 desktop:scale-100"
          transparent
          onClick={() => setActive((i) => i - 1)}
          label={
            <Icon
              name="CaretIcon"
              width={32}
              height={32}
              className="rotate-[90deg]"
            />
          }
        />
      )}
      {Children.map(children, (child, i) => (
        <div
          className="card-container w-full h-[311px] desktop:h-[408px]"
          style={
            {
              "--active": 1,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              pointerEvents: active === i ? "auto" : "none",
              opacity: "1",
              display: "block",
            } as CSSProperties
          }
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <Button
          className="absolute top-[38%] desktop:top-[48%] -right-16 desktop:-right-42 scale-75 desktop:scale-100"
          transparent
          onClick={() => setActive((i) => i + 1)}
          label={
            <Icon
              name="CaretIcon"
              width={32}
              height={32}
              className="rotate-[-90deg]"
            />
          }
        />
      )}
    </div>
  );
};

const Carousel: FC<ICarouselData> = ({ data }) => {
  return (
    <div className="absolute w-full h-full flex items-center justify-center">
      <CarouselContainer>
        {data.map((item, index) => (
          <CarouselCard
            key={index}
            name={item.name}
            picture={item.picture}
            flag={item.flag}
            experience={item.experience}
            skills={item.skills}
          />
        ))}
      </CarouselContainer>
    </div>
  );
};

export default Carousel;
