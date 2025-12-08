import { FC, ReactNode, HTMLAttributes } from "react";

interface IContainer extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
}

const Container: FC<IContainer> = ({ className, children, ...rest }) => {
  return (
    <div className={`w-full px-[16px] max-w-[1235px] ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Container;
