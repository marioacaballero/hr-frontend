import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { PiPersonSimpleDuotone } from "react-icons/pi";
import SelectedRoutes from "./components/select-routes";
import logo from "/public/LOGO 1.png";
import SelectedProfile from "./components/select-profile";

function Navbar() {
  const dataLogin = cookies().get("session");
  const user = dataLogin ? JSON.parse(dataLogin?.value) : null;

  return (
    <nav className="flex h-32 items-center justify-between border-b border-gray-400 bg-white shadow-sm shadow-gray-400">
      <Link href="/">
        <Image
          alt="logo"
          src={logo}
          width={150}
          height={70}
          className="ml-4 hover:cursor-pointer"
        />
      </Link>
      <div className="flex w-2/4 items-center justify-start gap-5 pl-2">
        <Link
          href="/about"
          className="w-40 rounded-lg border border-verde-loro p-2 text-center duration-500 hover:bg-verde-bg hover:text-verde-loro"
        >
          ¿Quiénes somos?
        </Link>
        {user && !user.profile.bussinessName ? (
          <Link
            href="/jobs"
            className="w-40 rounded-lg border border-verde-loro p-2 text-center duration-500 hover:bg-verde-bg hover:text-verde-loro"
          >
            Buscar empleo
          </Link>
        ) : (
          <Link
            href="/jobs/post"
            className="w-40 rounded-lg border border-verde-loro p-2 text-center duration-500 hover:bg-verde-bg hover:text-verde-loro"
          >
            Publica tu aviso
          </Link>
        )}
      </div>
      <div className="flex w-2/6 items-center justify-end gap-6 pr-4">
        {user ? (
          <SelectedProfile user={user.profile} />
        ) : (
          <>
            <Link
              href="/signin"
              className="w-36 rounded-lg border border-verde-loro p-2 text-center text-verde-loro duration-500 hover:bg-verde-bg"
            >
              Iniciar sesión
            </Link>
            <SelectedRoutes />
          </>
        )}
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
