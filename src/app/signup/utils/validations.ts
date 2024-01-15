export const passwordValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
  const password = document.getElementsByName(
    "password",
  )[0] as HTMLInputElement;
  const passwordValidation = document.getElementsByName(
    "passwordvalidation",
  )[0] as HTMLInputElement;
  if (password.value !== passwordValidation.value) {
    passwordValidation.setCustomValidity("Las contraseñas no coinciden");
  } else if (password.value.length < 6) {
    password.setCustomValidity(
      `La contraseña debe tener al menos 6 caracteres ${password.value.length}`,
    );
  } else {
    passwordValidation.setCustomValidity("");
  }
};

export const termsValidation = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) => {
  const terms = document.getElementsByName("terms")[0] as HTMLInputElement;
  if (!terms.checked) {
    terms.setCustomValidity("Debes aceptar los terminos y condiciones");
  } else {
    terms.setCustomValidity("");
  }
};

export const emailValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
  const email = document.getElementsByName("email")[0] as HTMLInputElement;
  if (email.validity.typeMismatch) {
    email.setCustomValidity("El email no es válido");
  } else {
    email.setCustomValidity("");
  }
};
