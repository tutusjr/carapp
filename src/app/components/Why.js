"use client";

import Image from "next/image";

//framer motion
import { motion } from "framer-motion";
//variant
import { fadeIn } from "/variants";
//icons
import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";
export default function Why() {
  return (
    <section className="section flex items-center" id="why">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="h2 text-center"
        >
          Unmatched excellence and customer satisfaction
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="max-w-[680px] text-center mx-auto mb-2"
        >
          Our deducation to providing exceptional services sets us apart from
          the competition. From the moment you engage with us, we strive to
          exceed your expectations in every interaction.
        </motion.p>
        {/* car image */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="hidden md:flex justify-center mb-6 xl:mb-2"
        >
          <Image
            src={"/images/why/car.svg"}
            width={1060}
            height={420}
            alt="car"
          />
        </motion.div>
        {/* grid items */}
        <div className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]">
          {/* item 1 */}
          <motion.div
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0"
          >
            <MdKey className="text-[38px] to-accent mb-4" />
            <h3 className="h3">Rent simply and quickly</h3>
            <p className="hidden xl:flex">
              we prioritize your need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding.
            </p>
          </motion.div>
          {/* item 2 */}
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0"
          >
            <MdTrendingUp className="text-[38px] to-accent mb-4" />
            <h3 className="h3">Modern $ well maintained vehicles</h3>
            <p className="hidden xl:flex">
              we prioritize your need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding.
            </p>
          </motion.div>
          {/* item 3 */}
          <motion.div
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0"
          >
            <MdHandshake className="text-[38px] to-accent mb-4" />
            <h3 className="h3">Propmt and flexible services</h3>
            <p className="hidden xl:flex">
              we prioritize your need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
