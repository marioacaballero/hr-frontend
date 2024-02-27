import { apiservice } from "@/utils/service-api";
import AllActivities from "./components/all-activities";

export default async function page() {
  try {
    const { data } = await apiservice.get("/activity-area");
    return <AllActivities activities={data} />;
  } catch (error) {
    return <AllActivities activities={[]} />;
  }
}
