import React from "react";
import JobFilters from "./components/JobFilters";
import JobOffers from "./components/JobOffers";

function Jobs(): React.ReactElement {
  return (
    <div className="flex min-h-screen gap-10 bg-white pb-20">
      <JobFilters />
      <JobOffers />
    </div>
  );
}

export default Jobs;
