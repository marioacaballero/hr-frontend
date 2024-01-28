import LeftPanel from "./components/LeftPanel";
import PostForm from "./components/post-form";

export default function Post() {
  return (
    <div className="flex bg-white">
    <LeftPanel />
    <PostForm />
    </div>
  )
}
