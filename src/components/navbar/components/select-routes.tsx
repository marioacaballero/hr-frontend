"use client";

import { useRouter } from "next/navigation";

export default function SelectedRoutes() {
  const router = useRouter();

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "") return;
    router.push(`/signup/${e.target.value}`);
  };
  return (
    <select
      className="w-40 rounded-lg bg-verde-loro p-2 text-center text-azul-text"
      onChange={(e) => onChange(e)}
    >
      <option value="">Registrate</option>
      <option value="user">Postulante</option>
      <option value="company">Empresa</option>
      <option value="user">Freelance</option>
      <option value="company">ONG / Organizaciones a fines</option>
    </select>
  );
}
