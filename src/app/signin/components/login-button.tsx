"use client";

import { useFormStatus } from "react-dom";

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
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-gray-500 motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      )}
    </div>
  );
}
