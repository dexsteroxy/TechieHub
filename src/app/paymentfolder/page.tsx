// import { CardSpotlight } from '@/components/ui/card-spotlight'

// import StarsCanvas from '@/components/ui/StarBackground'
// import { IoCheckmarkSharp } from "react-icons/io5";
// import React from 'react'
// import { useRouter } from 'next/router';

// const page = () => {


//   const router = useRouter();

//   const handlePaymentPlanSelection = (plan: string, amount: number) => {
//     router.push({
//       pathname: '/onclickpaymentplan',
//       query: { plan, amount },
//     });
//   };





//   return (
//     <div>
//       <StarsCanvas />
//  <div className=' min-h-screen flex-col flex items-center justify-center pb-9 bg-black'>
//     <h1 className=' font-bold text-4xl mt-12  mb-16 text-white-100 text-center'>Please select your payment plan</h1>
//     <div className=' flex flex-col md:flex-row items-center justify-center gap-6'>
//     <CardSpotlight className="h-fit w-96 ">
//     <p className="text-2xl  text-center font-bold relative z-20 mt-2 text-white">
//     Hire a freelancer
//     </p>
//     <div className="text-neutral-200 mt-4 relative z-20">
//     Tap into our community and hire for full-time or part-time roles. 
//      <h1 className=' font-bold text-white text-6xl my-2'>₦20,000</h1>
//      <p className=' font-semibold text-white-100'>for getting started</p>
//      <div className=' flex my-4 items-center'>
//      <h2 className=' font-bold text-4xl text-white my-2'>₦6,000</h2>
//      <p className=' text-white-100 font-semibold'>monthly</p>
//      </div>

//      <ul className=' space-y-2'>
//       <li className=' flex items-center gap-2'><span><IoCheckmarkSharp className=' text-purple' /></span><p className=' text-sm text-white font-semibold'>World-class talent</p></li>


//       <li className=' flex items-center gap-2'><span><IoCheckmarkSharp className=' text-blue-400' /></span><p className=' text-sm text-white font-semibold'>Payments, data, and intellectual property are safe and secure</p></li>


//       <li className=' flex items-center gap-2'><span><IoCheckmarkSharp className=' text-purple' /></span><p className=' text-sm text-white font-semibold'>We hold project payment in escrow until project is final</p></li>

//       <li className=' flex items-center gap-2'><span><IoCheckmarkSharp className=' text-blue-400' /></span><p className=' text-sm text-white font-semibold'>No hidden costs - 7.5% platform fee</p></li>
//      </ul>


//     </div>
//    <div>
//    <button
//    onClick={() => handlePaymentPlanSelection('Post a Job', 35000)}
//    className="relative mt-7  inline-flex h-10 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 w-full focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//         <span className="absolute  inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//         <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-white px-3 py-1 text-sm font-semibold text-slate-900 backdrop-blur-3xl">
//           Continue with this plan
//         </span>
//       </button>
//    </div>
//   </CardSpotlight>


//   <CardSpotlight className="h-fit w-96 ">
//     <p className="text-2xl  text-center font-bold relative z-20 mt-2 text-white">
//     Post a job
//     </p>
//     <div className="text-neutral-200 mt-4 relative z-20">
//     Tap into our community and hire for full-time or part-time roles. 
//      <h1 className=' font-bold text-white text-6xl my-2'>₦35,000</h1>
//      <p className=' font-semibold text-white-100'>for getting started</p>
//      <div className=' flex my-4 items-center'>
//      <h2 className=' font-bold text-4xl text-white my-2'>₦10,000</h2>
//      <p className=' text-white-100 font-semibold'>monthly</p>
//      </div>

//      <ul className=' space-y-2'>
//       <li className=' flex items-center gap-2'><span><IoCheckmarkSharp className=' text-purple' /></span><p className=' text-sm text-white font-semibold'>World-class talent</p></li>


//       <li className=' flex items-center gap-2'><span><IoCheckmarkSharp className=' text-blue-400' /></span><p className=' text-sm text-white font-semibold'>Payments, data, and intellectual property are safe and secure</p></li>


//       <li className=' flex items-center gap-2'><span><IoCheckmarkSharp className=' text-purple' /></span><p className=' text-sm text-white font-semibold'>We hold project payment in escrow until project is final</p></li>

