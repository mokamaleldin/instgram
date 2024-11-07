import Suggestions from "./Suggestions/Suggestions"

const Firends = () => {
    return (
        <div>
            {/* my avatar */}
            <div className="flex justify-between gap-8 items-center">
                <img src="/user/myuser.png" alt="" className="h-10 w-10 rounded-full" />
                <div>
                    <p className="text-sm font-medium">mokamaleldin</p>
                    <p className="text-sm text-gray-700">mohamed kamaleldin</p>
                </div>
                <p className="text-blue-500">Switch</p>
            </div>
            {/* suggestions for you */}
            <div className="flex justify-between gap-8 items-center mt-8">
                <p className="font-medium text-gray-700">Suggestions for you</p>
                <p className="text-blue-500">See All</p>
            </div>
            <Suggestions name="mohamed kamaleldin" userName="mokamaleldin" />
            <Suggestions name="alimkee sakbrl" userName="sakbrl" />
            <Suggestions name="Ahmed shop" userName="organic__al" />
            <Suggestions name="ali imkir" userName="imkir" />
        </div>
    )
}
export default Firends