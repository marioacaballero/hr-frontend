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

function Footer() {
  return (
    <footer>
      <Image src="" alt="Logo" width={50} height={50} />
      <Link href="/">¿Quiénes Somos?</Link>
      <Link href="/">Busca empleo</Link>
      <Link href="/">Contáctanos</Link>
      <Link href="/">Testimonios</Link>
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
      <span>Copyright ©️ 2023. All Right Reservered</span>
    </footer>
  );
}

export default Footer;
