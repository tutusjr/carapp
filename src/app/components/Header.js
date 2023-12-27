"use client";

import SearchMobile from "./SearchMobile";

import Image from "next/image";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { BiMenuAltRight } from "react-icons/bi";
import { BiX } from "react-icons/bi";

import { useContext, useEffect, useState } from "react";

import { SearchContext } from "../context/search";

export default function Header() {
  const { setSearchActive } = useContext(SearchContext);

  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      //header
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      //search
      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-transparent shadow-none py-4"
      } fixed w-full max-w-[1920px] mx-auto z-10 transition-all duration-300`}
    >
      <div className="xl:container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          {/* logo */}
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <Image src={"/icons/logo.svg"} width={194} height={64} />
          </Link>
          {/* nav open menu */}
          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        {/* nav */}
        <nav
          className={`${
            nav ? "max-h-max py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
          } flex flex-col w-full bgtransparent gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bgtransparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case`}
        >
          <Link
            className="cursor-pointer"
            to="home"
            smooth={desktopMode}
            spy={true}
            activeClass="active"
          >
            Home
          </Link>
          <Link
            className="cursor-pointer"
            to="cars"
            smooth={desktopMode}
            spy={true}
            activeClass="active"
          >
            Cars
          </Link>
          <Link
            className="cursor-pointer"
            to="about"
            smooth={desktopMode}
            spy={true}
            activeClass="active"
          >
            About
          </Link>
          <Link
            className="cursor-pointer"
            to="why"
            smooth={desktopMode}
            spy={true}
            activeClass="active"
          >
            Why us?
          </Link>
          <Link
            className="cursor-pointer"
            to="testimonial"
            smooth={desktopMode}
            spy={true}
            activeClass="active"
          >
            Testimonials
          </Link>
          <Link
            className="cursor-pointer"
            to="contact"
            smooth={desktopMode}
            spy={true}
            activeClass="active"
          >
            Contact
          </Link>
          <Link
            className="xl:hidden btn btn-primary btn-sm max-w-[164px] mx-auto"
            to="/"
            smooth={desktopMode}
            spy={true}
            activeClass="active"
          >
            See all cars
          </Link>
          <Link
            className="cursor-pointer"
            to="/searchmobile"
            smooth={desktopMode}
            spy={true}
            activeClass="active"
          >
            <SearchMobile />
          </Link>
        </nav>
      </div>
    </header>
  );
}
