export const passwordValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
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
