import { Link, NavLink } from "react-router-dom";

import {
  FiTwitter,
  FiGithub,
  FiHeart,
  FiLogIn,
  FiSmile,
  FiX,
} from "react-icons/fi";

export default function Sidebar({ isSidebarPopup, toggleSidebar }) {
  const menus = [
    { title: "Deals", icon: FiSmile, path: "/", gap: true },
    { title: "Saved", icon: FiHeart, path: "/saved" },
    { title: "Login", icon: FiLogIn, path: "/login" },
  ];
  return (
    <header className="fixed z-[999] flex h-screen w-48 flex-col justify-between  border-r bg-white sm:relative">
      <div className="relative">
        <button
          onClick={toggleSidebar}
          className="absolute -right-9 top-3 z-50 text-2xl text-white sm:hidden"
        >
          <FiX />
        </button>
        <Link
          to="/"
          className="m-6 flex items-center  justify-center text-2xl font-bold tracking-wider"
        >
          Ikea Deals
        </Link>

        <ul className="pl-8 font-bold">
          {menus.map((menu, index) => (
            <li key={index} className={`${menu.gap ? "mt-10" : "mt-3"}`}>
              <NavLink
                to={menu.path}
                className={({ isActive }) => {
                  const baseClasses =
                    "flex items-center justify-start gap-4 border-r-4 tracking-wider hover:text-red-500";
                  const activeClasses = isActive
                    ? "border-red-500 text-red-500"
                    : "border-white";
                  return `${baseClasses} ${activeClasses}`;
                }}
              >
                {<menu.icon strokeWidth={3} />}
                {menu.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-6 flex flex-col gap-2 font-semibold">
        <Link
          to="https://twitter.com/Yu08516687"
          target="_blank"
          className="flex items-center justify-start gap-3  pl-8 hover:text-red-500"
        >
          <FiTwitter />
          Twitter
        </Link>
        <Link
          to="https://github.com/QiyanYu/ikea-discount-tracker"
          target="_blank"
          className="flex items-center justify-start gap-3  pl-8 hover:text-red-500"
        >
          <FiGithub />
          GitHub
        </Link>
        <Link
          to="https://ko-fi.com/P5P6LXDLN"
          target="_blank"
          className="pl-6 hover:opacity-70"
        >
          <img
            className="h-8"
            src="https://storage.ko-fi.com/cdn/kofi3.png?v=3"
            alt="Buy Me a Coffee at ko-fi.com"
          />
        </Link>
      </div>
    </header>
  );
}
