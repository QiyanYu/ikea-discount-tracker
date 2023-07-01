import { Link } from "react-router-dom";

export default function DealDetail({ deal }) {
  const {
    name,
    details,
    originalPrice,
    currentPrice,
    discountPercent,
    image,
    link,
  } = deal;

  return (
    <div className="h-80 w-64 overflow-hidden rounded-md bg-white shadow-lg hover:opacity-80">
      <Link to={link} target="_blank">
        <img
          className="h-3/5 w-full overflow-hidden rounded-md object-contain p-1"
          src={image}
          alt={name}
        />
        <div className="flex h-2/5 flex-col justify-between gap-1 px-4 py-2">
          <div className="text-lg font-bold">{name}</div>
          <div className="line-clamp-2 text-base leading-5 text-neutral-500">
            {details}
          </div>
          <div className="flex justify-between">
            <div>
              <div className="inline-block text-neutral-500 line-through">
                ${originalPrice}
              </div>
              <div className=" bg-price-yellow shadow-price ml-2 inline-block w-fit rounded px-1 font-bold">
                ${currentPrice}
              </div>
            </div>
            <div className="flex items-center justify-center rounded bg-red-500 px-1 text-sm text-white">
              {discountPercent}% off
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}