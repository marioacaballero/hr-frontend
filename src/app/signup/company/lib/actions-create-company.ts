"use server";

export async function RegisterCompany(company: FormData) {
  const rawCompanyData = Object.fromEntries(company.entries());

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
    integration,
    isONG,
  } = rawCompanyData;

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
    integration: integration === "on",
    isONG: isONG === "on",
  };

  console.log("RegisterCompany", newCompany);
}
