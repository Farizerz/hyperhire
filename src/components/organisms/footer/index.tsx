import { FC } from "react";
import Image from "next/image";
import { HyperhireIcon } from "@/assets";
import Container from "@/components/atoms/container";
import InfoCard from "./components/info-card";
import FooterCard from "./components/footer-card";

const Footer: FC = () => {
  return (
    <footer className="w-full h-full flex justify-center bg-lightgray">
      <Container className="py-[60px] desktop:py-[80px] flex flex-col gap-[46px] desktop:gap-[46px]">
        <section className="flex flex-col desktop:flex-row gap-[18px] desktop:gap-[calc(98px+16px)]">
          <div className="flex flex-col gap-[16px] desktop:w-[307px]">
            <Image src={HyperhireIcon} alt="Hyperhire Footer Logo" />
            <p className="text-text text-sm my-[2px] w-[247px]">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </p>
            <p className="text-subtext flex flex-col gap-[8px] text-[0.813rem]">
              <span>010-0000-0000</span>
              <span>aaaaa@naver.com</span>
            </p>
          </div>
          <div className="w-full grid grid-cols-2 desktop:grid-cols-4 gap-[8px] desktop:gap-[16px] desktop:px-[16px] desktop:pb-[15px]">
            <FooterCard icon="CodeIcon" label="해외 개발자 원격 채용" />
            <FooterCard icon="AvatarIcon" label="외국인 원격 채용 (비개발)" />
            <FooterCard icon="KorIcon" label="한국어 가능 외국인 채용" />
            <FooterCard icon="GearIcon" label="해외 개발자 활용 서비스" />
          </div>
        </section>

        <section className="flex flex-col desktop:flex-row gap-[18px] desktop:gap-[calc(60px+16px)]">
          <div className="w-full desktop:w-[307px] flex flex-row gap-[11px]">
            <InfoCard
              title="상호명"
              subtitle="하이퍼하이어"
              details="Hyperhire India Private Limited"
            />
            <InfoCard title="대표 CEO" subtitle="김주현" details="Juhyun Kim" />
          </div>
          <div className="flex flex-col desktop:flex-row gap-[36px] desktop:gap-[42px]">
            <InfoCard
              title="사업자등록번호 CIN"
              subtitle="427-86-01187"
              details="U74110DL2016PTC290812"
            />
            <InfoCard
              title="주소 ADDRESS"
              subtitle="서울특별시 강남대로 479, 지하 1층 238호"
              details={
                <>
                  {" "}
                  D-138, Street number 11, Jagjeet Nagar, North East Delhi, New
                  Delhi,
                  <br />
                  110053 India
                </>
              }
            />
          </div>
        </section>

        <section className="mt-[2px]">
          <p className="text-[0.813rem] text-subtext">ⓒ 2023 Hyperhire</p>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
