"use client";

import Link from "next/link";
import { LoginMember } from "../lib/action-login";

export default function Login() {
  return (
    <form
      action={LoginMember}
      className="m-auto mb-20 mt-20 flex w-1/2 flex-col gap-6 bg-white p-14"
    >
      <span className="text-sm font-semibold uppercase">
        Ingresa tu email y contraseña
      </span>
      <input
        type="email"
        required
        name="email"
        placeholder="Email"
        className="rounded-md border border-gray-300 p-3"
      />
      <input
        type="password"
        required
        name="password"
        placeholder="Contraseña"
        className="rounded-md border border-gray-300 p-3"
      />
      <label className="flex gap-2 text-sm">
        <input type="checkbox" name="company" />
        Soy una cuenta de empresa
      </label>
      <Link href={"/"} className="text-xs font-semibold uppercase">
        Olvidaste tu contraseña?
      </Link>
      <button
        type="submit"
        className="mt-8 w-fit self-center rounded-md bg-lime-300 p-3 font-medium tracking-wide duration-500 hover:bg-lime-400"
      >
        Iniciar sesión
      </button>
      <div className="mt-8 flex items-center justify-center gap-2 text-sm uppercase tracking-wide">
        <span>No tienes cuenta?</span>
        <Link
          href={"/signup/user"}
          className="font-semibold duration-300 hover:scale-105"
        >
          Registrate
        </Link>
      </div>
    </form>
  );
}
