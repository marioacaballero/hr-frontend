import { redirect } from "next/navigation";

export default function page() {
  redirect("/");
  return <div></div>;
}
