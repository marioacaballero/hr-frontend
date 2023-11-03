import JobSearch from "./components/job-search/JobSearch";
import Comunity from "./components/comunity/Comunity";
import Opinions from "./components/opinions/Opinions";
import Blog from "./components/blog/Blog";

export default function Home() {
  return (
    <main>
      <JobSearch />
      <Comunity />
      <Opinions />
      <Blog />
    </main>
  );
}
