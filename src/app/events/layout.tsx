import { MdKeyboardArrowUp } from "react-icons/md";
import Image from "next/image"
import { IoLocationSharp } from "react-icons/io5";


export default function EventsLayout({
children,}: Readonly<{
    children: React.ReactNode;
}>){
 return(
    <div>
        {children}
        <div className="flex gap-10 mx-4 md:mx-30 my-8 ">
            <div className="flex flex-wrap items-start gap-4">
                <div className="w-full md:w-fit">
                    <Image className="rounded-t-lg w-full md:w-70" src="/card_3.png" alt="cardImage" width={300} height={300} />
                    <div className="bg-[#f5f5f5] px-4 py-8 rounded-b-lg">
                        <p className="font-semibold text-xl py-2">Sip & Paint</p>
                        <div className="flex items-center gap-2 py-4">
                            <IoLocationSharp  fill="#ad46ff"/>
                            <p className="font-semibold">Port Harcourt</p>
                        </div>
                        
                        <button className="py-2 text-white font-semibold bg-purple-500 w-full rounded-lg">Attend Event</button>
                    </div>

                </div>
                <div className="w-full md:w-fit">
                    <Image className="rounded-t-lg w-full md:w-70" src="/card_3.png" alt="cardImage" width={300} height={300} />
                    <div className="bg-[#f5f5f5] px-4 py-8 rounded-b-lg">
                        <p className="font-semibold text-xl py-2">R & B Jam</p>
                        <div className="flex items-center gap-2 py-4">
                            <IoLocationSharp  fill="#ad46ff"/>
                            <p className="font-semibold">Amora Resort, 1st</p>
                        </div>
                        <button className="py-2 text-white font-semibold bg-purple-500 w-full rounded-lg">Attend Event</button>
                    </div>
                </div>
                <div className="w-full md:w-fit">
                    <Image className="rounded-t-lg w-full md:w-70" src="/card_3.png" alt="cardImage" width={300} height={300} />
                    <div className="bg-[#f5f5f5] px-4 py-8 rounded-b-lg">
                        <p className="font-semibold text-xl py-2">Eazy Fight</p>
                        <div className="flex items-center gap-2 py-4">
                            <IoLocationSharp  fill="#ad46ff"/>
                            <p className="font-semibold">Port Harcourt</p>
                        </div>
                        <button className="py-2 text-white font-semibold bg-purple-500 w-full rounded-lg">Attend Event</button>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex md:flex-col border-l border-[#6b7280] px-6">
            <p className="text-purple-500 text-sm py-2">FILTERS</p>
            <h3 className="font-semibold text-xl">Refine your search</h3>
            <p className="text-xs text-[#6b7280] py-1">Narrow results by date, price, location and more.</p>
            <div>
                <div className="pt-8">
            <div className="hover:bg-[#f5f5f5] p-4 flex items-center justify-between font-semibold text-xl">
              <h2 className="pb-4"><span className="border-b-2 pb-2 border-purple-500">Event</span> Name</h2>  
                <MdKeyboardArrowUp />
            </div>
            <input className="border outline-0 border-[#6b7280] rounded-lg px-4 py-1 my-4" type="text" placeholder="Search by name"/>
            <p className="text-purple-500">Clear</p>
            </div>
             <div className="pt-8">
            <div className="hover:bg-[#f5f5f5] p-4 flex items-center justify-between font-semibold text-xl">
              <h2 className="pb-4"><span className="border-b-2 pb-2 border-purple-500">Event</span> Type</h2>  
                <MdKeyboardArrowUp />
            </div>
            <input className="border outline-0 border-[#6b7280] rounded-lg px-4 py-1 my-4" type="text" placeholder="Select type"/>
            <p className="text-purple-500">Clear</p>
            </div>
             <div className="pt-8">
            <div className="hover:bg-[#f5f5f5] p-4 flex items-center justify-between font-semibold text-xl">
              <h2 className="pb-4"><span className="border-b-2 pb-2 border-purple-500">Location</span> </h2>  
                <MdKeyboardArrowUp />
            </div>
            <input className="border outline-0 border-[#6b7280] rounded-lg px-4 py-1 my-4" type="text" placeholder="e.g..Lagos, Abuja,Online"/>
            <p className="text-purple-500">Clear</p>
            </div>
             <div className="pt-8">
            <div className="hover:bg-[#f5f5f5] p-4 flex items-center justify-between font-semibold text-xl">
              <h2 className="pb-4"><span className="border-b-2 pb-2 border-purple-500">Ticket</span> Availability</h2>  
                <MdKeyboardArrowUp />
            </div>
            <input className="border outline-0 border-[#6b7280] rounded-lg px-4 py-1 my-4" type="text" placeholder="e.g. 10"/>
            <p className="text-purple-500">Clear</p>
            </div>
             <div className="pt-8">
            <div className="hover:bg-[#f5f5f5] p-4 flex items-center justify-between font-semibold text-xl">
              <h2 className="pb-4"><span className="border-b-2 pb-2 border-purple-500">Ticket</span> Price Name (N)</h2>  
                <MdKeyboardArrowUp />
            </div>
            <input className="border outline-0 border-[#6b7280] rounded-lg px-4 py-1 my-4" type="text" placeholder="Search by name"/>
            <p className="text-purple-500">Clear</p>
            </div>
             <div className="pt-8">
            <div className="hover:bg-[#f5f5f5] p-4 flex items-center justify-between font-semibold text-xl">
              <h2 className="pb-4"><span className="border-b-2 pb-2 border-purple-500">Start </span>Date Range</h2>  
                <MdKeyboardArrowUp />
            </div>
            <input className="border outline-0 border-[#6b7280] rounded-lg px-4 py-1 my-4" type="text" placeholder="Search by name"/>
            <p className="text-purple-500">Clear</p>
            </div>
            <div className="pt-8">
            <div className="hover:bg-[#f5f5f5] p-4 flex items-center justify-between font-semibold text-xl">
              <h2 className="pb-4"><span className="border-b-2 pb-2 border-purple-500">Event</span> Duration</h2>  
                <MdKeyboardArrowUp />
            </div>
            <input className="border outline-0 border-[#6b7280] rounded-lg px-4 py-1 my-4" type="text" placeholder="e.g. 10"/>
            <p className="text-purple-500">Clear</p>
            </div>
             <div className="pt-8">
            <div className="hover:bg-[#f5f5f5] p-4 flex items-center justify-between font-semibold text-xl">
              <h2 className="pb-4"><span className="border-b-2 pb-2 border-purple-500">Sort</span> Order</h2>  
                <MdKeyboardArrowUp />
            </div>
            <input className="border outline-0 border-[#6b7280] rounded-lg px-4 py-1 my-4" type="text" placeholder="Select sort order"/>
            <p className="text-purple-500">Clear</p>
            </div>
            </div>
            </div>
        </div>

    </div>
 )
}
