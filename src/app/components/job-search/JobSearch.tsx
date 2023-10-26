import Image from "next/image";
import React from "react";
import { BiSearchAlt2, BiMap } from "react-icons/bi";

function JobSearch() {
  return (
    <div>
      <h2>Encontrar está reservado para aquellos que buscan</h2>
      <label>
        <BiSearchAlt2 />
        <input type="text" placeholder="Puesto, empresa o palabra clave" />
      </label>
      <label>
        <BiMap />
        <select>
          <option value="1">Todo el país</option>
        </select>
      </label>
      <button>Buscar trabajo</button>
      <Image src={""} alt="" width={150} height={100} />
    </div>
  );
}

export default JobSearch;
