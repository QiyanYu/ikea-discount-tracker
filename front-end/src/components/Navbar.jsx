import { HiMenu } from "react-icons/hi";
import { useLocation } from "react-router-dom";
export default function Navbar({ toggleSideBar }) {
  const location = useLocation();

  // Extract the pathname from the location
  const currentPath = location.pathname;

  // Define a function to get the active NavLink name
  const getActiveNavLink = (path) => {
    // Map the NavLink paths to their respective names
    const navLinkNames = {
      "/": "Deals",
      "/saved": "Saved",
      "/login": "Login",
    };

    // Return the name of the active NavLink based on the current path
    return navLinkNames[path] || "Not Found";
  };

  // Get the name of the active NavLink
  const activeNavLink = getActiveNavLink(currentPath);

  return (
    <div className="sticky top-0 z-[200] flex h-20 justify-between border-b bg-gray-100 bg-opacity-50 backdrop-blur-sm backdrop-filter ">
      <button
        onClick={toggleSideBar}
        className=" my-4 flex h-8 w-20 items-center justify-center border-r text-xl sm:hidden"
      >
        <HiMenu />
      </button>
      <div className="flex flex-1 items-center px-6 text-2xl font-bold">
        {activeNavLink}
      </div>
    </div>
  );
}
