'use client'

import Image from "next/image"

import {MdOutLineMapsHomeWork, MdOutLineBuildCircle, MdOutlineDirectionsCar, MdOutlineMapsHomeWork, MdOutlineBuildCircle} from "react-icons/md"

//react count up
import CountUp from "react-countup"

//react intersection observer
import { useInView } from "react-intersection-observer"

import {motion} from 'framer-motion'
import {fadeIn} from '/variants'
export default function About() {
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    return (
        <section 
        className="section flex items-center" 
        id="about"
        ref={ref}>
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:justify-between">
                    {/* image */}
                    <motion.div 
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.6 }}className="flex-1 mb-8 xl:mb-0">
                        <Image 
                        className="rounded-[20px]"
                        src={"/images/about/car01.png"}
                        width={600}
                        height={448}
                        alt="car"
                        />
                    </motion.div>
                    {/* text / stats */}
                    <div className="flex-1 flex xl:justify-center items-center">
                        <div className="xl:max-w-[517px]">
                            <motion.h2
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }} 
                            className="h2 mt-5 xl:mt-0">Car services simplified.</motion.h2>
                            <motion.p 
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }}
                            className="mb-[42px] max-w-md">
                                Rent, choose, and repair with ease. Our convenient locations, diverse car types, and reliable repair points ensure a seamless car experience.
                            </motion.p>
                            {/* stats */}
                            <motion.div
                            variants={fadeIn("up", 0.7)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }} 
                            className="flex items-center gap-x-8 mb-12">
                                {/* car types */}
                                <div className="flex flex-col w-[100px]">
                                    <MdOutlineDirectionsCar className="text-accent text-5xl xl:text-6xl"/>
                                    <div className="text-3xl font-black">
                                       {inView ? <CountUp start={0} end={50} duration={3}/> : null} +
                                    </div>
                                    <div className="uppercase text-[13px] font-semibold text-secondary">
                                        car <br/> types
                                    </div>
                                </div>
                                {/* rental outlets */}
                                <div className="flex flex-col w-[100px]">
                                    <MdOutlineMapsHomeWork className="text-accent text-5xl xl:text-6xl"/>
                                    <div className="text-3xl font-black">
                                       {inView ? <CountUp start={0} end={135} duration={3}/> : null}
                                    </div>
                                    <div className="uppercase text-[13px] font-semibold text-secondary">
                                        rental <br/> outlets
                                    </div>
                                </div>
                                {/* repair points */}
                                <div className="flex flex-col w-[100px]">
                                    <MdOutlineBuildCircle className="text-accent text-5xl xl:text-6xl"/>
                                    <div className="text-3xl font-black">
                                       {inView ? <CountUp start={0} end={35} duration={3}/> : null}
                                    </div>
                                    <div className="uppercase text-[13px] font-semibold text-secondary">
                                        repair <br/> points
                                    </div>
                                </div>
                                {/* btn */}
        
                            </motion.div>
                            <motion.button
                            variants={fadeIn("up", 0.9)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.6 }} 
                            className="hidden xl:block bg-accent hover:bg-accent-hover rounded-[10px] w-full h-16 uppercase font-meduim text-white tracking-[2px] text-[13px] max-w-[184px]">See all cars</motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}