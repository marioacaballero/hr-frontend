import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";
import logo from "../../../public/LOGO 1.png";

function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-4 bg-gray-300 p-6">
      <div className="my-4 flex w-4/5 items-center justify-center border-b-2 border-black p-10">
        <Image alt="logo" src={logo} width={150} className="ml-12 h-24" />
      </div>
      <section className="flex gap-12 py-4 text-xl font-medium">
        <Link href="/">¿Quiénes Somos?</Link>
        <Link href="/">Busca empleo</Link>
        <Link href="/">Contáctanos</Link>
        <Link href="/">Testimonios</Link>
      </section>
      <section className="flex gap-10 py-2 text-[22px] ">
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
          <FaTelegramPlane />
        </a>
      </section>
      <span className="flex items-center justify-center gap-1 py-1 text-lg text-gray-600">
        Copyright <span className="text-xs">©️</span> 2023. All Right Reservered
      </span>
    </footer>
  );
}

export default Footer;
