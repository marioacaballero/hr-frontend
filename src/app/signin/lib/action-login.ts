"use server";

export async function LoginMember(user: FormData) {
  const { email, password, company } = Object.fromEntries(user);
  const loginUser = {
    email,
    password,
    company,
  };
  console.log("loginUser", loginUser);
}
