import Image from "next/image";
import cross from "../../public/cross.png";
import Blog from "./components/blog/Blog";
import Comunity from "./components/comunity/Comunity";
import JobSearch from "./components/job-search/JobSearch";
import Opinions from "./components/opinions/Opinions";

export default function Home() {
  return (
    <main>
      <JobSearch />
      <Comunity />
      <Opinions />
      <div className="w-full bg-white">
        <Image src={cross} alt="cross" width={150} />
      </div>
      <Blog />
    </main>
  );
}
