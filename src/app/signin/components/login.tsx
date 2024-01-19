"use client";

import Link from "next/link";
import Image from "next/image";
import { LoginMember } from "../lib/action-login";
import bridge from "../../../../public/loginImage.png";

export default function Login() {
  return (
    <form action={LoginMember} className="mt-1 flex bg-white">
      <section className="flex w-1/2 flex-col py-16">
        <div className="flex w-3/4 flex-col gap-8 pl-28">
          <span className="border-b-verde-linea border border-b-2 border-white pb-4 text-center text-3xl font-medium text-azul-text">
            Ingresa a tu cuenta
          </span>
          <label className="mt-10 flex flex-col gap-2 text-lg">
            Email
            <input
              type="email"
              required
              name="email"
              placeholder="Email"
              className="rounded-md border border-gray-300 p-4"
            />
          </label>
          <label className="flex flex-col gap-2 text-lg">
            Contraseña
            <input
              type="password"
              required
              name="password"
              placeholder="Contraseña"
              className="rounded-md border border-gray-300 p-4"
            />
          </label>
          <Link href={"/"} className="text-lg">
            Olvidaste tu contraseña?
          </Link>
          <div className="flex flex-col gap-4 pl-16">
            <label className="flex gap-2">
              <input type="checkbox" name="company" />
              Ingreso como Postulante/Freelance*
            </label>
            <label className="flex gap-2">
              <input type="checkbox" name="company" />
              Ingreso como Empresa/ONG*
            </label>
          </div>
        </div>
        <div className="mt-20 flex w-3/4 flex-col items-center gap-20">
          <button
            type="submit"
            className="w-fit self-center rounded-md bg-verde-loro px-4 py-2 font-medium tracking-wide duration-500 hover:bg-lime-400"
          >
            Iniciar sesión
          </button>
          <div className="flex items-center justify-center gap-2 text-xl uppercase tracking-wide text-gray-500">
            <span>No tienes cuenta?</span>
            <Link
              href={"/signup/user"}
              className="font-semibold text-gray-600 duration-300 hover:scale-105"
            >
              Registrate
            </Link>
          </div>
        </div>
      </section>
      <section className="flex h-[80vh] w-1/2 items-center justify-center">
        <Image src={bridge} width={700} height={500} alt="bridge" />
      </section>
    </form>
  );
}
