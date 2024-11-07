import SideBar from "@/app/components/AllPage/SideBar"
import Profile from "@/app/components/Profile/Profile"

const page = () => {
    return (
        <main className="flex gap-10 m-5 items-start justify- ">
            <SideBar />
            <Profile />
        </main>
    )
}
export default page