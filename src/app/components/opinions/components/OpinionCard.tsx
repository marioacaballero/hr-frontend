import Image from "next/image";
import React from "react";
import defaultLogo from "../../../../../public/Avatar.png";

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
    <div className="flex h-80 w-96 flex-none flex-col items-center justify-center gap-12 border border-gray-300 bg-white pl-20">
      <header className="flex w-full items-center gap-6">
        <Image
          src={image ? image : defaultLogo}
          alt={name}
          width={65}
          height={65}
          className="rounded-full"
        />
        <div>
          <h3 className="text-sm capitalize">{name}</h3>
          <h4 className="mt-1 pl-1 text-xs capitalize text-gray-500">
            {position}
          </h4>
        </div>
      </header>
      <p className="pr-10 text-xs leading-5 text-gray-500">{opinion}</p>
    </div>
  );
}

export default OpinionCard;
