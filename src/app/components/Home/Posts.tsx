import Post from "./posts/Post"
import Story from "./posts/Story"

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
        </div>
    )
}
export default Posts