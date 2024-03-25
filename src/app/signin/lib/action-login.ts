"use server";

import { apiservice } from "@/utils/service-api";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function LoginMember(prevState: any, user: FormData) {
  const { email, password, company } = Object.fromEntries(user);
  const loginUser = {
    email: email.toString().toLowerCase(),
    password,
    company,
  };

  try {
    if (company === "on") {
      try {
        await apiservice.get(
          `/profile-company/search-email?email=${loginUser.email}`,
        );
      } catch (error) {
        return { email: "El email no está registrado", message: "" };
      }
      const { data } = await apiservice.post("/auth/login-company", loginUser);
      cookies().set("session", JSON.stringify(data), { path: "/" });
    } else {
      try {
        await apiservice.get(
          `/profile-user/search-email?email=${loginUser.email}`,
        );
      } catch (error) {
        return { email: "El email no está registrado", message: "" };
      }
      const { data } = await apiservice.post("/auth/login-profile", loginUser);
      cookies().set("session", JSON.stringify(data), { path: "/" });
    }
  } catch (error) {
    return { message: "La contraseña no concuerda", email: "" };
  }
  redirect("/");
}