//       <li className=' flex items-center gap-2'><span><IoCheckmarkSharp className=' text-blue-400' /></span><p className=' text-sm text-white font-semibold'>No hidden costs - 7.5% platform fee</p></li>
//      </ul>


//     </div>
//    <div>
//    <button  onClick={() => handlePaymentPlanSelection('Post a Job', 35000)} className="relative mt-7  inline-flex h-10 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 w-full focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//         <span className="absolute  inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//         <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-white px-3 py-1 text-sm font-semibold text-slate-900 backdrop-blur-3xl">
//           Continue with this plan
//         </span>
//       </button>
//    </div>
//   </CardSpotlight>



//   <CardSpotlight className="h-fit w-96 ">
//     <p className="text-2xl  text-center font-bold relative z-20 mt-2 text-white">
//     Hiring Suite
//     </p>
//     <div className="text-neutral-200 mt-4 relative z-20">
//     Tap into our community and hire for full-time or part-time roles. 
//      <h1 className=' font-bold text-white text-6xl my-2'>₦50,000</h1>
//      <p className=' font-semibold text-white-100'>for getting started</p>
//      <div className=' flex my-4 items-center'>
//      <h2 className=' font-bold text-4xl text-white my-2'>₦15,000</h2>
//      <p className=' text-white-100 font-semibold'>monthly</p>
//      </div>

//      <ul className=' space-y-2'>
//       <li className=' flex items-center gap-2'><span><IoCheckmarkSharp className=' text-purple' /></span><p className=' text-sm text-white font-semibold'>World-class talent</p></li>


//       <li className=' flex items-center gap-2'><span><IoCheckmarkSharp className=' text-blue-400' /></span><p className=' text-sm text-white font-semibold'>Payments, data, and intellectual property are safe and secure</p></li>


//       <li className=' flex items-center gap-2'><span><IoCheckmarkSharp className=' text-purple' /></span><p className=' text-sm text-white font-semibold'>We hold project payment in escrow until project is final</p></li>

//       <li className=' flex items-center gap-2'><span><IoCheckmarkSharp className=' text-blue-400' /></span><p className=' text-sm text-white font-semibold'>No hidden costs - 7.5% platform fee</p></li>
//      </ul>


//     </div>
//    <div>
//    <button onClick={() => handlePaymentPlanSelection('Hiring Suite', 50000)} className="relative mt-7  inline-flex h-10 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 w-full focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
//         <span className="absolute  inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//         <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-white px-3 py-1 text-sm font-semibold text-slate-900 backdrop-blur-3xl">
//           Continue with this plan
//         </span>
//       </button>
//    </div>
//   </CardSpotlight>
//     </div>
//    </div>
//     </div>
  
//   )
// }

// export default page































'use client';  // Ensure it's a client component since you are using client-side navigation

import { CardSpotlight } from '@/components/ui/card-spotlight';
import StarsCanvas from '@/components/ui/StarBackground';
import { IoCheckmarkSharp } from 'react-icons/io5';
import React from 'react';
import { useRouter } from 'next/navigation';  // Updated import

