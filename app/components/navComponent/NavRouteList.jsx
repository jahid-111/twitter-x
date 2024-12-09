import { navItems } from "@/data/navigationData";
import Link from "next/link";
import React from "react";
import XlogoSvg from "../logo/XlogoSvg";

const NavRouteList = () => {
  return (
    <ul className="flex sm:flex-col justify-between sm:items-center gap-2 ">
      <div className="hidden sm:block">
        <div className="xl:w-[13rem] h-auto rounded-full flex gap-2 items-center">
          <Link href="/" className="hover:bg-gray-900  p-2 rounded-full">
            <XlogoSvg xClass="w-10 h-10 " />
          </Link>
        </div>
      </div>

      {navItems.map((item, index) => (
        <li key={index}>
          <Link
            prefetch={false}
            aria-label="Home"
            href={item.label === "Profile" ? `profile` : item.href}
            className=" hover:bg-gray-900 xl:w-[13rem] rounded-full flex gap-2 items-center "
          >
            <item.icon className="h-11 w-11 p-2 rounded-full " />
            <span className="hidden xl:block text-xl">{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavRouteList;
