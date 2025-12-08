"use client";

import { FC, useState, useEffect, ReactNode } from "react";
import Slick from "react-slick";

interface ISlider {
  children: ReactNode;
}

const Slider: FC<ISlider> = ({ children }) => {
  const [variableWidth, setVariableWidth] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVariableWidth(true);
    }, 0);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const settings = {
    centerMode: false,
    infinite: true,
    slidesToScroll: 1,
    speed: 500,
    arrows: false,
    variableWidth,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="w-full h-[88px] animate-fadein">
      <Slick {...settings}>{children}</Slick>
    </div>
  );
};

export default Slider;
