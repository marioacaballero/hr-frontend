import React from "react";
import { LuHeart, LuShare2, LuStar } from "react-icons/lu";

function ShortCard(): React.ReactElement {
  return (
    <section className="flex flex-col gap-4 rounded-xl border border-white p-4 duration-500 hover:rounded-xl hover:border hover:border-white hover:border-b-gray-300 hover:border-r-gray-300 hover:shadow-md hover:shadow-gray-400">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold capitalize">
          título de la oferta laboral
        </h2>
        <div className="flex gap-10">
          <button className="rounded-full bg-verde-bg2 p-4 text-2xl text-gray-400">
            <LuShare2 />
          </button>
          <button className="rounded-full bg-verde-bg2 p-4 text-2xl text-gray-400">
            <LuHeart />
          </button>
        </div>
      </div>
      <p className="h-32 w-11/12 overflow-hidden text-ellipsis text-justify">
        Lorem ipsum dolor sit amet consectetur. Non vulputate placerat mi
        egestas morbi.
      </p>
      <div className="flex justify-between">
        <button className="text-2xl">
          <LuStar />
        </button>
        <button className="rounded-md border border-verde-loro px-14 py-3 text-verde-loro hover:bg-verde-bg">
          Ver más
        </button>
      </div>
    </section>
  );
}

export default ShortCard;
