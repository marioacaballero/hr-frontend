import { apiservice } from "@/utils/service-api";

export const passwordValidationConcidence = () => {
  const password = document.getElementsByName(
    "password",
  )[0] as HTMLInputElement;
  const passwordValidation = document.getElementsByName(
    "passwordvalidation",
  )[0] as HTMLInputElement;
  if (password.value !== passwordValidation.value) {
    passwordValidation.setCustomValidity("Las contraseñas no coinciden");
  } else {
    passwordValidation.setCustomValidity("");
  }
};

export const passwordValidation = () => {
  const password = document.getElementsByName(
    "password",
  )[0] as HTMLInputElement;
  if (password.value.length < 6) {
    password.setCustomValidity(
      "La contraseña debe tener al menos 6 caracteres",
    );
  } else {
    password.setCustomValidity("");
  }
};

export const emailValidationDb = async (profileType: string) => {
  const email = document.getElementsByName("email")[0] as HTMLInputElement;
  try {
    const { data } = await apiservice.get(
      `/profile-${profileType}/search-email?email=${email.value}`,
    );
    if (data) {
      email.setCustomValidity(
        "El email ya está registrado en la base de datos",
      );
    } else {
      email.setCustomValidity("");
    }
  } catch (error) {}
};

export const cuilValidation = () => {
  const cuil = document.getElementsByName("IDnumber")[0] as HTMLInputElement;
  if (cuil.validity.patternMismatch) {
    cuil.setCustomValidity("El CUIL/CUIT no es válido");
  } else {
    cuil.setCustomValidity("");
  }
};

export const cuilValidationDb = async (profileType: string) => {
  const cuil = document.getElementsByName("IDnumber")[0] as HTMLInputElement;
  console.log(cuil.value);
  try {
    const { data } = await apiservice.get(
      `/profile-${profileType}/search-cuil?cuil=${cuil.value}`,
    );

    console.log(data);

    if (data) {
      cuil.setCustomValidity(
        "El CUIL/CUIT ya está registrado en la base de datos",
      );
    } else {
      cuil.setCustomValidity("");
    }
  } catch (error) {}
};

export const emailValidation = async () => {
  const email = document.getElementsByName("email")[0] as HTMLInputElement;
  if (email.validity.typeMismatch) {
    return email.setCustomValidity("El email no es válido");
  } else {
    email.setCustomValidity("");
  }
};

export const phoneNumberValidation = () => {
  const phoneNum = document.getElementsByName(
    "phoneNum",
  )[0] as HTMLInputElement;
  if (phoneNum.value.length != 10) {
    phoneNum.setCustomValidity("El número de teléfono no es válido");
  } else {
    phoneNum.setCustomValidity("");
  }
};
