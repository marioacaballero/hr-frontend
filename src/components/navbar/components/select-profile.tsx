"use client";

import Image from "next/image";
import { useState } from "react";
import avatar from "/public/Avatar.png";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";
import { closeSesion } from "../lib/close";

type User = {
  id: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  firstName: string;
  lastName: string;
  IDnumberType: string;
  IDnumber: string;
  cityAndCountry: string;
  birthdate: string;
  phone: string;
  socialMedia: string;
  email: string;
  news: boolean;
  rol: string;
  accesLevel: number;
};

export default function SelectedProfile({ user }: { user: User }) {
  const router = useRouter();
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="relative">
      <Image
        src={avatar}
        width={75}
        alt="avatar"
        onClick={() => setShowProfile(true)}
      />
      {showProfile && (
        <section className="absolute -right-6 top-20 flex  h-96 w-80 flex-col items-center justify-between rounded-2xl bg-white p-10">
          <div className="flex items-center justify-center gap-6">
            <Image
              src={avatar}
              width={75}
              alt="avatar"
              onClick={() => setShowProfile(false)}
            />
            <div className="flex flex-col">
              <p className="text-xl">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-sm">{user.email}</p>
            </div>
          </div>
          <hr className="w-full border border-gray-300" />
          <Link href="/" className="self-start text-lg font-semibold">
            Mi perfil
          </Link>
          <Link href="/" className="self-start text-lg font-semibold">
            Perfil de empresa
          </Link>
          <Link href="/" className="self-start text-lg font-semibold">
            Mis avisos
          </Link>
          <form action={closeSesion}>
            <button
              type="submit"
              className="flex items-center gap-2 self-start text-lg font-semibold"
              onClick={() => router.push(`/close-sesion/${user.id}`)}
            >
              <IoMdClose className="text-3xl" />
              Cerrar sesión
            </button>
          </form>
        </section>
      )}
    </div>
  );
}
