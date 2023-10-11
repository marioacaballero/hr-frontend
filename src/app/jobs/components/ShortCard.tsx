import Image from "next/image";
import React from "react";

function ShortCard(): React.ReactElement {
  return (
    <div>
      <span>urgencia</span>
      <h2>titulo de la oferta</h2>
      <p>descripcion</p>
      <Image src="../../favicon.ico" alt="insignia" width={10} height={10} />
    </div>
  );
}

export default ShortCard;
