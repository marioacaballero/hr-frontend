"use client";

import { valuesData } from "../utils/values-data";
import CardValue from "./cardValues/CardValue";

function Values() {
  return (
    <div className="flex w-full flex-col items-center bg-white py-16">
      <h1 className="text-center text-4xl font-semibold">
        Valores que nos unen y nos impulsan
      </h1>
      <section className="grid w-4/5 grid-cols-3 place-items-center gap-y-40 px-20 py-32">
        {valuesData.length &&
          valuesData.map((data) => (
            <CardValue key={data.id} logo={data.logo} tittle={data.title} />
          ))}
      </section>
    </div>
  );
}

export default Values;
