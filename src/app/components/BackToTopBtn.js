'use client'

import { useEffect, useState } from "react"

import {FaChevronUp} from "react-icons/fa"

//react scroll
import {Link} from "react-scroll"
export default function BackToTopBtn() {

  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setIsActive(true)
      } else {
        setIsActive(false)
      }
    })
  })

  return (
    <Link
    to="home"
    smooth
    className={`${!isActive && "hidden"} fixed bg-accent hover:bg-accent-hover w-12 h-12 right-16 bottom-11 cursor-pointer flex justify-center items-center text-white border-2 border-white`}>
    <FaChevronUp className="text-xl"/>
    </Link>
  )
}
