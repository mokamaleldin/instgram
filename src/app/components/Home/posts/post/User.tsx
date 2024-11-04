import Image from "next/image"
import Link from "next/link"

const User = () => {
    return (
        <Link href={'/'} className="flex flex-row gap-1 items-center">
            <Image src="/storyImg.png" alt="story" width={25} height={25} className="rounded-full w-10 h-10" />
            <p className="text-sm">Username</p>
            <p className="text-sm ">
                . 1h
            </p>
        </Link>
    )
}
export default User