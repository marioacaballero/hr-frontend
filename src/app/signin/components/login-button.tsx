"use client";

import { ring } from "ldrs";
import { useFormStatus } from "react-dom";

ring.register();

export function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <div className="flex aspect-video flex-col items-center gap-4">
      <button
        type="submit"
        aria-disabled={pending}
        className="w-44 rounded-lg  border-verde-loro bg-verde-loro p-3 text-center font-semibold uppercase duration-500 hover:bg-green-300"
      >
        Iniciar sesión
      </button>
      {pending && (
        <div>
          <l-ring
            size="40"
            stroke="5"
            bg-opacity="0"
            speed="2"
            color="gray"
          ></l-ring>
        </div>
      )}
    </div>
  );
}
