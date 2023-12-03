"use client";

import Link from "next/link";
import Image from "next/image";
import { RegisterCompany } from "../lib/actions-create-company";
import formImage from "../../../../../public/form.png";
import { passwordValidation, termsValidation } from "../utils/validations";

export default function FormCompany() {
  return (
    <form action={RegisterCompany} className="relative bg-white p-16">
      <Image alt="fomr" src={formImage} className="absolute right-10 top-40" />
      <h1 className="py-10 text-3xl font-bold">
        Registra tu organización con nosotros
      </h1>
      <p className="py-5 text-xl font-semibold text-gray-600">
        Completa la información de tu usuario
      </p>
      <span className="p-3 text-gray-600">
        Los campos con * son obligatorios
      </span>
      <section className="flex flex-col gap-6 py-10 text-lg text-gray-600">
        <div className="flex gap-8">
          <label className="flex flex-col gap-1">
            Nombre *
            <input
              type="text"
              name="firstName"
              placeholder="Nombre"
              className="rounded-lg border border-gray-500 p-3"
            />
          </label>
          <label className="flex flex-col gap-1">
            Apellido *
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              className="rounded-lg border border-gray-500 p-3"
            />
          </label>
        </div>
        <div className="flex gap-8">
          <label className="flex flex-col gap-1">
            Email *
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="rounded-lg border border-gray-500 p-3"
            />
            <span className="pt-2 text-sm">
              A este mail se enviaran las facturas
            </span>
          </label>
          <label className="flex flex-col gap-1">
            Contraseña *
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="rounded-lg border border-gray-500 p-3"
            />
            <span className="pt-2 text-sm">
              Debe tener 6 digitos como mínimo
            </span>
          </label>
        </div>
        <div className="flex">
          <label className="flex flex-col gap-1">
            Repetir contraseña *
            <input
              type="password"
              name="passwordvalidation"
              placeholder="Repetir contraseña"
              className="rounded-lg border border-gray-500 p-3"
              onChange={(e) => passwordValidation(e)}
            />
          </label>
        </div>
      </section>
      <section className="flex flex-col gap-6 py-10 text-lg text-gray-600">
        <h2 className="py-5 text-xl font-semibold">
          Completa la información de tu organización
        </h2>
        <div className="flex gap-8">
          <label className="flex flex-col gap-1">
            Nombre de la organización *
            <input
              type="text"
              name="name"
              placeholder="Nombre de la organización"
              className="rounded-lg border border-gray-500 p-3"
            />
          </label>
          <label className="flex flex-col gap-1">
            Razón social *
            <input
              type="text"
              name="bussinessName"
              placeholder="Razón social"
              className="rounded-lg border border-gray-500 p-3"
            />
          </label>
          <label className="flex flex-col gap-1">
            Area de actividad *
            <select
              className="rounded-lg border border-gray-500 bg-white p-3"
              name="activityArea"
            >
              <option value="1">Areas de actividad</option>
              <option value="2">Areas de actividad</option>
              <option value="3">Areas de actividad</option>
            </select>
          </label>
        </div>
        <div className="flex gap-8">
          <label className="flex flex-col gap-1">
            Condición fiscal *
            <select
              className="rounded-lg border border-gray-500 bg-white p-3"
              name="fiscalCondition"
            >
              <option value="responsable inscripto">
                Responsable inscripto
              </option>
              <option value="monotributista">Monotributista</option>
              <option value="consumidor final">Consumidor final</option>
              <option value="exento">Exento</option>
            </select>
          </label>
          <label className="flex flex-col gap-1">
            Cuit/Cuil *
            <input
              type="text"
              name="IDnumber"
              placeholder="Solo numeros sin guiones"
              className="rounded-lg border border-gray-500 p-3"
            />
          </label>
          <label className="flex flex-col gap-1">
            ¿Es una ONG?
            <select
              className="rounded-lg border border-gray-500 bg-white p-3"
              name="isONG"
            >
              <option value="off">No</option>
              <option value="on">Si</option>
            </select>
          </label>
        </div>
        <div className="flex gap-8">
          <label className="flex flex-col gap-1">
            Pais/Provincia/Ciudad *
            <input
              type="text"
              name="cityAndCountry"
              placeholder="Pais, Provincia, Ciudad"
              className="rounded-lg border border-gray-500 p-3"
            />
          </label>
          <label className="flex flex-col gap-1">
            Código postal *
            <input
              type="text"
              name="postalCode"
              placeholder="Cod postal"
              className="rounded-lg border border-gray-500 p-3"
            />
          </label>
        </div>
        <div className="flex gap-8">
          <label className="flex flex-col gap-1">
            Teléfono celular *
            <div className="flex gap-2">
              <select
                className="rounded-lg border border-gray-500 bg-white p-3"
                name="phonePref"
              >
                <option value="+54">AR +54</option>
                <option value="+1">EU +1</option>
                <option value="+55">BR +55</option>
                <option value="+598">UR +598</option>
              </select>
              <input
                type="tel"
                name="phoneNum"
                placeholder="Ej. 1156329815"
                className="rounded-lg border border-gray-500 p-3"
              />
              <input
                type="text"
                name="socialMedia"
                placeholder="Perfil de red social"
                className="ml-6 rounded-lg border border-gray-500 p-3"
              />
              <input
                type="text"
                name="web"
                placeholder="Página web"
                className="ml-6 rounded-lg border border-gray-500 p-3"
              />
            </div>
          </label>
        </div>
      </section>
      <section className="flex flex-col gap-6 py-10 text-lg text-gray-600">
        <label className="flex gap-8 py-5 text-xl">
          ¿Ofrece apoyo a la integración?
          <div className="flex gap-2">
            <input type="checkbox" name="integration" />
          </div>
        </label>
        <div className="flex flex-col gap-1 p-12 text-base">
          <label className="flex gap-2">
            <input type="checkbox" name="terms" className="flex gap-2" />
            Acepto las condiciones de uso y las politicas de privacidad *
          </label>
          <label className="flex gap-2">
            <input type="checkbox" name="news" className="flex gap-2" />
            Acepto recibir novedades
          </label>
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-center">
        <button
          type="submit"
          className="w-44 rounded-lg  border-green-100 bg-green-100 p-3 text-center font-semibold uppercase"
          onClick={(e) => termsValidation(e)}
        >
          Crear Cuenta
        </button>
        <div className="flex gap-2 py-10 text-gray-600">
          <span>¿Ya tienes cuenta?</span>
          <Link href="/login" className="font-semibold">
            Ingresa
          </Link>
        </div>
      </section>
    </form>
  );
}
