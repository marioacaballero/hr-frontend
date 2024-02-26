"use client";

import { ring } from "ldrs";
import { useFormStatus } from "react-dom";
import { cuilValidationDb } from "../utils/validations";

ring.register();

export function SubmitButton({
  type,
  displayText,
}: {
  type: string;
  displayText: string;
}) {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        type="submit"
        aria-disabled={pending}
        className="w-44 rounded-lg  border-verde-loro bg-verde-loro p-3 text-center font-semibold uppercase duration-500 hover:bg-green-300"
        onClick={() => cuilValidationDb(type)}
      >
        {displayText}
      </button>
      {pending && (
        <div className="mt-4">
          <l-ring
            size="40"
            stroke="5"
            bg-opacity="0"
            speed="2"
            color="gray"
          ></l-ring>
        </div>
      )}
    </>
  );
}
