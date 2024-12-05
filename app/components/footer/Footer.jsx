import { footerItems } from "@/data/navigationData";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center items-center w-full">
        <div className="w-full">
          <ul className="flex flex-wrap justify-center items-center text-justify">
            {footerItems.map((item, index) => (
              <li
                key={index}
                className="text-gray-600 hover:text-gray-700 px-1"
              >
                <Link href="/"> | {item}</Link>
              </li>
            ))}
          </ul>
          <p className="text-center my-1 text-green-500 ">
            <Link
              href="https://github.com/jahid-111"
              className="hover:text-green-400 "
            >
              Developer : Mohd. Jahidul Islam
            </Link>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
