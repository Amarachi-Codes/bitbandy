export default function FaqRating(){
    return(
        <>
<div className="my-16 mx-4 md:mx-30 rounded-2xl text-white border border-purple-100 bg-linear-to-r from-[#9139f6] to-[#c084fc] p-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
                <p className="mb-2 text-3xl font-bold ">16</p>
                <p className="">FAQs Available</p>
            </div>

            <div className="text-center">
                <p className="mb-2 text-3xl font-bold">24/7</p>
                <p className="">Chat Bot</p>
            </div>

            <div className="text-center">
                <p className="mb-2 text-3xl font-bold">95%</p>
                <p className="">Questions Resolved</p>
            </div>

            <div className="text-center">
                <p className="mb-2 text-3xl font-bold">24h</p>
                <p className="">Email Response</p>
            </div>
            </div>
        </div>
        </>


    )
}