"use client";

import { FC, useState, useEffect } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Icon from "@/components/atoms/icon";

type TMenu = { name: string; href: string };

export type TDropdownMenu = "-" | TMenu;

interface IDropdown {
  label?: string;
  dropdownMenu: TDropdownMenu[];
  className?: string;
  transparent?: boolean;
}

const mapDropdownMenu = (data: TDropdownMenu[]) => {
  let current = 0;
  const newMenu: TDropdownMenu[][] = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "-") {
      if (i > 0) current++;
      newMenu[current] = [];
    } else {
      newMenu[current].push(data[i]);
    }
  }

  return newMenu;
};

const Dropdown: FC<IDropdown> = ({
  label,
  dropdownMenu,
  transparent,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const data = mapDropdownMenu(dropdownMenu);

  return (
    <Menu as="div" className="relative inline-block">
      {({ open }) => {
        //eslint-disable-next-line
        useEffect(() => {
          setIsOpen(open);
        }, [open]);

        return (
          <>
            <MenuButton className="cursor-pointer focus:outline-none hover:opacity-80 active:opacity-50">
              {label ? (
                <div
                  className={`${className} flex flex-row gap-[8px] items-center ${
                    !transparent
                      ? "bg-white px-[24px] py-[6px] rounded-[8px]"
                      : ""
                  }`}
                >
                  <p className={transparent ? "text-white" : "text-black"}>
                    {label}
                  </p>
                  <Icon
                    name="CaretIcon"
                    color={transparent ? "white" : "black"}
                    className={isOpen ? "animate-rotate" : ""}
                  />
                </div>
              ) : (
                <div className="hover:opacity-80 active:opacity-50">
                  <Icon name={!isOpen ? "BurgerIcon" : "CloseIcon"} />
                </div>
              )}
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 desktop:left-0 z-10 mt-2 w-[240px] origin-top-right divide-y divide-border rounded-[8px] bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              modal={false}
            >
              {data.map((item: TDropdownMenu[], index: number) => (
                <div className="py-1" key={index}>
                  {item
                    .filter((data) => data !== "-")
                    .map((i: TMenu) => (
                      <MenuItem key={i.name}>
                        <a
                          href={i.href ?? ""}
                          target="_blank"
                          className={`text-gunpowder block px-[16px] py-[10px] text-sm tracking-normal ${
                            !i.href
                              ? "font-extrabold leading-[150%] cursor-default pointer-events-none"
                              : "leading-[20px] data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                          }`}
                        >
                          {i.name}
                        </a>
                      </MenuItem>
                    ))}
                </div>
              ))}
            </MenuItems>
          </>
        );
      }}
    </Menu>
  );
};

export default Dropdown;
