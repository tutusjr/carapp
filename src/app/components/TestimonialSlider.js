"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Pagination, Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "/variants";
import Image from "next/image";

//data
const testimonialData = [
  {
    message:
      "They truly exceeded my expectations and made my car rental experience a delight",
    avatar: "/images/testimonial/avatar.png",
    name: "Alexa Smith",
    job: "Product Designer",
  },
  {
    message:
      "They truly exceeded my expectations and made my car rental experience a delight",
    avatar: "/images/testimonial/avatar.png",
    name: "Alexa Smith",
    job: "Product Designer",
  }
];
export default function TestimonialSlider() {
  return (
    <motion.div
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="container mx-auto">
      <Swiper pagination={{ clickable: true, dynamicBullets: true }} modules={[Pagination, Navigation]} className="h-[450px] xl:h-[400px]">
        {testimonialData.map((person, index) => {
          const { message, avatar, name, job } = person;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-accent text-7xl mb-6" />
                <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium">
                  {message}
                </div>
                <Image
                  src={avatar}
                  alt={name}
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-secondary">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
