import { FC, Activity } from "react";
import Link from "next/link";
import Checkbox from "@/components/atoms/checkbox";
import Container from "@/components/atoms/container";
import Slider from "@/components/atoms/slider";
import Tooltip from "@/components/atoms/tooltip";
import Carousel from "@/components/molecules/carousel";
import Navbar from "@/components/molecules/navbar";
import Services from "./components/services";
import SliderCard from "./components/slider-card";
import type { ICarouselCard } from "@/types/carousel";
import type { ISliderCard } from "@/types/slider";

interface IHomepage {
  rawCarouselData: [];
  rawSliderData: [];
}

const HomepageContent: FC<IHomepage> = ({ rawCarouselData, rawSliderData }) => {
  const CarouselData = rawCarouselData as ICarouselCard[];
  const SliderData = rawSliderData as ISliderCard[];

  return (
    <div className="w-full h-full flex justify-center bg-gradient relative">
      <div className="absolute w-full h-full bg-[url('/images/background.webp')] inset-0 bg-bottom desktop:bg-center object-cover opacity-80 mix-blend-color-burn"></div>
      <Container className="relative z-[10] flex flex-col">
        <Navbar />
        <div className="w-full h-full flex flex-col desktop:flex-row gap-[14px] pt-[36px] pb-[60px] desktop:pt-[100px]">
          <section className="w-full h-full flex flex-col gap-[16px]">
            <Tooltip
              label="풀타임, 파트타임"
              color="text-white desktop:text-aqua"
              bgColor="bg-skyblue desktop:bg-white"
              arrowPosition="left"
              className="opacity-0 animation-delay-500 animate-[fadein_0.3s_ease-in-out_forwards]"
            />
            <h1 className="animate-fadeinup">
              최고의 실력을 가진
              <br />
              외국인 인재를 찾고 계신가요?
            </h1>
            <h2 className="animate-fadeinup">
              법률 및 인사관리 부담없이 <br className="hidden desktop:block" />{" "}
              1주일 이내에 원격으로 채용해보세요.
            </h2>
            <Link
              className="mt-[8px] mb-[44px] w-fit flex-none animate-fadeinup hidden desktop:inline-flex"
              href={"https://farizrr.vercel.app"}
              target="_blank"
            >
              <p className="desktop:text-[1.125rem] underline hover:text-yellow">
                개발자가 필요하신가요?
              </p>
            </Link>

            <div className="flex flex-row gap-[48px] hidden desktop:inline-flex animate-fadein">
              <Services
                title="평균 월 120만원<"
                description="임금을 해당 국가를 기준으로 계산합니다."
              />
              <Services
                title="최대 3회 인력교체"
                description="막상 채용해보니 맞지 않아도 걱정하지 마세요."
              />
              <Services
                title="평균 3일, 최대 10일"
                description="급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다."
              />
            </div>
          </section>
          <section className="w-full min-h-[378px] desktop:h-full relative animate-fadein">
            <Activity mode={CarouselData ? "visible" : "hidden"}>
              <div className="w-full flex justify-center">
                <Tooltip
                  label="월 100만원"
                  icon="CurrencyIcon"
                  color="text-topaz"
                  bgColor="bg-nephritis"
                  arrowPosition="center"
                  className="desktop:-top-[34px] desktop:mb-0 mb-[24px] px-[16px] py-[8px]"
                />
              </div>
              <Carousel data={CarouselData} />
            </Activity>
          </section>

          {/* mobile-only section */}
          <section className="flex flex-col gap-[16px] mt-[16px] desktop:hidden">
            <div className="grid grid-cols-2 w-[244px] sm:w-full sm:flex sm:flex-row gap-y-[8px] sm:gap-[12px]">
              <Checkbox label="한국어 능력" checked />
              <Checkbox label="업무 수행 능력" checked />
              <Checkbox label="겸업 여부" checked />
              <Checkbox label="평판 조회" checked />
            </div>
            <Link
              className="mt-[8px] w-fit flex-none animate-fadeinup"
              href={"https://farizrr.vercel.app"}
              target="_blank"
            >
              <p className="desktop:text-[1.125rem] underline text-yellow">
                개발자가 필요하신가요?
              </p>
            </Link>
          </section>
        </div>

        {/* desktop-only section */}
        <div className="animate-fadein w-full h-full flex mb-[100px] hidden desktop:inline-flex">
          <Activity mode={SliderData ? "visible" : "hidden"}>
            {SliderData && (
              <Slider>
                {SliderData.map((item: ISliderCard, index: number) => (
                  <SliderCard key={index} icon={item.icon} label={item.label} />
                ))}
              </Slider>
            )}
          </Activity>
        </div>
      </Container>
    </div>
  );
};

export default HomepageContent;
