import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi2";

export default function MenuComponent({
  data,
  current,
  onClickFunc,
  paramsName,
}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="group inline-flex justify-center text-base font-medium  text-gray-700 hover:text-gray-900">
          {`${paramsName.charAt(0).toUpperCase() + paramsName.slice(1)}`}
          <HiChevronDown
            className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-max origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {data.map((d) => (
              <Menu.Item key={d}>
                {({ active }) => (
                  <div
                    className={`block px-4 py-2 text-sm ${
                      active ? "bg-gray-100" : ""
                    } ${
                      d == current
                        ? "font-medium text-gray-900"
                        : "text-gray-500"
                    }`}
                    // onClick={onClick}
                    onClick={() => onClickFunc(paramsName, d)}
                  >
                    {d}
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
