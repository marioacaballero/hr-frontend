"use client";

import Image from "next/image";
import Link from "next/link";
import { MouseEvent, useState } from "react";
import { useFormState } from "react-dom";
import bridge from "../../../../public/loginImage.png";
import { LoginMember } from "../lib/action-login";
import { LoginButton } from "./login-button";

const initialState = {
  message: "",
  email: "",
};

export default function Login() {
  const [seePass, setSeePass] = useState(false);
  const [state, formState] = useFormState(LoginMember, initialState);
  const [checkOne, setCheckOne] = useState({
    user: true,
    company: false,
  });

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setSeePass(!seePass);
  };

  return (
    <form action={formState} className="mt-1 flex bg-white">
      <section className="flex w-1/2 flex-col py-16">
        <div className="flex w-3/4 flex-col gap-8 pl-28">
          <span className="border border-b-2 border-white border-b-verde-linea pb-4 text-center text-3xl font-medium text-azul-text">
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
            {state.email && <span className="text-red-500">{state.email}</span>}
          </label>
          <label className="relative flex flex-col gap-2 text-lg">
            Contraseña
            <div className="flex">
              <input
                type={!seePass ? "password" : "text"}
                required
                name="password"
                placeholder="Contraseña"
                className="w-full rounded-md border border-gray-300 p-4"
              />
              {!seePass ? (
                <Image
                  onClick={(e) => handleClick(e)}
                  width={40}
                  height={40}
                  src="/see-pass.png"
                  alt=""
                  className="absolute right-0 top-11 opacity-55"
                />
              ) : (
                <Image
                  onClick={(e) => handleClick(e)}
                  width={40}
                  height={40}
                  src="/see-not-pass.png"
                  alt=""
                  className="absolute right-0 top-11 opacity-55"
                />
              )}
            </div>
          </label>
          {state.message && (
            <span className="text-red-500">{state.message}</span>
          )}
          <Link
            href={"/"}
            className="t
          ext-lg"
          >
            Olvidaste tu contraseña?
          </Link>
          <div className="flex flex-col gap-4 pl-16">
            <label
              className="flex gap-2"
              onClick={() => setCheckOne({ user: true, company: false })}
            >
              <input type="checkbox" name="freelance" checked={checkOne.user} />
              Ingreso como Postulante/Freelance*
            </label>
            <label
              className="flex gap-2"
              onClick={() => setCheckOne({ user: false, company: true })}
            >
              <input
                type="checkbox"
                name="company"
                checked={checkOne.company}
              />
              Ingreso como Empresa/ONG*
            </label>
          </div>
        </div>
        <div className="mt-20 flex w-3/4 flex-col items-center gap-20">
          <LoginButton />
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
