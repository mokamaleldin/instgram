const Suggestions = ({ name, userName }: { name: string, userName: string }) => {
    return (
        <div className="py-3">
            <div className="flex justify-between gap-8 items-center">
                <img src="/user/user.png" alt="" className="h-10 w-10 rounded-full" />
                <div >
                    <p className="text-sm font-medium">{name}</p>
                    <p className="text-sm text-gray-700">{userName}</p>
                </div>
                <p className="text-blue-500">Follow</p>
            </div>
        </div>
    )
}
export default Suggestions