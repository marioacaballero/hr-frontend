"use server";

import { apiservice } from "@/utils/service-api";
import { redirect } from "next/navigation";

export async function RegisterCompany(company: FormData) {
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
    } = Object.fromEntries(company.entries());

    const newCompany = {
      firstName: firstName.toString().toLowerCase(),
      lastName: lastName.toString().toLowerCase(),
      email: email.toString().toLowerCase(),
      password,
      name: name.toString().toLowerCase(),
      bussinessName: bussinessName.toString().toLowerCase(),
      activityArea: { id: activityArea },
      fiscalCondition,
      IDnumber,
      cityAndCountry: cityAndCountry.toString().toLowerCase(),
      postalCode,
      phone: `${phonePref}${phoneNum}`,
      socialMedia: socialMedia.toString().toLowerCase(),
      web: web.toString().toLowerCase(),
      integration: integration === "on",
      news: news === "on",
      isONG: isONG === "on",
    };

    await apiservice.post("/auth/register-company", newCompany);
  } catch (error: any) {
    return { message: error.issues };
  }
  redirect("/signin");
}
