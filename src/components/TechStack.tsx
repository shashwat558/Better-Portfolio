import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"
import { SiMongodb } from "react-icons/si"
import { DiRedis } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { BiLogoPostgresql } from "react-icons/bi"
import { motion } from "framer-motion";

const iconVariants = (duration:number) => ({
    initial:{y:-10},
    animate:{
      y:[10, -10],
      transition :{
        duration:duration,
        ease:"Linear",
        repeat: Infinity,
        repeatType:"reverse"
      }
    }
  })

const TechStack = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h1 className='my-20 text-center text-4xl'>Tech Stack</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
             
             
            initial = "initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />                
            </motion.div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-7xl " />                
            </div><div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500" />                
            </div><div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiRedis className="text-7xl text-red-700" />                
            </div><div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500" />                
            </div><div className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-[#417baa]" />                
            </div>
        </div>
    </div>
  )
}

export default TechStack