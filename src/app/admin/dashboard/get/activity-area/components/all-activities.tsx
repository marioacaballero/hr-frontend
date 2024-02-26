import { ActivityArea } from "@/utils/types/admin-dashboard";
import { For } from "million/react";
import Link from "next/link";

export default function AllActivities({
  activities,
}: {
  activities: ActivityArea[];
}) {
  return (
    <div className="flex h-screen justify-center py-32">
      <div className="w-2/3 border border-black bg-white p-32 shadow-md shadow-black">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">
            Lista de todas las actividades registradas
          </h1>
          <Link
            href="/admin/dashboard/post/activity-area"
            className="rounded-md border border-black bg-gray-200 p-2 transition-all hover:bg-gray-300"
          >
            Crear actividad
          </Link>
        </div>
        {activities.length ? (
          <ul>
            <For each={activities}>
              {(activity) => (
                <li key={activity.id} className="uppercase">
                  - {activity.name}
                </li>
              )}
            </For>
          </ul>
        ) : (
          <p>No hay actividades registradas</p>
        )}
      </div>
    </div>
  );
}
