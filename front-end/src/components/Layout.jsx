import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

export default function Layout() {
  const [isSidebarPopup, setSidebarPopup] = useState(false);

  const toggleSideBar = () => {
    setSidebarPopup(!isSidebarPopup);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    const handleResize = () => {
      if (mediaQuery.matches) {
        setSidebarPopup(false);
      }
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div className="flex h-screen">
      <div className={`${isSidebarPopup || "hidden"} sm:block`}>
        <Sidebar
          isSidebarPopup={isSidebarPopup}
          toggleSidebar={toggleSideBar}
        />
      </div>
      {isSidebarPopup && (
        <div
          className="z-100 fixed inset-0 bg-black opacity-60 sm:hidden"
          onClick={toggleSideBar}
        ></div>
      )}
      <div className="flex-1 overflow-y-auto">
        <Navbar toggleSideBar={toggleSideBar} />
        <div className="bg-gray-100 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
