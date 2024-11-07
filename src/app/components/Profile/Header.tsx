const Header = () => {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <img src="https://picsum.photos/200" alt="profile" className="w-16 h-16 rounded-full" />
                    <div>
                        <h2 className="font-bold">John Doe</h2>
                        <p>5 posts</p>
                    </div>
                </div>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Follow</button>
            </div>
        </div>
    )
}
export default Header