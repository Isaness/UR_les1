"use client"

import { useState } from "react"
import SidebarSlider from "@/components/SidebarSlider"
import { GiHamburgerMenu } from "react-icons/gi"
import Link from "next/link" // 1. Importeer Link

export default function GlobalNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      {/* Always Visible Top Navbar */}
<header className="sticky top-0 left-0 w-full z-50 bg-white border-b border-gray-200 py-4">
  {/* Rest van je code... */}
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand/Logo Name - Nu klikbaar gemaakt */}
          <Link href="/home" className="text-xl font-bold text-gray-800 hover:opacity-70 transition-opacity cursor-pointer">
            Hoefkens Vanessa
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-row items-center space-x-8">
            <Link href="/home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
            <Link href="/project" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Project</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</Link>
            
            {/* Login Button */}
            <Link href="/login" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors leading-none">
              Login
            </Link>
          </nav>
          
        </div>
      </header>

      {/* Spacer */}
      {/* <div className="h-20"></div>  */}
    </>
  )
}
