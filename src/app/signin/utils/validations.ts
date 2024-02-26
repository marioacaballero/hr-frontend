import { apiservice } from "@/utils/service-api";

export const emailValidationDb = async (profileType: string) => {
  const email = document.getElementsByName("email")[0] as HTMLInputElement;
  try {
    const { data } = await apiservice.get(
      `/profile-${profileType}/search-email?email=${email.value.toLocaleLowerCase()}`,
    );
    if (data) {
      email.setCustomValidity(
        "El email ya está registrado en la base de datos",
      );
    }
  } catch (error) {
    email.setCustomValidity("");
  }
};
