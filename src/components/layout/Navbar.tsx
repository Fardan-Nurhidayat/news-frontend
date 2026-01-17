"use client";
import { ChangeThemeButton } from "../ChangeThemeButton";
import next from "../../../public/next.svg";
import Image from "next/image";
const menus = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

export function Navbar() {
  return (
    <nav className="flex space-x-4 mx-auto py-2 px-6 items-center justify-between max-w-2xl shadow-md rounded-md bg-white dark:bg-gray-800">
      <div className="font-bold text-lg">
        <Image
          alt="Next Js logo"
          src={next}
          width={50}
          height={50}
          className="inline mr-2"
        />
      </div>
      <div className="flex space-x-4">
        {menus.map(menu => (
          <a
            key={menu.name}
            href={menu.link}
            className="text-gray-800 dark:text-gray-200 hover:underline font-base">
            {menu.name}
          </a>
        ))}
      </div>
      <div className="">
        <ChangeThemeButton />
      </div>
    </nav>
  );
}
