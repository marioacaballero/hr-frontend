import React from "react";
import Image from "next/image";
import comunity from "../../../../public/Comunidad.png";

function Comunity() {
  return (
    <div className="mb-10 mt-14 flex flex-col items-center justify-between">
      <h2 className="mb-6 w-full text-center text-3xl font-medium">
        Nuestra Comunidad
      </h2>
      <Image src={comunity} alt="comunity" sizes="100vw" />
    </div>
  );
}

export default Comunity;
