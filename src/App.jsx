import React from "react";
import { motion } from "framer-motion";
import { useLayoutEffect,useRef } from "react";
import gsap from 'gsap'

function App() {
 const comp = useRef(null)
 useLayoutEffect(( ) => {
let ctx = gsap.context( ()=> {
  const t1 = gsap.timeline()
  t1.from("#intro-slider",{
    duration:1.3,
    delay:0.3
  }).from(['#title-1','#title-2','#title-3','#title-4','#title-5'],{
    opacity:0,
    y:100,
    duration:1,
    stagger:0.2
  }).to("#intro-slider",{
    yPercent:"-100",
    duration:0.5
  })
},comp )

return () => ctx.revert()
 }, [])
  return (
    <div ref={comp} className="relative min-h-screen bg-gray-100 ">
      <div id="intro-slider" className="h-screen absolute z-10 top-0 left-0 bg-customRed w-full flex justify-center items-center ">
        <div className="font-youngSerif text-80px text-customWhite text-center leading-110%">
        <h1 id="title-1">Hello</h1>
        <h1 id="title-2">Hola</h1>
        <h1 id="title-3">Namaste</h1>
        <h1 id="title-4">Salam</h1>
        <h1 id="title-5">Hey</h1>
        </div>
      </div>
      <div id="main-page" className="h-screen w-screen bg-customBackground flex items-center justify-center overflow-hidden">
        {/* Bento Grid Container */}
        <div className="grid grid-cols-3 grid-rows-4 gap-16px w-[97vw] h-[94vh]">
          
          {/* Item 1 */}
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="col-span-1 row-span-2 rounded-3xl shadow-lg border-customBorder flex bg-customRed"
          >
            <div className="w-389px h-322px mt-24px ml-24px flex justify-between flex-col">
              <h1 className="text-customWhite text-32px w-389px h-152px font-youngSerif leading-120%">
                Creating websites that pay attention to the details that truly make a difference ☉
              </h1>
              <div className="flex justify-between">
                <h1 className="font-youngSerif w-134.5px text-16px font-400">Available for Freelance</h1>
                <h1 className="font-youngSerif w-134.5px text-16px font-400">My local time -11:07 GMT</h1>
              </div>
            </div>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="col-span-1 rounded-3xl row-span-3 shadow-lg border-customBorder flex bg-customWhite"
          >
            <div className="w-390px h-519px mt-24px ml-24px flex justify-between flex-col">
              <h1 className="text-52px font-youngSerif leading-110% text-customRed tracking-[-2.08px]">
                Hello, I am Pratyush, an independent frontend web developer ☻
              </h1>
              <div className="flex justify-between ">
                <h1 className="font-youngSerif w-134.5px text-16px font-400">Available for Freelance</h1>
                <h1 className="font-youngSerif w-134.5px text-16px font-400">My local time -11:07 GMT</h1>
              </div>
            </div>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            whileHover={{ scale: 1.005 }}
            id="scroll-smooth"
            className="col-span-1 rounded-3xl row-span-1 shadow-lg flex items-start bg-customWhite overflow-auto scrollbar-hide"
          
          >
            <div className="font-youngSerif ml-24px mt-24px text-20px">
              <div className="border-b-2 border-black pb-8px w-390px">
                <h1>Love for you to check out my works ✦</h1>
              </div>
              <div   className="border-b-2 border-customRed pt-8px pb-8px ">
                <h1 className="text-customRed">September works (Agency website)</h1>
              </div>
              <div   className="border-b-2 border-customRed pt-8px pb-8px">
                <h1 className="text-customRed">Depoly (Non profit organisation)</h1>
              </div>
              <div  className="border-b-2 border-customRed pt-8px pb-8px">
                <h1 className="text-customRed">Social Impact Capital (Investment Firm)</h1>
              </div>
              <div   className="border-b-2 border-customRed pt-8px pb-8px">
                <h1 className="text-customRed">Social Impact Capital (Investment Firm)</h1>
              </div>
              <div   className="border-b-2 border-customRed pt-8px pb-8px">
                <h1 className="text-customRed">Social Impact Capital (Investment Firm)</h1>
              </div>
              <div className="border-b-2 border-customRed pt-8px pb-8px">
                <h1 className="text-customRed">Social Impact Capital (Investment Firm)</h1>
              </div>
         
            </div>
          </motion.div>

          {/* Item 4 */}
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="col-span-1 rounded-3xl row-span-1 shadow-lg border-2 border-customWhite flex items-start bg-customGreen"
          >
            <h1 className="text-customWhite text-20px leading-150% font-youngSerif w-390px h-70px mt-24px ml-24px">
              I've always wanted to create new things, unique experiences, getting into web development changed a lot of things for me ✚
            </h1>
          </motion.div>

          {/* Item 5 */}
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="col-span-1 rounded-3xl row-span-2 shadow-lg border-2 border-customRed flex items-start"
          >
            <div className="w-389px h-322px mt-24px ml-24px flex justify-between flex-col">
              <h1 className="text-customRed text-32px font-youngSerif w-389px leading-120%">
                Playing around with ReactJS and NextJS, using Framer Motion and GSAP to add some cool animations ★
              </h1>
              <div className="flex justify-between">
                <h1 className="font-youngSerif w-134.5px text-16px font-400 text-customRed">Available for Freelance</h1>
                <h1 className="font-youngSerif w-134.5px text-16px font-400 text-customRed">My local time -11:07 GMT</h1>
              </div>
            </div>
          </motion.div>

          {/* Item 6 */}
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="col-span-1 rounded-3xl row-span-2 shadow-lg bg-customRed"
          >
            <div className="w-392px h-330px mt-24px ml-24px flex flex-col justify-between">
              <h1 className="text-customWhite text-32px leading-120% font-youngSerif w-389px h-152px">
                Thanks for your visit! You can check out my networks to follow my new adventures ☼
              </h1>
              <div className="flex text-black text-16px font-youngSerif gap-24px">
                <h1>Github</h1>
                <h1>LinkedIn</h1>
                <h1>Twitter</h1>
                <h1>Blog</h1>
              </div>
            </div>
          </motion.div>

          {/* Item 7 */}
          <motion.div
            whileHover={{ scale: 1.005 }}
            className="col-span-1 rounded-3xl row-span-1 border-2 border-customWhite flex"
          >
            <div className="flex flex-col justify-between mt-24px ml-24px mb-24px w-390px h-125px">
              <h1 className="text-customWhite text-20px font-youngSerif w-390px">
                Hey! Wanna chat about an idea? I’d really like to hear what you think ⚃
              </h1>
              <div className="flex text-customWhite text-16px font-youngSerif gap-24px">
                <h1>Send a mail</h1>
                <h1>Schedule a mail</h1>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default App;
