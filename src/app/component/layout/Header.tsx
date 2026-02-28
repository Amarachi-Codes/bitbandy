// import Link from "next/link"

// export default function Header() {
//   return (
    // <div className="sticky top-0 z-50 bg-white flex justify-between items-center h-16 w-full px-30">
    //   <nav className=" flex gap-4 py-1.5 items-center">
    //   <Link href="/">BitBandy</Link>
    //   <span className="bg-[#f5f5f5] flex items-center gap-4 px-4 py-1.5 rounded-sm">
    //   <Link className="bg-purple-500 text-white rounded-lg py-1 px-4" href="/events">Events</Link>
    //   <Link href="/about">About Us</Link>
    //   <Link href="/contact">Contact</Link>
    //   <Link href="/howitworks">How it works</Link>
    //   </span>
    //   </nav>
    //   <div className="flex gap-4">
    //     <button className="bg-purple-500 text-white text-base rounded-sm py-2 px-4">Sign up</button>
    //     <button className="border border-purple-500 rounded-sm text-purple-500 text-base py-2 px-4">Sign in</button>
    //   </div>
    // </div>


    
//   )
// }

"use client"
import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="flex justify-between items-center h-16 w-full px-4 sm:px-6 lg:px-12">

        {/* Logo */}
        <Link href="/" className="font-bold text-lg">
          BitBandy
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link className="bg-purple-500 text-white rounded-lg py-1 px-4" href="/events">
            Events
          </Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/howitworks">How it works</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="bg-purple-500 text-white rounded-sm py-2 px-4">
            Sign up
          </button>
          <button className="border border-purple-500 text-purple-500 rounded-sm py-2 px-4">
            Sign in
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white">
          <Link href="/events" className="block">Events</Link>
          <Link href="/about" className="block">About Us</Link>
          <Link href="/contact" className="block">Contact</Link>
          <Link href="/howitworks" className="block">How it works</Link>
          <Link href="/howitworks" className="block"> Sign up</Link>
          <Link href="/howitworks" className="block"> Sign in</Link>
          
        </div>
      )}
    </div>
  )
}
