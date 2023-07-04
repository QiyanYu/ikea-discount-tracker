import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="font-body flex h-screen">
      <div className="hidden w-48 flex-none sm:block">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
