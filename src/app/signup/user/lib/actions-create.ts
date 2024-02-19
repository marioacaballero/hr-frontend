"use server";

import { apiservice } from "@/utils/service-api";

export async function RegisterUser(user: FormData) {
  try {
    const {
      firstName,
      lastName,
      IDnumberType,
      IDnumber,
      cityAndCountry,
      birthdate,
      phonePref,
      phoneNum,
      socialName,
      social,
      email,
      password,
      news,
    } = Object.fromEntries(user.entries());

    const newUser = {
      firstName,
      lastName,
      IDnumberType,
      IDnumber,
      cityAndCountry,
      birthdate,
      phone: `${phonePref}${phoneNum}`,
      socialMedia: `${socialName},${social}`,
      email,
      password,
      news: news === "on",
    };

    console.log("RegisterCompany", newUser);

    // const { data } = await apiservice.post(
    //   "/auth/register-company",
    //   newUser,
    // );

    // console.log("createCompany", data);

    // if (data.id) {
    //   console.log("Empresa creada con éxito");
    // } else {
    //   console.log(data.message);
    // }
  } catch (error: any) {
    console.log(error);
    // console.log("error", error.response.data);
    return { message: error.issues };
  }
}
