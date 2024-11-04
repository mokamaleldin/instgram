import Image from "next/image"

const SideBar = () => {
    return (
        <div className="flex flex-col gap-6 ">
            <h2 className="text-2xl font-bold">Mkee</h2>
            <div className="flex gap-3 items-center">
                <Image src='/sideBar/home.svg' alt='home' width={24} height={24} />
                <h3 className="text-lg">Home</h3>
            </div>
            <div className="flex gap-3 items-center">
                <Image src='/sideBar/search.svg' alt='home' width={24} height={24} />
                <h3 className="text-lg">Search</h3>
            </div>
            <div className="flex gap-3 items-center">
                <Image src='/sideBar/Notifications.svg' alt='home' width={24} height={24} />
                <h3 className="text-lg">Notifications</h3>
            </div>
            <div className="flex gap-3 items-center">
                <Image src='/sideBar/Create.svg' alt='home' width={24} height={24} />
                <h3 className="text-lg">Create</h3>
            </div>
            <div className="flex gap-3 items-center">
                <Image src='/sideBar/Profile.svg' alt='home' width={24} height={24} />
                <h3 className="text-lg">Profile</h3>
            </div>
        </div >
    )
}
export default SideBar