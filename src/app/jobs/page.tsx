import React from "react";

function Jobs(): React.ReactElement {
  return (
    <div>
      <section>
        <input type="date" />
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
          <option value="">tipo de contratacion</option>
          <option value="">indeterminado</option>
          <option value="">temporal</option>
        </select>
        <select>
          <option value="">carga horaria</option>
          <option value="">full time</option>
          <option value="">part time</option>
        </select>
      </section>
      <section></section>
    </div>
  );
}

export default Jobs;
