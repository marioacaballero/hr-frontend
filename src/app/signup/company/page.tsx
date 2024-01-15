import { apiservice } from "@/utils/service-api";
import FormCompany from "./components/register-company-form";

type response = {
  id: number;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  name: string;
};
export default async function CompanyRegister() {
  try {
    const { data } = await apiservice.get("/activity-areas");
    const activityareas = data.map((area: response) => {
      return { id: area.id, name: area.name.toUpperCase() };
    });
    return (
      <div>
        <FormCompany activityareas={activityareas} />
      </div>
    );
  } catch (error) {
    return (
      <div>
        <FormCompany activityareas={[]} />
      </div>
    );
  }
}
