import React from "react";

export default function JobFilters() {
  return (
    <section className="flex w-1/4 flex-col gap-4 pl-5 pt-10">
      <h2 className="border border-white border-b-black py-4 uppercase">
        Filtros
      </h2>
      <select>
        <option value="">modalidad</option>
        <option value="">presencial</option>
        <option value="">remoto</option>
        <option value="">hibrido</option>
      </select>
      <select>
        <option value="">jerarquia</option>
        <option value="">junior</option>
        <option value="">semi senior</option>
        <option value="">senior</option>
      </select>
      <select>
        <option value="">carga horaria</option>
        <option value="">full time</option>
        <option value="">part time</option>
      </select>
      <select>
        <option value="">tipo de contratacion</option>
        <option value="">indeterminado</option>
        <option value="">temporal</option>
      </select>
    </section>
  );
}
