import Image from "next/image";
import React from "react";
import { BiSearchAlt2, BiMap } from "react-icons/bi";
import logo from "../../../../public/next.svg";

function JobSearch() {
  return (
    <div className="mb-10 mt-14 flex py-10">
      <div className="flex w-1/2 flex-col items-center justify-center gap-10">
        <h2 className="mb-6 w-full pl-8 text-left text-3xl font-medium">
          Encontrar está reservado para aquellos que buscan
        </h2>
        <label className="flex w-2/3 items-center justify-start gap-4 rounded-lg border border-gray-300 bg-white p-2">
          <BiSearchAlt2 className="ml-4 text-2xl" />
          <input
            type="text"
            placeholder="Puesto, empresa o palabra clave"
            className="h-12 text-lg focus:outline-none"
          />
        </label>
        <label className="flex h-16 w-2/3 items-center justify-start gap-4 rounded-lg border border-gray-300 bg-white p-2">
          <BiMap className="ml-4 text-2xl" />
          <select className="bg-white p-1 text-lg">
            <option value="1">Todo el país</option>
          </select>
        </label>
        <button className="h-12 w-2/5 rounded-lg bg-green-100 p-3 font-medium">
          Buscar trabajo
        </button>
      </div>
      <div className="flex w-1/2 items-center justify-center">
        <Image src={logo} alt="" width={450} height={500} />
      </div>
    </div>
  );
}

export default JobSearch;
