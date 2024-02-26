"use client";

import { For } from "million/react";
import { valuesData } from "../utils/values-data";
import CardValue from "./cardValues/CardValue";

export default function Values() {
  return (
    <div className="flex w-full flex-col items-center bg-white py-16">
      <h1 className="text-center text-4xl font-semibold">
        Valores que nos unen y nos impulsan
      </h1>
      <section className="grid w-4/5 grid-cols-3 place-items-center gap-y-40 px-20 py-32">
        <For each={valuesData}>
          {(data) => (
            <CardValue key={data.id} logo={data.logo} tittle={data.title} />
          )}
        </For>
      </section>
    </div>
  );
}
