import { Link, NavLink } from "react-router-dom";

import { FiTwitter, FiGithub, FiHeart, FiLogIn, FiSmile } from "react-icons/fi";

export default function Sidebar() {
  const menus = [
    { title: "Deals", icon: FiSmile, path: "/", gap: true },
    { title: "Saved", icon: FiHeart, path: "/saved" },
    { title: "Login", icon: FiLogIn, path: "/login" },
  ];
  return (
    <header className="flex h-screen flex-col justify-between border-r-2">
      <div>
        <Link
          to="/"
          className="flex items-center justify-center border-b-2 p-6 text-2xl font-bold tracking-wider"
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
