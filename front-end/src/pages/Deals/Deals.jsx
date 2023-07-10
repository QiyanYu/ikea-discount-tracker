import { useSearchParams } from "react-router-dom";
import { deals } from "../../../data/data.json";
import DealCard from "./DealCard";
import { useState } from "react";

export default function Deals() {
  const categories = ["All", ...new Set(deals.map((d) => d.category))];

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const category = searchParams.get("category") || "All";

  // const [showDropdown, setShowDropdown] = useState(false);

  const filteredDeals =
    category === "All"
      ? deals
      : deals.filter((van) => van.category === category);

  const displayedDeals = filteredDeals.slice(0, page * 25);

  function loadMore() {
    setSearchParams((prevParams) => {
      prevParams.set("page", parseInt(page) + 1);
      prevParams.set("category", category);
      return prevParams;
    });
  }

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value == null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      prevParams.set("page", 1);
      return prevParams;
    });
  }

  return (
    <>
      {/* <div>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={category === cat ? "btn-primary" : "btn-outline-primary"}
          >
            {cat}
          </button>
        ))}
      </div> */}
      <div className="flex max-w-md flex-wrap space-x-2 overflow-x-auto pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleFilterChange("category", cat)}
            className={`bg-${
              category === cat ? "blue" : "gray"
            }-200 rounded-md px-3 py-1 text-sm font-medium`}
          >
            {cat}
          </button>
        ))}
        {/* <button onClick={() => setShowDropdown(true)}>+ More</button> */}
      </div>

      {/* {showDropdown && (
        <div className="absolute mt-2 w-64 divide-y divide-gray-100 rounded bg-white shadow-md">
          {categories.slice(10).map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setShowDropdown(false);
                setCategory(cat);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      )} */}
      <div className=" grid grid-cols-1 gap-4 bg-gray-100 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {displayedDeals.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
      {page < Math.ceil(filteredDeals.length / 25) && (
        <button
          className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 "
          onClick={loadMore}
        >
          Load More
        </button>
      )}
    </>
  );
}
