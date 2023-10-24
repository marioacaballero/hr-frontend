import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav>
      <Image alt="logo" src={""} width={50} height={50} />
      <Link href="/">¿Quiénes somos?</Link>
      <Link href="/">Buscar empleo</Link>
      <Link href="/">Publica tu aviso</Link>
      <Link href="/">Iniciar sesión</Link>
      <select>
        <option value="">Registrate</option>
        <option value="">Postulante</option>
        <option value="">Freelance</option>
        <option value="">Empresa</option>
        <option value="">ONG</option>
      </select>
    </nav>
  );
}

export default Navbar;
