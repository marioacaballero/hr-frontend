"use server";

import { apiservice } from "@/utils/service-api";
import { revalidatePath } from "next/cache";

export async function createActivity(prevState: any, activity: FormData) {
  const name = activity.get("name");

  try {
    await apiservice.post("/activity-area", {
      name: name?.toString().toLowerCase(),
    });
    revalidatePath("/admin/dashboard/get/activity-area");
    revalidatePath("/signup/company");
    return {
      message: "",
      post: "Actividad creada con éxito",
    };
  } catch (error: any) {
    const message = error.response.data.message.split(" :: ")[1];
    return {
      message: message || "Error al crear la actividad",
      post: "",
    };
  }
}
