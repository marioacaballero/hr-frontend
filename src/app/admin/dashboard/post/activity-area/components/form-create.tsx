"use client";

import { useFormState } from "react-dom";
import { createActivity } from "../lib/create-activity";

const initialState = {
  message: "",
  post: "",
};

export default function CreateActivity() {
  const [error, formAction] = useFormState(createActivity, initialState);
  return (
    <form action={formAction} className="flex justify-center py-32">
      <div className="flex w-2/3 flex-col gap-4 border border-black bg-white p-32 shadow-md shadow-black">
        <h1 className="text-2xl font-bold">
          Crear una nueva área de actividad
        </h1>
        <label className="flex items-center gap-4 text-lg">
          Nombre de la actividad
          <input
            type="text"
            name="name"
            className="rounded-md border border-gray-500 bg-gray-100 p-1"
          />
        </label>
        {error?.message && <p className="text-red-500">{error.message}</p>}
        <button
          type="submit"
          className="w-fit rounded-md border border-black bg-gray-200 p-2 px-4 transition-all hover:bg-gray-300"
        >
          Crear
        </button>
        {error?.post && <p className="text-green-500">{error.post}</p>}
      </div>
    </form>
  );
}
