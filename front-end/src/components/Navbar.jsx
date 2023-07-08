import { HiMenu } from "react-icons/hi";
export default function Navbar({ toggleSideBar }) {
  return (
    <div className="sticky top-0 flex h-16 justify-between border-b bg-gray-100  bg-opacity-50 backdrop-blur-sm backdrop-filter ">
      <button
        onClick={toggleSideBar}
        className=" my-4 flex h-8 w-20 items-center justify-center border-r text-xl sm:hidden"
      >
        <HiMenu />
      </button>
      <div className="flex-1">abc abc</div>
    </div>
  );
}
