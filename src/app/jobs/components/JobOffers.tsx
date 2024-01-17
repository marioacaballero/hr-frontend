import React from "react";
import { BsFillBellFill } from "react-icons/bs";
import ShortCard from "./ShortCard";

function JobOffers() {
  return (
    <section className="flex w-4/5 flex-col gap-4 pr-8 pt-10">
      <div className="flex justify-between border border-white border-b-gray-300">
        <h2 className="py-4 text-xl">12 ofertas de trabajo similares</h2>
        <button
          type="button"
          className="flex h-12 items-center gap-2 rounded-2xl bg-[#F3C13F] p-4 text-sm capitalize text-white duration-300 hover:shadow-md hover:shadow-gray-400"
        >
          <BsFillBellFill />
          crear alerta
        </button>
      </div>
      <ShortCard />
      <ShortCard />
      <ShortCard />
    </section>
  );
}

export default JobOffers;
