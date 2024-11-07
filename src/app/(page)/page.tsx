import Firends from "../components/Home/Firends/Firends";
import Posts from "../components/Home/posts/Posts";
import SideBar from "../components/AllPage/SideBar";

export default function Home() {
  return (
    <main className="flex gap-10 m-5 items-start justify-between">
      <SideBar />
      <Posts />
      <Firends />
    </main>
  );
}
