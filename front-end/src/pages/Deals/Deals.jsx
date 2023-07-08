import { useSearchParams } from "react-router-dom";
import { deals } from "../../../data/data.json";
import DealCard from "./DealCard";
import { useState } from "react";

export default function Deals() {
  const categories = ["All", ...new Set(deals.map((d) => d.category))];

  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") || 1;
  const category = searchParams.get("category") || "All";

  const [showDropdown, setShowDropdown] = useState(false);

  const [products, setProducts] = useState(() => {
    let productsToShow = deals;
    if (category !== "All") {
      productsToShow = deals.filter((p) => p.category === category);
    }
    const start = (page - 1) * 25;
    return productsToShow.slice(start, start + 25);
  });

  function loadMore() {
    setSearchParams({ page: page + 1, category });
    setProducts((prevProducts) => {
      const start = (page - 1) * 25;
      const newProducts = prevProducts.concat(deals.slice(start, start + 25));
      return newProducts;
    });
  }

  function setCategory(newCategory) {
    setSearchParams({ page: 1, category: newCategory });
    setProducts(deals.filter((p) => p.category === newCategory));
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
        {categories.slice(0, 5).map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`bg-${
              category === cat ? "blue" : "gray"
            }-200 rounded-md px-3 py-1 text-sm font-medium`}
          >
            {cat}
          </button>
        ))}
        <button onClick={() => setShowDropdown(true)}>+ More</button>
      </div>

      {showDropdown && (
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
      )}
      <div className=" grid grid-cols-1 gap-4 bg-gray-100 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((deal) => (
          <DealCard key={deal.id} deal={deal} />
        ))}
      </div>
      <button className="flex justify-center" onClick={loadMore}>
        Load More
      </button>
    </>
  );
}
