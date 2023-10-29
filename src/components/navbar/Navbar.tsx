import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex h-28 w-screen justify-evenly bg-white shadow-md shadow-gray-400">
      <Image
        alt="logo"
        src={""}
        width={50}
        height={50}
        className="w-24 border"
      />
      <div className="w-2/4 border">
        <Link href="/">¿Quiénes somos?</Link>
        <Link href="/">Buscar empleo</Link>
        <Link href="/">Publica tu aviso</Link>
      </div>
      <div className="w-1/3 border">
        <Link href="/">Iniciar sesión</Link>
        <select>
          <option value="">Registrate</option>
          <option value="">Postulante</option>
          <option value="">Freelance</option>
          <option value="">Empresa</option>
          <option value="">ONG</option>
        </select>
        <p>ico</p>
      </div>
    </nav>
  );
}

export default Navbar;
