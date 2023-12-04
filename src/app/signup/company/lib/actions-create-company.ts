"use server";

import { apiurl } from "@/app/utils/config-url";
import axios from "axios";
import { z } from "zod";

const CompanySchema = z.object({
  firstName: z.string().max(20),
  lastName: z.string().max(20),
  email: z.string().email({ message: "El email es incorrecto" }),
  password: z
    .string()
    .min(6, { message: "La contraseña es muy corta" })
    .max(20),
  name: z.string(),
  bussinessName: z.string(),
  activityArea: z.string(),
  fiscalCondition: z.string(),
  IDnumber: z.string(),
  cityAndCountry: z.string(),
  postalCode: z.string(),
  phonePref: z.string(),
  phoneNum: z.string(),
  socialMedia: z.string(),
  web: z.string(),
  integration: z.string(),
  news: z.string() || z.undefined(),
  isONG: z.string(),
});

export async function RegisterCompany(prevState: any, company: FormData) {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      name,
      bussinessName,
      activityArea,
      fiscalCondition,
      IDnumber,
      cityAndCountry,
      postalCode,
      phonePref,
      phoneNum,
      socialMedia,
      web,
      integration,
      news,
      isONG,
    } = CompanySchema.parse(Object.fromEntries(company.entries()));

    const newCompany = {
      firstName,
      lastName,
      email,
      password,
      name,
      bussinessName,
      activityArea: { id: +activityArea },
      fiscalCondition,
      IDnumber,
      cityAndCountry,
      postalCode,
      phone: `${phonePref}${phoneNum}`,
      socialMedia,
      web,
      integration: integration === "on",
      news: news === "on",
      isONG: isONG === "on",
    };

    console.log("RegisterCompany", newCompany);

    await axios.post(`${apiurl}/auth/register-company`, newCompany);
  } catch (error: any) {
    console.log(error.issues);
    // console.log("error", error.response.data);
    return { message: error.issues };
  }
}
