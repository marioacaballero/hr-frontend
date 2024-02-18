"use client";

import Image from "next/image";
import Link from "next/link";
import { useFormState } from "react-dom";
import formImage from "../../../../../public/form.png";
import {
  emailValidation,
  passwordValidation,
  termsValidation,
} from "../../utils/validations";
import { RegisterCompany } from "../lib/actions-create-company";

type activityareas = {
  name: string;
  id: number;
};

const initialState = {
  message: null,
};

export default function FormCompany({
  activityareas,
}: {
  activityareas: activityareas[];
}) {
  const [state, formAction] = useFormState(RegisterCompany, initialState);
  return (
    <form action={formAction} className="relative mt-1 bg-white p-16">
      <Image
        alt="fomr"
        src={formImage}
        width={600}
        className="absolute right-10 top-40 z-0"
      />
      <h1 className="py-10 text-3xl font-bold">
        Registra tu organización con nosotros
      </h1>
      <p className="py-5 text-xl font-semibold text-gray-600">
        Completa la información de tu usuario
      </p>
      <span className="p-3 text-gray-600">
        Los campos con * son obligatorios
      </span>
      <section className="flex flex-col gap-12 py-10 text-lg text-gray-600">
        <div className="z-10 flex gap-8">
          <label className="flex flex-col gap-1">
            Nombre *
            <input
              type="text"
              name="firstName"
              placeholder="Nombre"
              className="rounded-lg border border-gray-500 p-3"
              required
            />
          </label>
          <label className="flex flex-col gap-1">
            Apellido *
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              className="rounded-lg border border-gray-500 p-3"
              required
            />
          </label>
        </div>
        <div className="z-10 flex gap-8">
          <label className="flex flex-col gap-1">
            Email *
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="rounded-lg border border-gray-500 p-3"
              required
              onChange={(e) => emailValidation(e)}
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
              required
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
              required
            />
          </label>
        </div>
      </section>
      <section className="flex flex-col gap-12 py-10 text-lg text-gray-600">
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
              required
            />
          </label>
          <label className="flex flex-col gap-1">
            Razón social *
            <input
              type="text"
              name="bussinessName"
              placeholder="Razón social"
              className="rounded-lg border border-gray-500 p-3"
              required
            />
          </label>
          <label className="flex flex-col gap-1">
            Area de actividad *
            <select
              className="rounded-lg border border-gray-500 bg-white p-3"
              name="activityArea"
            >
              {activityareas.map((area) => (
                <option key={area.id} value={area.id}>
                  {area.name}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex gap-8">
          <label className="flex flex-col gap-1">
            Condición fiscal *
            <select
              className="rounded-lg border border-gray-500 bg-white p-3"
              name="fiscalCondition"
              required
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
              required
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
              required
            />
          </label>
          <label className="flex flex-col gap-1">
            Código postal *
            <input
              type="text"
              name="postalCode"
              placeholder="Cod postal"
              className="w-36 rounded-lg border border-gray-500 p-3"
              required
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
                className="w-48 rounded-lg border border-gray-500 p-3"
                required
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
            <input type="radio" name="integration" className="w-5" />
          </div>
        </label>
        <div className="flex flex-col gap-1 p-12 text-base">
          <label className="flex gap-2">
            <input type="checkbox" name="terms" className="flex w-4 gap-2" />
            Acepto las condiciones de uso y las politicas de privacidad *
          </label>
          <label className="flex gap-2">
            <input type="checkbox" name="news" className="flex w-4 gap-2" />
            Acepto recibir novedades
          </label>
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-center">
        <button
          type="submit"
          className="w-44 rounded-lg  border-verde-bg2 bg-verde-bg2 p-3 text-center font-semibold uppercase duration-500 hover:bg-green-300"
          onClick={(e) => termsValidation(e)}
        >
          Crear Cuenta
        </button>
        <p aria-live="polite" className="text-red-500">
          {state?.message}
        </p>
        <div className="flex gap-2 py-10 text-gray-600">
          <span>¿Ya tienes cuenta?</span>
          <Link
            href="/login"
            className="font-semibold duration-200 hover:scale-105"
          >
            Ingresa
          </Link>
        </div>
      </section>
    </form>
  );
}
