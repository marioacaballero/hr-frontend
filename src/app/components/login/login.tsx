"use client";

import Link from "next/link";

export default function login() {
  return (
    <form>
      <button type="button">x</button>
      <span>Ingresa tu email y contraseña</span>
      <input type="email" required name="email" />
      <input type="password" required name="password" />
      <Link href={"/"}>Olvidaste tu contraseña?</Link>
      <button type="submit">Iniciar sesión</button>
      <span>No tienes cuenta?</span>
      <Link href={"/signup/user"}>Registrate</Link>
    </form>
  );
}
