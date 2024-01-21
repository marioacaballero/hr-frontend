"use client";

import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { JobFilter } from "@/utils/types/job-filters";

export default function JobFilters() {
  const [filters, setFilters] = React.useState<JobFilter>({
    modality: false,
    hierarchy: false,
    workday: false,
    contractType: false,
  });

  const handleShowFilters = (filter: keyof JobFilter) => {
    setFilters({ ...filters, [filter]: !filters[filter] });
  };

  return (
    <section className="flex w-1/5 flex-col gap-4 pl-8 pt-10">
      <h2 className="border border-white border-b-black py-4 text-xl uppercase">
        Filtros
      </h2>
      <div className="flex flex-col capitalize">
        <label
          className="flex justify-between text-lg hover:cursor-pointer"
          onClick={() => handleShowFilters("modality")}
        >
          modalidad
          {filters.modality ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </label>
        {filters.modality && (
          <div className="flex flex-col gap-1 pl-2 pt-3">
            <label className="flex gap-2">
              <input type="checkbox" />
              presencial
            </label>
            <label className="flex gap-2">
              <input type="checkbox" />
              remoto
            </label>
            <label className="flex gap-2">
              <input type="checkbox" />
              hibrido
            </label>
          </div>
        )}
      </div>
      <div className="flex flex-col  capitalize">
        <label
          className="flex justify-between text-lg hover:cursor-pointer"
          onClick={() => handleShowFilters("hierarchy")}
        >
          jerarquia
          {filters.modality ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </label>
        {filters.hierarchy && (
          <div className="flex flex-col gap-1 pl-2 pt-3">
            <label className="flex gap-2">
              <input type="checkbox" />
              junior
            </label>
            <label className="flex gap-2">
              <input type="checkbox" />
              semi senior
            </label>
            <label className="flex gap-2">
              <input type="checkbox" />
              senior
            </label>
          </div>
        )}
      </div>
      <div className="flex flex-col  capitalize">
        <label
          className="flex justify-between text-lg hover:cursor-pointer"
          onClick={() => handleShowFilters("workday")}
        >
          carga horaria
          {filters.workday ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </label>
        {filters.workday && (
          <div className="flex flex-col gap-1 pl-2 pt-3">
            <label className="flex gap-2">
              <input type="checkbox" />
              full time
            </label>
            <label className="flex gap-2">
              <input type="checkbox" />
              part time
            </label>
            <label className="flex gap-2">
              <input type="checkbox" />
              freelance
            </label>
            <label className="flex gap-2">
              <input type="checkbox" />
              por hora
            </label>
          </div>
        )}
      </div>
      <div className="flex flex-col  capitalize">
        <label
          className="flex justify-between text-lg hover:cursor-pointer"
          onClick={() => handleShowFilters("contractType")}
        >
          tipo de contratacion
          {filters.contractType ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </label>
        {filters.contractType && (
          <div className="flex flex-col gap-1 pl-2 pt-3">
            <label className="flex gap-2">
              <input type="checkbox" />
              indeterminado
            </label>
            <label className="flex gap-2">
              <input type="checkbox" />
              temporal
            </label>
            <label className="flex gap-2">
              <input type="checkbox" />
              autonomo
            </label>
            <label className="flex gap-2">
              <input type="checkbox" />
              pasantia
            </label>
          </div>
        )}
      </div>
    </section>
  );
}
