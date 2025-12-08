"use client";
import { FC } from "react";
import Image from "next/image";
import { HyperhireWhiteIcon } from "@/assets";
import Button from "@/components/atoms/button";
import Dropdown from "@/components/atoms/dropdown";
import type { TDropdownMenu } from "@/components/atoms/dropdown";

const dropdownData: TDropdownMenu[] = [
  "-",
  { name: "채용", href: "" },
  { name: "해외 개발자 원격 채용", href: "https://farizrr.vercel.app" },
  {
    name: "외국인 원격 채용 (비개발 직군)",
    href: "https://farizrr.vercel.app",
  },
  "-",
  { name: "한국어 가능 외국인 채용", href: "https://farizrr.vercel.app" },
];

const Navbar: FC = () => {
  return (
    <div className="py-[20px] w-full flex flex-row items-center justify-between">
      <Image src={HyperhireWhiteIcon} alt="Hyperhire Logo" />
      <div className="desktop:hidden">
        <Dropdown dropdownMenu={dropdownData} transparent />
      </div>
      <div className="flex flex-row gap-[60px] hidden desktop:inline-flex">
        <Dropdown label="채용" dropdownMenu={dropdownData} transparent />
        <p>해외 개발자 활용 서비스</p>
      </div>

      <Button label="문의하기" className="hidden desktop:inline" />
    </div>
  );
};

export default Navbar;
