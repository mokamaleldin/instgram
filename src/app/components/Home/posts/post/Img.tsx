import Image from "next/image"

const Img = () => {
    return (
        <Image src="/post/test1.png" width={300} height={300} alt="test1" className="mt-2" />
    )
}
export default Img