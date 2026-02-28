import { FaCrown } from "react-icons/fa";
import ContactBox from "../component/layout/ContactBox";
import Help from "../component/layout/Help";
import FaqRating from "../component/layout/FaqRating";
import SupportChannel from "../component/layout/SupportChannel";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoMdSearch } from "react-icons/io";
import { IoMdInformationCircle } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import FaqBox from "../component/layout/FaqBox";


export default function ContactPage(){
    return(
        <>
        <div className="flex flex-col items-center justify-start py-20 md:justify-center bg-[#a34ff7] w-full h-screen">
                <div className="rounded-2xl py-2 px-4 bg-[#b471f9] flex items-center gap-2 mb-4">
                    <FaCrown fill="#facc15" />
                <p className=" text-white  ">Support that actually responds</p>
                </div>
                <div className="mb-6 inline-flex items-center gap-2 max-w-4xl text-center">
                <h1 className="mb-8 text-4xl font-bold leading-tight md:text-7xl text-white">We’re Here to 
                    <span className="text-yellow-300"> Help </span>
                </h1>
                </div>
                <p className="md:w-4xl leading-relaxed text-xl mb-10 text-purple-100 md:text-2xl text-center">Reach us through email, Instagram, or our 24/7 chat bot. Pick what’s fastest for your situation.</p>
                <div className="flex flex-wrap justify-center items-center gap-8">
                    <a href="">
                <button className="flex items-center gap-2 rounded-full bg-white px-10 py-5 text-lg font-semibold text-[#9139f6] shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-100 " type="button">Email Support</button>
                </a>
                <a href="">
                <button className="rounded-full border-2 border-white bg-transparent px-10 py-5 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10" type="button">View All Channels</button>
                </a>
                </div>
                </div>

                <div className="bottom-5 relative z-20">
                    <div className="opacity-100 transform-none mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <ContactBox />
                        <ContactBox />
                        <ContactBox />
                    </div>
                    </div>
                </div>

                 <div className="flex flex-col items-center pt-24 px-4">
            <h1 className="text-[#ab63f9] font-semibold text-4xl">Choose Your Support Channel</h1>
            <p className="text-gray-600 text-xl py-8 mb-4">Different questions, different channels. Pick what matches your need and urgency.</p>
            </div>

            <SupportChannel/>
            <SupportChannel/>
            <SupportChannel/>
            <div className="mt-12 mx-4 md:mx-38 bg-linear-to-r from-[#9139f6] to-[#c084fc] rounded-2xl p-8 text-white">
            <div className="flex items-start gap-4">
            <div className="text-3xl mt-1">
                <RiContactsBook3Line />
            </div>
            <div className="">
                <h3 className="text-2xl font-bold mb-3">Why We Don’t Use Contact Forms</h3>
                <p className="opacity-90 mb-4">Direct channels reduce delays and help us respond with full context. You’ll get:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc py-5">
  <li>
    <div className="flex items-center gap-2">
      Faster response times
    </div>
  </li>

  <li>
    <div className="flex items-center gap-2">
      Better tracking of your request
    </div>
  </li>

  <li>
    <div className="flex items-center gap-2">
      Direct communication with support
    </div>
  </li>

  <li>
    <div className="flex items-center gap-2">
      More accurate solutions
    </div>
  </li>
</ul>
            </div>
            </div>
            </div>

            <div className="flex flex-col items-center pt-24 px-4">
            <h1 className="text-[#ab63f9] font-semibold text-4xl">Frequently Asked Questions</h1>
            <p className="text-gray-600 text-xl py-8 mb-4">Search and filter to find answers quickly. If you’re still stuck, open the chat bot or email support.</p>
            </div>
            <div className="mb-10 mx-4 md:mx-12">
                <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-stretch gap-4 md:items-center">
                <div className="flex items-center w-full pl-11 pr-4 py-3 gap-2 rounded-2xl focus:ring-purple-100 bg-white border border-purple-100">
                    <IoMdSearch />
                    <input placeholder="Search FAQs (e.g., transfer, wallet, payout)..." className="focus:outline-none w-full" type="text" />
                </div>
                <button type="button" className="px-5 py-3 rounded-2xl border border-purple-200 text-gray-800 hover:bg-purple-50 transition-colors font-semibold">Reset</button>
                
                </div>
                <div className="mt-4 flex flex-wrap  gap-2 justify-center">
                    <button className="px-4 py-2 rounded-full font-semibold transition-all duration-300 border flex items-center gap-2 bg-linear-to-r from-[#9139f6] to-[#c084fc] text-white border-transparent shadow-lg" type="button">
                        <span className="text-sm">
                            <IoMdInformationCircle />
                            </span>
                            "All"
                            </button>
                <button className="px-4 py-2 rounded-full font-semibold transition-all duration-300 border flex items-center gap-2 bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100" type="button">General</button>
                <button className="px-4 py-2 rounded-full font-semibold transition-all duration-300 border flex items-center gap-2 bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100" type="button">Tickets</button>
                <button className="px-4 py-2 rounded-full font-semibold transition-all duration-300 border flex items-center gap-2 bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100" type="button">Payments</button>
                <button className="px-4 py-2 rounded-full font-semibold transition-all duration-300 border flex items-center gap-2 bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100" type="button">Events</button>
                <button className="px-4 py-2 rounded-full font-semibold transition-all duration-300 border flex items-center gap-2 bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100" type="button">Account</button>
                </div>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500 mb-8">
                    <FaCheckCircle fill="green" />
                    <span className="">
                        showing
                        <b className="text-gray-700 "> 16</b>
                         " of
                        <b className="text-gray-700"> 16</b>
                        " FAQs
                    </span>
                </div>
<FaqBox/>
<FaqBox/>
<FaqBox/>
<FaqBox/>
<FaqBox/>
<FaqBox/>
<FaqBox/>
<FaqBox/>
<FaqBox/>
<FaqBox/>
<FaqBox/>
<FaqBox/>
<FaqBox/>
<FaqBox/>
<FaqBox/>
<FaqBox/>


            </div>

                <FaqRating/>
                <Help/>
                

                
        </>
    )
}