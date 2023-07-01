import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div className="font-body">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}