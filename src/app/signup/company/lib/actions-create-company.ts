"use server";

import { apiurl } from "@/app/utils/config-url";
import axios from "axios";

export async function RegisterCompany(company: FormData) {
  const rawCompanyData = Object.fromEntries(company.entries());

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
  } = rawCompanyData;

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
  try {
    await axios.post(`${apiurl}/auth/register-company`, newCompany);
  } catch (error: any) {
    console.log(error.response.data);
  }
}
