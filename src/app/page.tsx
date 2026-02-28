

export default function Page() {
  return (
    <>
    <div className="flex items-center justify-between mx-30 p-4 rounded-sm bg-[#f5f5f5]">
    <div>
<h2>Events</h2>
<div className="flex items-center justify-between gap-4">
<p>Home</p>
<p>events</p>
</div>
    </div>
    <p>BitBandy</p>
    </div>
<div className="mx-30">
  <div className="flex justify-between items-center">
<h1 className="text-3xl pt-4 pb-2 font-semibold">Browse Events</h1>
<p>2 events found</p>
  </div>
  <p>Discover upcoming experiences, workshops and more on Bitbandy.</p>
</div>
<div
className="mx-30 py-3 flex items-center gap-4">
<span>Show:</span>
<button className="bg-purple-500 text-white text-base rounded-sm py-2 px-4">Upcoming Events</button>
<button className="bg-[#f5f5f5] text-base rounded-sm py-2 px-4">Past Events</button>
</div>
    </>
    
  );
}
