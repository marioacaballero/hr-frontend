import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import logo from "../../../public/next.svg";

function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-4 bg-gray-300 p-6">
      <div className="flex w-4/5 items-center justify-center border-b-2 border-black p-10">
        <Image src={logo} alt="Logo" width={150} height={150} />
      </div>
      <section className="flex gap-12 py-4 text-lg font-medium">
        <Link href="/">¿Quiénes Somos?</Link>
        <Link href="/">Busca empleo</Link>
        <Link href="/">Contáctanos</Link>
        <Link href="/">Testimonios</Link>
      </section>
      <section className="flex gap-8 py-2 text-lg">
        <a href="/">
          <FaFacebook />
        </a>
        <a href="/">
          <FaTwitter />
        </a>
        <a href="/">
          <FaInstagram />
        </a>
        <a href="/">
          <FaWhatsapp />
        </a>
        <a href="/">
          <FaTelegram />
        </a>
      </section>
      <span className="py-1 text-gray-600">
        Copyright ©️ 2023. All Right Reservered
      </span>
    </footer>
  );
}

export default Footer;
