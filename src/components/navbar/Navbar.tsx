"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PiPersonSimpleDuotone } from "react-icons/pi";
import logo from "../../../public/LOGO 1.png";

function Navbar() {
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") return;
    router.push(`/signup/${e.target.value}`);
  };

  return (
    <nav className="flex h-32 w-screen items-center justify-between border-b border-gray-400 bg-white shadow-2xl shadow-black">
      <Image
        alt="logo"
        src={logo}
        width={150}
        className="ml-12 h-24 hover:cursor-pointer"
        onClick={() => router.push("/")}
      />
      <div className="flex w-2/4 items-center justify-start gap-5 pl-2">
        <Link
          href="/about"
          className="hover:bg-verde-bg border-verde-loro hover:text-verde-loro w-48 rounded-lg border p-2 text-center duration-500"
        >
          ¿Quiénes somos?
        </Link>
        <Link
          href="/jobs"
          className="hover:bg-verde-bg border-verde-loro hover:text-verde-loro w-48 rounded-lg border p-2 text-center duration-500"
        >
          Buscar empleo
        </Link>
        <Link
          href="/"
          className="hover:bg-verde-bg border-verde-loro hover:text-verde-loro w-48 rounded-lg border p-2 text-center duration-500"
        >
          Publica tu aviso
        </Link>
      </div>
      <div className="flex w-2/6 items-center justify-start gap-6">
        <Link
          href="/signin"
          className="border-verde-loro text-verde-loro hover:bg-verde-bg w-36 rounded-lg border p-3 text-center duration-500"
        >
          Iniciar sesión
        </Link>
        <select
          onChange={(e) => onChange(e)}
          className="bg-verde-loro text-azul-text w-44 rounded-lg p-3 text-center"
        >
          <option value="">Registrate</option>
          <option value="user">Postulante</option>
          <option value="company">Empresa</option>
          <option value="user">Freelance</option>
          <option value="company">ONG / Organizaciones a fines</option>
        </select>
        <Link
          href="/"
          className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100"
        >
          <PiPersonSimpleDuotone className="text-4xl" />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
