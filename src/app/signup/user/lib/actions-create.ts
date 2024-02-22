"use server";

import { apiservice } from "@/utils/service-api";
import { redirect } from "next/navigation";

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
      firstName: firstName.toString().toLowerCase(),
      lastName: lastName.toString().toLowerCase(),
      IDnumberType,
      IDnumber,
      cityAndCountry: cityAndCountry.toString().toLowerCase(),
      birthdate,
      phone: `${phonePref}${phoneNum}`,
      socialMedia: `${socialName},${social}`.toLocaleLowerCase(),
      email: email.toString().toLowerCase(),
      password,
      news: news === "on",
    };

    await apiservice.post("/auth/register-profile", newUser);
  } catch (error: any) {
    return { message: error.issues };
  }
  redirect("/signin");
}
