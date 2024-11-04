import Posts from "../components/Home/Posts";
import SideBar from "../components/Home/SideBar";

export default function Home() {
  return (
    <main className="flex gap-10 m-5">
      <SideBar />
      <Posts />
    </main>
  );
}
