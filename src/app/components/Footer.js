"use client";

import Image from "next/image";
import { FaPhone, FaEnvelope } from "react-icons/fa";

import Copyright from "./Copyright";

import { motion } from "framer-motion";

import { fadeIn } from "/variants";

//link /  react scroll
import { Link } from "react-scroll";

export default function Footer() {
  return (
    <footer className="pt-20 bg-white z-20" id="contact">
      <div className="container mx-auto">
        {/* grid */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14 "
        >
          <div className="flex flex-col flex-1 gap-y-8">
            {/* logo */}
            <Link to="home" smooth spy className="cursor-pointer">
              <Image
                src={"/icons/logo.svg"}
                width={200}
                height={200}
                alt="logo"
              />
            </Link>
            {/* text */}
            <div className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            {/* phone and email */}
            <div className="flex flex-col gap-y-4 font-semibold">
              {/* phone */}
              <div className="flex items-center gap-x-[10px]">
                <FaPhone />
                <div className="font-medium">+123 456 789</div>
              </div>
              {/* email */}
              <div className="flex items-center gap-x-[10px]">
                <FaEnvelope />
                <div className="font-medium">office@example.com</div>
              </div>
              <div></div>
            </div>
          </div>
          {/* links */}
          <div className="flex-1 flex flex-col xl:items-center">
            <div>
              <h3 className="h3 font-bold mb-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li><a href="">Istanbul</a></li>
                <li><a href="">Careers</a></li>
                <li><a href="">Mobile</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">How we work</a></li>
              </ul>
            </div>
          </div>
          {/* program */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8">Working Hours</h3>
            <div className="flex flex-col gap-y-4 text-secondary">
              <div className="flex gap-x-2">
                <div>Mon-Fri:</div>
                <div className="font-semibold">09:00 - 21:00</div>
              </div>
              <div className="flex gap-x-2">
                <div>Sat:-Fri:</div>
                <div className="font-semibold">09:00 - 19:00</div>
              </div>
              <div className="flex gap-x-2">
                <div>Sun:</div>
                <div className="font-semibold">Closed</div>
              </div>
            </div>
          </div>
          {/* news */}
          <div className="flex-1">
            <h3 className="h3 font-bold mb-8"> Newsletter</h3>
            <div className="mb-9 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            {/* form */}
            <form className="flex gap-x-2 h-14">
              <input type="email" placeholder="Enter your email" className="outline-none bg-white h-full border rounded-lg pl-4 focus:border-accent" />
              <button type="submit" className="btn btn-sm btn-accent w-24">Submit</button>
            </form>
          </div>
        </motion.div>
      </div>
      <Copyright />
    </footer>
  );
}
