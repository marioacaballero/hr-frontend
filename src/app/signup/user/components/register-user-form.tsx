"use client";

import { dateNow } from "@/utils/constants/date";
import Image from "next/image";
import Link from "next/link";
import formImage2 from "../../../../../public/formImage2.png";
import { SubmitButton } from "../../components/submit-button";
import { ID_TYPE } from "../../utils/enums";
import {
  cuilValidation,
  cuilValidationDb,
  emailValidation,
  emailValidationDb,
  passwordValidation,
  passwordValidationConcidence,
  phoneNumberValidation,
} from "../../utils/validations";
import { RegisterUser } from "../lib/actions-create";

export default function FormUser() {
  return (
    <form action={RegisterUser} className="relative mt-1 w-full bg-white p-16">
      <Image
        alt="form"
        src={formImage2}
        width={400}
        className="absolute right-20 top-28 z-0"
      />
      <h1 className="z-10 py-10 text-3xl font-bold">
        Creá tu cuenta y encontrá tu próxima oportunidad
      </h1>
      <span className="p-3 text-gray-600">
        Los campos con * son obligatorios
      </span>
      <section className="flex flex-col gap-20 pt-20 text-xl text-gray-600">
        <div className="flex gap-8">
          <label className="flex flex-col gap-2">
            Nombre *
            <input
              type="text"
              name="firstName"
              placeholder="Nombre"
              className="rounded-lg border border-gray-500 p-3"
              required
            />
          </label>
          <label className="flex flex-col gap-2">
            Apellido *
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              className="z-10 rounded-lg border border-gray-500 p-3"
              required
            />
          </label>
        </div>
        <div className="z-10 flex gap-16">
          <label className="flex flex-col gap-2">
            Tipo y número de documento *
            <div className="flex gap-2">
              <select
                className="rounded-lg border border-gray-500 bg-white p-3"
                name="IDnumberType"
              >
                {ID_TYPE.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.name}
                  </option>
                ))}
              </select>
              <input
                type="text"
                name="IDnumber"
                placeholder="Numero"
                className="rounded-lg border border-gray-500 p-3"
                onChange={() => cuilValidation()}
                onBlur={() => cuilValidationDb("user")}
                required
              />
            </div>
          </label>
          <label className="flex flex-col gap-2">
            Ubicación *
            <input
              type="text"
              name="cityAndCountry"
              placeholder="Pais, Provincia, Ciudad"
              className="rounded-lg border border-gray-500 p-3"
              required
            />
          </label>
        </div>
        <div className="flex items-center gap-12">
          <label className="flex flex-col gap-2">
            Fecha de nacimiento *
            <input
              type="date"
              name="birthdate"
              className="w-52 rounded-lg border border-gray-500 p-3"
              required
              max={dateNow}
            />
            <span className="pt-2 text-sm">
              Solo para validar tu identidad,
            </span>
            <span className="text-sm">no se verá reflejado en tu CV</span>
          </label>
          <label className="z-10 flex flex-col gap-2">
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
                onChange={() => phoneNumberValidation()}
                required
              />
            </div>
            <span className="invisible pt-2 text-sm">.</span>
            <span className="invisible text-sm">.</span>
          </label>
          <label className="z-10 flex flex-col gap-2">
            Redes sociales
            <div className="flex gap-2">
              <select
                className="rounded-lg border border-gray-500 bg-white p-3"
                name="socialName"
              >
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="linkedin">LinkedIn</option>
                <option value="twitter">Twitter</option>
                <option value="threads">Threads</option>
                <option value="tiktok">Tik tok</option>
                <option value="otro">Otro</option>
              </select>
              <input
                type="text"
                name="social"
                placeholder="Perfil"
                className="rounded-lg border border-gray-500 p-3"
              />
            </div>
            <span className="invisible pt-2 text-sm">.</span>
            <span className="invisible text-sm">.</span>
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
              onBlur={() => emailValidationDb("user")}
              onChange={() => emailValidation()}
              required
            />
          </label>
          <label className="flex flex-col gap-1">
            Contraseña *
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="w-60 rounded-lg border border-gray-500 p-3"
              onChange={() => passwordValidation()}
              required
            />
            <span className="pt-2 text-sm">
              Debe tener 6 digitos como mínimo
            </span>
          </label>
          <label className="flex flex-col gap-1">
            Repetir contraseña *
            <input
              type="password"
              name="passwordvalidation"
              placeholder="Repetir contraseña"
              className="w-60 rounded-lg border border-gray-500 p-3"
              onChange={() => passwordValidationConcidence()}
              required
            />
          </label>
        </div>
        <div className="flex"></div>
      </section>
      <section className="flex flex-col gap-32 pb-36 text-lg text-gray-600">
        <label className="flex gap-8 py-5 text-xl">
          ¿Perteneces a una ONG?
          <div className="flex gap-2">
            <input type="checkbox" id="ongyes" name="ongyes" />
            <span>Si</span>
            <input
              type="text"
              id="ong"
              name="ong"
              placeholder="¿Cuál?"
              className="mx-6 border-b border-gray-500 px-5"
            />
            <input type="checkbox" id="ongno" name="ongno" />
            <span>No</span>
          </div>
        </label>
        <label className="flex items-center gap-8 py-5 text-xl">
          ¿Cómo nos conociste?
          <select className="rounded-lg border border-gray-500 bg-white px-6 py-2">
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="linkedin">LinkedIn</option>
            <option value="twitter">Twitter</option>
            <option value="threads">Threads</option>
            <option value="tiktok">Tik tok</option>
            <option value="recomendación">Recomendación</option>
            <option value="otro">Otro</option>
          </select>
        </label>
        <div className="flex flex-col gap-1 p-12 text-base">
          <label className="flex gap-2">
            <input
              type="checkbox"
              name="terms"
              className="flex gap-2"
              required
            />
            Acepto las condiciones de uso y las politicas de privacidad *
          </label>
          <label className="flex gap-2">
            <input type="checkbox" name="news" className="flex gap-2" />
            Acepto recibir novedades
          </label>
        </div>
      </section>
      <section className="flex w-full flex-col items-center justify-center">
        <SubmitButton type="user" displayText={"Registrate"} />
        <div className="flex gap-2 py-10 text-gray-600">
          <span>¿Ya tienes cuenta?</span>
          <Link
            href="/login"
            className="font-semibold duration-200 hover:scale-105"
          >
            Ingresa como candidato
          </Link>
        </div>
      </section>
    </form>
  );
}
