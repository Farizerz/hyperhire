import { FC, ReactNode, ButtonHTMLAttributes } from "react";

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string | ReactNode;
  className?: string;
  transparent?: boolean;
}

const Button: FC<IButton> = ({ label, className, transparent, ...rest }) => {
  return (
    <button
      className={`cursor-pointer font-[900] focus:outline-none active:opacity-80 ${className} ${
        transparent
          ? ""
          : "bg-white py-[6px] px-[24px] rounded-[8px] text-blueberry"
      }`}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
