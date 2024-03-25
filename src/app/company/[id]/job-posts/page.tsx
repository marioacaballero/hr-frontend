import { apiservice } from "@/utils/service-api";
import { response } from "@/utils/types/response";
import LeftPanel from "./components/LeftPanel";
import PostForm from "./components/post-form";

export default async function Post() {
  const res = await apiservice.get("/activity-area");
  const activityareas = res.data.message
    ? []
    : res.data.map((area: response) => {
        return { id: area.id, name: area.name.toUpperCase() };
      });

  return (
    <div className="flex bg-white">
      <LeftPanel />
      <PostForm activityareas={activityareas} />
    </div>
  );
}
