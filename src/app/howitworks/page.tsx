import { FaCrown } from "react-icons/fa6";

export default function HowItWorks(){
return (
    <> 
    <div>
     <div className="flex flex-col items-center justify-center bg-[#a34ff7] w-full h-screen">
            <div className="rounded-2xl py-2 px-4 bg-[#b471f9] flex items-center gap-2 mb-4">
                {/* <FaCrown fill="#facc15" /> */}
            <p className=" text-white  ">🎉 The Complete Event Platform</p>
            </div>
            <div className=" inline-flex items-center gap-2 max-w-4xl text-center">
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-7xl text-white">Create Unforgettable Events in  
                <span className="text-yellow-300"> Minutes </span>
                </h1>
                </div>
            <p className="md:w-4xl leading-relaxed text-xl mb-10 text-purple-100 md:text-2xl text-center">Everything you need to plan, promote, and profit from your events—all in one powerful platform</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
                <a href="">
            <button className="flex items-center gap-2 rounded-full bg-white px-10 py-5 text-lg font-semibold text-[#9139f6] shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-100 " type="button">Get Started Free</button>
            </a>
            <a href="">
            <button className="rounded-full border-2 border-white bg-transparent px-10 py-5 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10" type="button">See How It Works</button>
            </a>
            </div>
            </div>
            </div>
    </>
)
}