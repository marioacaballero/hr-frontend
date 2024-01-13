import Image from "next/image";
import JobSearch from "./components/job-search/JobSearch";
import Comunity from "./components/comunity/Comunity";
import Opinions from "./components/opinions/Opinions";
import Blog from "./components/blog/Blog";
import cross from "../../public/cross.png";

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
