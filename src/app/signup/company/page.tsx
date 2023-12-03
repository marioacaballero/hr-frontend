import { apiservice } from "@/app/utils/service-api";
import FormCompany from "./components/register-company-form";

type response = {
  id: number;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  name: string;
};
export default async function CompanyRegister() {
  const { data } = await apiservice.get("/activity-area");
  const activityareas = data.map((area: response) => {
    return { id: area.id, name: area.name.toUpperCase() };
  });

  return (
    <div>
      <FormCompany activityareas={activityareas} />
    </div>
  );
}
