import React from "react";
import CardValue from "./cardValues/CardValue";
import { valuesData } from "../utils/values-data";

function Values() {
  return (
    <div className="bg-white py-16">
      <h1 className="text-center text-4xl font-semibold">
        Valores que nos unen y nos impulsan
      </h1>
      <section className="grid grid-cols-3 place-items-center gap-y-40 px-20 py-32">
        {valuesData.map((data) => (
          <CardValue
            key={data.id}
            logo={data.logo}
            tittle={data.title}
            description={data.description}
          />
        ))}
      </section>
    </div>
  );
}

export default Values;
