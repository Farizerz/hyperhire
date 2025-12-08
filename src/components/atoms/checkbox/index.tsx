"use client";

import { FC, Activity, useState, InputHTMLAttributes } from "react";
import Icon from "@/components/atoms/icon";

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  checked?: boolean;
  className?: string;
}

const Checkbox: FC<ICheckbox> = ({ label, checked, className, ...rest }) => {
  const [check] = useState(checked);

  return (
    <div className="flex flex-row gap-[12px] -mr-1 sm:m-0">
      <span className="relative flex items-center justify-center">
        <input
          defaultChecked={checked}
          // checked={check}
          type="checkbox"
          className={`${className} w-[20px] h-[20px] bg-chalk text-black rounded-[6px] appearance-none active:opacity-80 cursor-pointer`}
          // onClick={() => setCheck((prev) => !prev)}
          {...rest}
        />
        <Activity mode={check ? "visible" : "hidden"}>
          <Icon
            name="CheckIcon"
            className="absolute z-[2] pointer-events-none"
          />
        </Activity>
      </span>

      <label>{label}</label>
    </div>
  );
};

export default Checkbox;