const Page = () => {
  const router = useRouter();  // useRouter from next/navigation

  const handlePaymentPlanSelection = (plan: string, amount: number) => {
    router.push(`/onclickpaymentplan?plan=${plan}&amount=${amount}`);  // Use router.push
  };

  return (
    <div>
      <StarsCanvas />
      <div className="min-h-screen flex-col flex items-center justify-center pb-9 bg-black">
        <h1 className="font-bold text-4xl mt-12 mb-16 text-white-100 text-center">
          Please select your payment plan
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          {/* Hire a Freelancer Plan */}
          <CardSpotlight className="h-fit w-96">
            <p className="text-2xl text-center font-bold relative z-20 mt-2 text-white">
              Hire a freelancer
            </p>
            <div className="text-neutral-200 mt-4 relative z-20">
              Tap into our community and hire for full-time or part-time roles.
              <h1 className="font-bold text-white text-6xl my-2">₦20,000</h1>
              <p className="font-semibold text-white-100">for getting started</p>
              <div className="flex my-4 items-center">
                <h2 className="font-bold text-4xl text-white my-2">₦6,000</h2>
                <p className="text-white-100 font-semibold">monthly</p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <IoCheckmarkSharp className="text-purple" />
                  <p className="text-sm text-white font-semibold">
                    World-class talent
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <IoCheckmarkSharp className="text-blue-400" />
                  <p className="text-sm text-white font-semibold">
                    Payments, data, and intellectual property are safe and secure
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <IoCheckmarkSharp className="text-purple" />
                  <p className="text-sm text-white font-semibold">
                    We hold project payment in escrow until project is final
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <IoCheckmarkSharp className="text-blue-400" />
                  <p className="text-sm text-white font-semibold">
                    No hidden costs - 7.5% platform fee
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <button
                onClick={() => handlePaymentPlanSelection('Hire a Freelancer', 20000)}
                className="relative mt-7 inline-flex h-10 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 w-full focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-white px-3 py-1 text-sm font-semibold text-slate-900 backdrop-blur-3xl">
                  Continue with this plan
                </span>
              </button>
            </div>
          </CardSpotlight>

          {/* Post a Job Plan */}
          <CardSpotlight className="h-fit w-96">
            <p className="text-2xl text-center font-bold relative z-20 mt-2 text-white">
              Post a job
            </p>
            <div className="text-neutral-200 mt-4 relative z-20">
              Tap into our community and hire for full-time or part-time roles.
              <h1 className="font-bold text-white text-6xl my-2">₦35,000</h1>
              <p className="font-semibold text-white-100">for getting started</p>
              <div className="flex my-4 items-center">
                <h2 className="font-bold text-4xl text-white my-2">₦10,000</h2>
                <p className="text-white-100 font-semibold">monthly</p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <IoCheckmarkSharp className="text-purple" />
                  <p className="text-sm text-white font-semibold">
                    World-class talent
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <IoCheckmarkSharp className="text-blue-400" />
                  <p className="text-sm text-white font-semibold">
                    Payments, data, and intellectual property are safe and secure
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <IoCheckmarkSharp className="text-purple" />
                  <p className="text-sm text-white font-semibold">
                    We hold project payment in escrow until project is final
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <IoCheckmarkSharp className="text-blue-400" />
                  <p className="text-sm text-white font-semibold">
                    No hidden costs - 7.5% platform fee
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <button
                onClick={() => handlePaymentPlanSelection('Post a Job', 35000)}
                className="relative mt-7 inline-flex h-10 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 w-full focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-white px-3 py-1 text-sm font-semibold text-slate-900 backdrop-blur-3xl">
                  Continue with this plan
                </span>
              </button>
            </div>
          </CardSpotlight>

          {/* Hiring Suite Plan */}
          <CardSpotlight className="h-fit w-96">
            <p className="text-2xl text-center font-bold relative z-20 mt-2 text-white">
              Hiring Suite
            </p>
            <div className="text-neutral-200 mt-4 relative z-20">
              Tap into our community and hire for full-time or part-time roles.
              <h1 className="font-bold text-white text-6xl my-2">₦50,000</h1>
              <p className="font-semibold text-white-100">for getting started</p>
              <div className="flex my-4 items-center">
                <h2 className="font-bold text-4xl text-white my-2">₦15,000</h2>
                <p className="text-white-100 font-semibold">monthly</p>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <IoCheckmarkSharp className="text-purple" />
                  <p className="text-sm text-white font-semibold">
                    World-class talent
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <IoCheckmarkSharp className="text-blue-400" />
                  <p className="text-sm text-white font-semibold">
                    Payments, data, and intellectual property are safe and secure
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <IoCheckmarkSharp className="text-purple" />
                  <p className="text-sm text-white font-semibold">
                    We hold project payment in escrow until project is final
                  </p>
                </li>
                <li className="flex items-center gap-2">
                  <IoCheckmarkSharp className="text-blue-400" />
                  <p className="text-sm text-white font-semibold">
                    No hidden costs - 7.5% platform fee
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <button
                onClick={() => handlePaymentPlanSelection('Hiring Suite', 50000)}
                className="relative mt-7 inline-flex h-10 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 w-full focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-white px-3 py-1 text-sm font-semibold text-slate-900 backdrop-blur-3xl">
                  Continue with this plan
                </span>
              </button>
            </div>
          </CardSpotlight>
        </div>
      </div>
    </div>
  );
};

export default Page;
