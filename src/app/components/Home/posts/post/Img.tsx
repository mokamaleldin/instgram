import Image from "next/image"

const Img = () => {
    return (
        <Image src="/post/test1.png" width={500} height={500} alt="test1" className="mt-2" />
    )
}
export default Img