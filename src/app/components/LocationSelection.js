"use client";

import { useState } from "react";

//handless ui
import { Menu } from "@headlessui/react";

//icons
import { FaMapMarkerAlt } from "react-icons/fa";

//locations

const locations = [
  "Istanbul sokak 123, Turkiye",
  "Ankara sokak 456, Turkiye",
  "Kirklareli sokak 789, Turkiye",
];

export default function LocationSelection() {
  const [location, setLocation] = useState("Select Location");

  return (
    <Menu as="div" className="w-full h-full flex xl:flex-row">
      <div className="relative flex xl:block flex-col flex-1 xl:border-r xl:border-black/10 items-center justify-center">
        {/* btn */}
        <Menu.Button className="dropdown-btn w-content h-full flex flex-col justify-center items-center xl:items-start xl:pl-8">
          <div className="w-full h-16 xl:h-full flex justify-center xl:justify-start ">
            <div className="flex flex-col justify-center ">
              <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
                <FaMapMarkerAlt className="text-accent" />
                <div className="text-[15px] uppercase font-bold">Select Location</div> 
              </div>
              <div className="uppercase font-medium text-[13px] text-secondary text-center xl:ml-6 xl:text-left">{location}</div>
            </div>
          </div>
        </Menu.Button>
        {/* items */}
        <Menu.Items>Menu items</Menu.Items>
      </div>
    </Menu>
  );
}
