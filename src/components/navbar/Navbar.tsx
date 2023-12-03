"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PiPersonSimpleDuotone } from "react-icons/pi";
import logo from "../../../public/next.svg";

function Navbar() {
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") return;
    router.push(`/signup/${e.target.value}`);
  };

  return (
    <nav className="flex h-32 w-screen justify-between border-b border-gray-400 bg-white shadow-inner shadow-black">
      <Image alt="logo" src={logo} width={150} height={100} className="ml-12" />
      <div className="flex w-2/4 items-center justify-start gap-5 pl-2">
        <Link
          href="/about"
          className="w-48 rounded-lg border border-gray-400 p-2 text-center"
        >
          ¿Quiénes somos?
        </Link>
        <Link
          href="/jobs"
          className="w-48 rounded-lg border border-gray-400 p-2 text-center"
        >
          Buscar empleo
        </Link>
        <Link
          href="/"
          className="w-48 rounded-lg border border-gray-400 p-2 text-center"
        >
          Publica tu aviso
        </Link>
      </div>
      <div className="flex w-2/6 items-center justify-start gap-6">
        <Link
          href="/"
          className="w-36 rounded-lg border border-gray-400 p-3 text-center "
        >
          Iniciar sesión
        </Link>
        <select
          onChange={(e) => onChange(e)}
          className="w-44 rounded-lg  border-green-100 bg-green-100 p-3 text-center"
        >
          <option value="">Registrate</option>
          <option value="user">Postulante</option>
          <option value="company">Empresa</option>
          <option value="user">Freelance</option>
          <option value="company">ONG</option>
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
