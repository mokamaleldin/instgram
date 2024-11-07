import Post from "./Post"
import Story from "./Story"


const Posts = () => {
    return (
        <div>
            <div className="flex gap-4">
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}
export default Posts