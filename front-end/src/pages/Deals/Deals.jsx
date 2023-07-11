import { useSearchParams } from "react-router-dom";
import { deals } from "../../../data/data.json";
import DealCard from "./DealCard";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiChevronDown } from "react-icons/hi2";
import MenuComponent from "../../components/MenuComponent";

export default function Deals() {
  const categories = ["All", ...new Set(deals.map((d) => d.category))];
  const sorting = ["Price: Low to High", "Price: High to Low", "Best Discount"];

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const category = searchParams.get("category") || "All";
  const sort = searchParams.get("sort") || "default";

  const filteredDeals =
    category === "All"
      ? deals
      : deals.filter((van) => van.category === category);

  const sortedDeals =
    sort === "default"
      ? filteredDeals
      : filteredDeals.sort((a, b) => {
          if (sort === "Price: Low to High") {
            return a.currentPrice - b.currentPrice;
          }
          if (sort === "Price: High to Low") {
            return b.currentPrice - a.currentPrice;
          }
          if (sort === "Best Discount") {
            return b.discountPercent - a.discountPercent;
          }
        });

  const displayedDeals = sortedDeals.slice(0, page * 24);

  function loadMore() {
    setSearchParams((prevParams) => {
      prevParams.set("page", parseInt(page) + 1);
      return prevParams;
    });
  }

  function handleChange(key, value) {
    setSearchParams((prevParams) => {
      if (value == null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      prevParams.set("page", 1);
      if (key !== "sort") {
        prevParams.set("sort", "default");
      }
      return prevParams;
    });
  }

  console.log(category);

  return (
    <>
      <div className="mx-6 flex justify-between">
        <div className="flex-1"></div>
        <div className="flex gap-10">
          <div className="inline-block">
            <MenuComponent
              data={categories}
              current={category}
              onClickFunc={handleChange}
              paramsName={"category"}
            />
          </div>
          <div>
            <MenuComponent
              data={sorting}
              current={sort}
              onClickFunc={handleChange}
              paramsName={"sort"}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 bg-gray-100 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {displayedDeals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
      {page < Math.ceil(filteredDeals.length / 24) && (
        <div className="my-4 flex items-center justify-center">
          <button
            className=" rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}
