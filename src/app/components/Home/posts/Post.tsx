import User from "./post/User"
import Img from "./post/Img"
import Details from "./post/Details"

const Post = () => {
    return (
        <div className="mt-16">
            <User />
            <Img />
            <Details />
        </div>
    )
}
export default Post