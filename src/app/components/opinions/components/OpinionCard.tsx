import Image from "next/image";
import React from "react";

function OpinionCard({
  name,
  opinion,
  image,
  position,
}: {
  name: string;
  opinion: string;
  image: string;
  position: string;
}) {
  return (
    <div>
      <header>
        <Image src={image} alt={name} width={50} height={50} />
        <h3>{name}</h3>
        <h4>{position}</h4>
      </header>
      <p>{opinion}</p>
    </div>
  );
}

export default OpinionCard;
