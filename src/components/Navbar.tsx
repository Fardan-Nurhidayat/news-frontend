"use client";
import { ChangeThemeButton } from "./ChangeThemeButton";
const menus = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

export function Navbar() {
  return (
    <nav className='flex space-x-4 p-4 items-center justify-between bg-white dark:bg-gray-800 shadow-md rounded'>
      <div className='font-bold text-lg'>NewsApp</div>
      <div className='flex space-x-4'>
        {menus.map((menu) => (
          <a
            key={menu.name}
            href={menu.link}
            className='text-gray-800 dark:text-gray-200 hover:underline font-base'
          >
            {menu.name}
          </a>
        ))}
      </div>
      <div className=''>
        <ChangeThemeButton />
      </div>
    </nav>
  );
}