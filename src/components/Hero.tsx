import React from 'react'

import { cn } from '../../lib/utils'
import { BoxesCore } from './ui/Background'
import Link from 'next/link'




const Hero = () => {
  return (
    <div className='pb-'>
<div className="h-screen relative text-white w-full overflow-hidden bg-black-100 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-90 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <BoxesCore className=' bg-black-100'/>
      <h1 className={cn(" md:text-6xl font-bold text-4xl  text-white relative z-20")}>
        TechieHub Bootcamp
      </h1>
      <p className="text-center text-xl  mt-7 max-w-2xl text-white-200 relative z-20">
        Welcome to TechieHub.org where you can learn any tech skills of your choice please click the button below to continue
      </p>

    <Link href={"/login"} className=' z-20'>
    <button className="inline-flex mt-16 z-20 h-10 animate-shimmer items-center justify-center rounded-md border border-blue-300 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-8 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Continue to TechieHub
      </button>
    </Link>
    </div>
    </div>
  )
}

export default Hero