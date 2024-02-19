"use server";

import { apiservice } from "@/utils/service-api";

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
      firstName,
      lastName,
      email,
      password,
      name,
      bussinessName,
      activityArea: { id: activityArea },
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

    const { data } = await apiservice.post(
      "/auth/register-company",
      newCompany,
    );

    console.log("createCompany", data);

    if (data.id) {
      console.log("Empresa creada con éxito");
    } else {
      console.log(data.message);
    }
  } catch (error: any) {
    console.log(error);
    // console.log("error", error.response.data);
    return { message: error.issues };
  }
}
