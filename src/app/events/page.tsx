import { MdOutlineFilterAlt } from "react-icons/md";


export default function EventsPage() {
  return (
    <>
    <div className="flex items-center justify-between mx-4 md:mx-30 p-8 mx:p-4 rounded-sm bg-[#f5f5f5]">
    <div>
<h2>Events</h2>
<div className="flex items-center justify-between gap-4">
<p>Home</p>
<p>events</p>
</div>
    </div>
    <p>BitBandy</p>
    </div>
<div className="mx-4 md:mx-30">
  <div className="flex justify-between items-center">
<h1 className="text-3xl pt-4 pb-2 font-semibold">Browse Events</h1>
<p className="hidden lg:block">2 events found</p>
  </div>
  <p>Discover upcoming experiences, workshops and more on Bitbandy.</p>
</div>
<div className=" lg:hidden flex items-center gap-2 mx-4 border rounded-sm border-purple-500 w-36 p-2 my-4">
  <MdOutlineFilterAlt />
  <button>Show Filters</button>
</div>
<div
className="mx-4 md:mx-30 py-3 flex items-center gap-4">
<span>Show:</span>
<button className="bg-purple-500 text-white text-base rounded-sm py-2 px-4">Upcoming Events</button>
<button className="bg-[#f5f5f5] text-base rounded-sm py-2 px-4">Past Events</button>
</div>
    </>
    
  );
}