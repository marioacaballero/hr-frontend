import React from "react";
import OpinionCard from "./components/OpinionCard";

const opinionsHardCode = [
  {
    id: "1",
    name: "name 1",
    image: "",
    opinion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.",
    position: "job title",
  },
  {
    id: "2",
    name: "name 2",
    image: "",
    opinion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.",
    position: "position 2",
  },
  {
    id: "3",
    name: "name 3",
    image: "",
    opinion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.",
    position: "position 3",
  },
  {
    id: "4",
    name: "name 4",
    image: "",
    opinion:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.",
    position: "position 4",
  },
];

function Opinions() {
  return (
    <div className="flex w-full flex-col items-center justify-between bg-white pb-10 pt-24">
      <h2 className="mb-10 w-full pl-20 text-left text-3xl font-medium uppercase">
        Opiniones
      </h2>
      <section className="flex w-full flex-nowrap gap-12 overflow-auto scroll-smooth p-12">
        {opinionsHardCode.map((op) => (
          <OpinionCard
            key={op.id}
            name={op.name}
            image={op.image}
            opinion={op.opinion}
            position={op.position}
          />
        ))}
      </section>
    </div>
  );
}

export default Opinions;
