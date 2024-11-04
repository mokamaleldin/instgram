import Image from "next/image"
import User from "./post/User"
import Img from "./post/Img"

const Post = () => {
    return (
        <div className="mt-16">
            <User />
            <Img />
        </div>
    )
}
export default Post