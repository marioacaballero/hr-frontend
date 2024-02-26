import JobFilters from "./components/JobFilters";
import JobOffers from "./components/JobOffers";

export default function Jobs() {
  return (
    <div className="mt-1 flex min-h-screen gap-10 bg-white pb-20">
      <JobFilters />
      <JobOffers />
    </div>
  );
}
