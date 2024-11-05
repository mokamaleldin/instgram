"use client";
import { useState } from "react";
import Image from "next/image";

const Details = () => {
    //Like
    const [likes, setLikes] = useState(100);
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
        setLikes(prevLikes => prevLikes + (liked ? -1 : 1));
    };

    //comments
    const [comments, setComments] = useState([
        "Nice post!",
        "Love it!",
        "Awesome work!"
    ]);
    const [newComment, setNewComment] = useState("");
    const [showComments, setShowComments] = useState(false);


    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment("");
        }
    };

    return (
        <div className="mt-1">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <button onClick={handleLike}>
                        <Image
                            src={"/icons/like.svg"}
                            width={20}
                            height={20}
                            alt="like"
                        />
                    </button>
                    <Image src="/icons/comment.svg" width={20} height={20} alt="comment" />
                    <Image src="/icons/share.svg" width={20} height={20} alt="share" />
                </div>
                <div>
                    <Image src="/icons/save.svg" width={20} height={20} alt="save" />
                </div>
            </div>
            <div className="mt-1">
                <span>{likes} likes</span>
            </div>
            <div className="mt-1">
                <span className="font-medium">username</span>
                <span> caption</span>
            </div>
            <div className="mt-1">
                <button onClick={() => setShowComments(!showComments)} className="text-gray-500">
                    View all {comments.length} comments
                </button>
            </div>
            {showComments && (
                <div className="mt-1">
                    {comments.map((comment, index) => (
                        <div key={index} className="text-gray-500">
                            {comment}
                        </div>
                    ))}
                </div>
            )}
            <div className="mt-1 flex items-center gap-2">
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Add a comment..."
                    className="border-b border-gray-300 focus:outline-none"
                />
                <button onClick={handleAddComment} className="text-blue-500">
                    Post
                </button>
            </div>
        </div>
    );
};

export default Details;
