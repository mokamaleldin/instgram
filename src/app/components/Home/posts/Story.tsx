import Image from "next/image"

const Story = () => {
    return (
        <div>
            <div className="flex flex-col items-center">
                <Image src="/storyImg.png" alt="story" width={50} height={50} className="rounded-full w-14 h-14" />
                <p className="text-sm">Username</p>
            </div>
        </div>
    )
}
export default Story