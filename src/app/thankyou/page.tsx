"use client";
import StarsCanvas from "@/components/ui/StarBackground";
import supply from "../../assets/supply.jpg";
import img_1 from '../../assets/coco.png';
import project from '../../assets/project.jpg';
import cyber from '../../assets/cyber.webp'
import design from '../../assets/design.jpg'
import it from '../../assets/it.jpg'
import React from "react";
import Image from "next/image";
import digial from '../../assets/gi.png'
import data from '../../assets/img1_k5ictg.jpg'
import product from '../../assets/iachev-post-1.png'
import full from '../../assets/ios-developers-hard-skills.webp'
import book from '../../assets/see.jpg'
import frontend from '../../assets/IOS_developer_skills.jpg'
const page = () => {
  return (
    <div>
      <div className="bg-black-100 min-h-screen flex flex-col items-center text-white p-4 md:p-0">
        <StarsCanvas />
        <div className=" pt-7 text-center">
          <h1 className=" text-5xl font-semibold">
            Find a career that works for you
          </h1>
          <p className=" text-[17px] leading-6 mt-4">
            Whatever your background or interests are, Professional Certificates
            have you covered.{" "}
          </p>
          <h3 className=" font-semibold mt-6 text-white-100">
            Filter by job category
          </h3>
        </div>

        <div className=" flex gap-2 items-center justify-center">
          <div>
            <button className="inline-flex mt-4 z-20 h-10 animate-shimmer items-center justify-center rounded-full border border-blue-300 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none">
              All Career (36)
            </button>
          </div>

          <div>
            <button className="inline-flex mt-4 z-20 h-10 animate-shimmer items-center justify-center rounded-full border border-blue-300 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none ">
              Software Engineering & IT (16)
            </button>
          </div>

          <div>
            <button className="inline-flex mt-4 z-20 h-10 animate-shimmer items-center justify-center rounded-full border border-blue-300 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none ">
              Buisness (12)
            </button>
          </div>

          <div>
            <button className="inline-flex mt-4 z-20 h-10 animate-shimmer items-center justify-center rounded-full border border-blue-300 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none ">
              Sales & Marketing (5)
            </button>
          </div>

          <div>
            <button className="inline-flex mt-4 z-20 h-10 animate-shimmer items-center justify-center rounded-full border border-blue-300 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none ">
              Data Science & Analytics (3)
            </button>
          </div>
        </div>

        <div className=" ">
          <div className="  grid grid-cols-3 gap-7 px-6 items-center">
            {/* 1 */}
           <div className="  bg-black-200 rounded-b-md mb-2">
           <Image
              src={img_1}
              alt="data.img"
              className=" w-full rounded-t-md h-52 bg-contain"
            />
            <div className=" p-4">
              <h2 className=" text-2xl font-semibold">Data Analyst</h2>
              <p className=" mt-2 leading-5">
                Collect, organize, and transform data to make informed
                decisions.
              </p>
              <h3 className=" text-[15px] mt-4 font-semibold">
                Great if you like:
              </h3>
              <div className=" flex items-center gap-2 mb-3 mt-3">
                <span className=" bg-gray-600 px-1">Attention to detail</span>
                <span className="bg-gray-600 px-1">Problem solving</span>
              </div>
              <span className="bg-gray-600 px-1 ">Working with numbers</span>

              <div className=" flex flex-col">
                <span className=" px-6 border-b-[0.5px] shadow-md shadow-white-100 border-white-100 mt-6"></span>
                <span className="mt-3 mb-1">
                  <span className=" font-bold">$90,500</span> median salary ¹
                </span>
                <span>
                  <span className=" font-bold">82,489</span> jobs available ¹
                </span>
                <button className=" bg-white-100 text-black-200 font-bold mt-3">
                  {" "}
                  Select Skills
                </button>
              </div>
            </div>

            
           </div>

{/* 2 */}
<div className="  bg-black-200 rounded-b-md mb-2">
           <Image
              src={project}
              alt="data.img"
              className=" w-full rounded-t-md h-56"
            />
            <div className=" p-4">
              <h2 className=" text-2xl font-semibold">Project Manager</h2>
              <p className=" mt-2 leading-5">
              Oversee the planning and execution of projects to ensure they’re successful.
              </p>
              <h3 className=" text-[15px] mt-4 font-semibold">
                Great if you like:
              </h3>
              <div className=" flex items-center gap-2 mb-3 mt-3">
                <span className=" bg-gray-600 px-1">Leading a team
                </span>
                <span className="bg-gray-600 px-1">Problem solving</span>
              </div>
              <span className="bg-gray-600 px-1 ">Communication</span>

              <div className=" flex flex-col">
                <span className=" px-6 border-b-[0.5px] shadow-md shadow-white-100 border-white-100 mt-6"></span>
                <span className="mt-3 mb-1">
                  <span className=" font-bold">$102,800</span> median salary ¹
                </span>
                <span>
                  <span className=" font-bold">336,402</span> jobs available ¹
                </span>
                <button className=" bg-white-100 text-black-200 font-bold mt-3">
                  {" "}
                  Select Skills
                </button>
              </div>
            </div>

            
           </div>

           {/* 3 */}


           <div className="  bg-black-200 rounded-b-md mb-2">
           <Image
              src={cyber}
              alt="data.img"
              className=" w-full rounded-t-md h-56"
            />
            <div className=" p-4">
              <h2 className=" text-2xl font-semibold">Cybersecurity Professional</h2>
              <p className=" mt-2 leading-5">
              Develop strategies to protect organizations from cyber-attacks and disruptions.
              </p>
              <h3 className=" text-[15px] mt-4 font-semibold">
                Great if you like:
              </h3>
              <div className=" flex items-center gap-2 mb-3 mt-3">
                <span className=" bg-gray-600 px-1">Problem solving</span>
                <span className="bg-gray-600 px-1">Technical challenges</span>
              </div>
              <span className="bg-gray-600 px-1 ">Attention to detail</span>

              <div className=" flex flex-col">
                <span className=" px-6 border-b-[0.5px] shadow-md shadow-white-100 border-white-100 mt-6"></span>
                <span className="mt-3 mb-1">
                  <span className=" font-bold">$119,700 </span> median salary ¹
                </span>
                <span>
                  <span className=" font-bold">147,973</span> jobs available ¹
                </span>
                <button className=" bg-white-100 text-black-200 font-bold mt-3">
                  {" "}
                  Select Skills
                </button>
              </div>
            </div>

            
           </div>

           {/* 4 */}


           <div className="  bg-black-200 rounded-b-md mb-2">
           <Image
              src={design}
              alt="data.img"
              className=" w-full rounded-t-md"
            />
            <div className=" p-4">
              <h2 className=" text-2xl font-semibold">UI/UX Designer</h2>
              <p className=" mt-2 leading-5">
              Make digital and physical products easier and more enjoyable to use.
              </p>
              <h3 className=" text-[15px] mt-4 font-semibold">
                Great if you like:
              </h3>
              <div className=" flex items-center gap-2 mb-3 mt-3">
                <span className=" bg-gray-600 px-1">Understanding people
               </span>
                <span className="bg-gray-600 px-1">Thinking creatively</span>
              </div>
              <span className="bg-gray-600 px-1 ">Problem solving</span>

              <div className=" flex flex-col">
                <span className=" px-6 border-b-[0.5px] shadow-md shadow-white-100 border-white-100 mt-6"></span>
                <span className="mt-3 mb-1">
                  <span className=" font-bold">$121,200</span> median salary ¹
                </span>
                <span>
                  <span className=" font-bold">70,778</span> jobs available ¹
                </span>
                <button className=" bg-white-100 text-black-200 font-bold mt-3">
                  {" "}
                  Select Skills
                </button>
              </div>
            </div>

            
           </div>

           {/* 5 */}

           <div className="  bg-black-200 rounded-b-md mb-2">
           <Image
              src={it}
              alt="data.img"
              className=" w-full rounded-t-md"
            />
            <div className=" p-4">
              <h2 className=" text-2xl font-semibold">IT Support Specialist</h2>
              <p className=" mt-2 leading-5">
              Evaluate and troubleshoot technology issues so equipment runs smoothly.
              </p>
              <h3 className=" text-[15px] mt-4 font-semibold">
                Great if you like:
              </h3>
              <div className=" flex items-center gap-2 mb-3 mt-3">
                <span className=" bg-gray-600 px-1">Helping people
               </span>
                <span className="bg-gray-600 px-1">
                Troubleshooting</span>
              </div>
              <span className="bg-gray-600 px-1 ">Problem solving</span>

              <div className=" flex flex-col">
                <span className=" px-6 border-b-[0.5px] shadow-md shadow-white-100 border-white-100 mt-6"></span>
                <span className="mt-3 mb-1">
                  <span className=" font-bold">$56,200</span> median salary ¹
                </span>
                <span>
                  <span className=" font-bold">318,249</span> jobs available ¹
                </span>
                <button className=" bg-white-100 text-black-200 font-bold mt-3">
                  {" "}
                  Select Skills
                </button>
              </div>
            </div>

            
           </div>

{/* 6 */}

           <div className="  bg-black-200 rounded-b-md mb-2">
           <Image
              src={digial}
              alt="data.img"
              className=" w-full rounded-t-md"
            />
            <div className=" p-4">
              <h2 className=" text-2xl font-semibold">Digital Marketer</h2>
              <p className=" mt-2 leading-5">
              Define and develop digital strategies to deliver business growth through online channels.
              </p>
              <h3 className=" text-[15px] mt-4 font-semibold">
                Great if you like:
              </h3>
              <div className=" flex items-center gap-2 mb-3 mt-3">
                <span className=" bg-gray-600 px-1">
                Working with numbers
               </span>
                <span className="bg-gray-600 px-1">
                Understanding people</span>
              </div>
              <span className="bg-gray-600 px-1 ">Problem solving</span>

              <div className=" flex flex-col">
                <span className=" px-6 border-b-[0.5px] shadow-md shadow-white-100 border-white-100 mt-6"></span>
                <span className="mt-3 mb-1">
                  <span className=" font-bold">$61,300</span> median salary ¹
                </span>
                <span>
                  <span className=" font-bold">80,778</span> jobs available ¹
                </span>
                <button className=" bg-white-100 text-black-200 font-bold mt-3">
                  {" "}
                  Select Skills
                </button>
              </div>
            </div>

            
           </div>



{/* 7 */}

<div className="  bg-black-200 rounded-b-md mb-2">
           <Image
              src={data}
              alt="data.img"
              className=" w-full rounded-t-md"
            />
            <div className=" p-4">
              <h2 className=" text-2xl font-semibold">Data Scientist</h2>
              <p className=" mt-2 leading-5">
              Extract and analyze data to make informed business decisions.
              </p>
              <h3 className=" text-[15px] mt-4 font-semibold">
                Great if you like:
              </h3>
              <div className=" flex items-center gap-2 mb-3 mt-3">
                <span className=" bg-gray-600 px-1">Intellectual curiosity
               </span>
                <span className="bg-gray-600 px-1">
                Working with numbers</span>
              </div>
              <span className="bg-gray-600 px-1 ">
              Writing and communication</span>

              <div className=" flex flex-col">
                <span className=" px-6 border-b-[0.5px] shadow-md shadow-white-100 border-white-100 mt-6"></span>
                <span className="mt-3 mb-1">
                  <span className=" font-bold">$121,200</span> median salary ¹
                </span>
                <span>
                  <span className=" font-bold">70,778</span> jobs available ¹
                </span>
                <button className=" bg-white-100 text-black-200 font-bold mt-3">
                  {" "}
                  Select Skills
                </button>
              </div>
            </div>

            
           </div>



           {/* 8 */}

           <div className="  bg-black-200 rounded-b-md mb-2">
           <Image
              src={supply}
              alt="data.img"
              className=" w-full rounded-t-md"
            />
            <div className=" p-4">
              <h2 className=" text-2xl font-semibold">Supply Chain Analyst</h2>
              <p className=" mt-2 leading-5">
              Streamline supply chain operations and drive efficiency through data analysis, issue resolution, compliance oversight, and relationship building.
              </p>
              <h3 className=" text-[15px] mt-4 font-semibold">
                Great if you like:
              </h3>
              <div className=" flex items-center gap-2 mb-3 mt-3">
                <span className=" bg-gray-600 px-1">
                Data analysis
               </span>
                <span className="bg-gray-600 px-1">Working with people</span>
              </div>
              <span className="bg-gray-600 px-1 ">Problem solving</span>

              <div className=" flex flex-col">
                <span className=" px-6 border-b-[0.5px] shadow-md shadow-white-100 border-white-100 mt-6"></span>
                <span className="mt-3 mb-1">
                  <span className=" font-bold">$65,200</span> median salary ¹
                </span>
                <span>
                  <span className=" font-bold">49,778</span> jobs available ¹
                </span>
                <button className=" bg-white-100 text-black-200 font-bold mt-3">
                  {" "}
                  Select Skills
                </button>
              </div>
            </div>

            
           </div>


           {/* 9 */}


           <div className="  bg-black-200 rounded-b-md mb-2">
           <Image
              src={product}
              alt="data.img"
              className=" w-full rounded-t-md"
            />
            <div className=" p-4">
              <h2 className=" text-2xl font-semibold">Product Manager</h2>
              <p className=" mt-2 leading-5">
              Oversee the entirety of a product's lifecycle, from conception to launch, and collaborate with engineering teams and business departments.
              </p>
              <h3 className=" text-[15px] mt-4 font-semibold">
                Great if you like:
              </h3>
              <div className=" flex items-center gap-2 mb-3 mt-3">
                <span className=" bg-gray-600 px-1">
                Cross-functional collaboration
               </span>
                <span className="bg-gray-600 px-1">
                Analytical thinking</span>
              </div>
              <span className="bg-gray-600 px-1 ">Problem solving</span>

              <div className=" flex flex-col">
                <span className=" px-6 border-b-[0.5px] shadow-md shadow-white-100 border-white-100 mt-6"></span>
                <span className="mt-3 mb-1">
                  <span className=" font-bold">$699,200</span> median salary ¹
                </span>
                <span>
                  <span className=" font-bold">38,778</span> jobs available ¹
                </span>
                <button className=" bg-white-100 text-black-200 font-bold mt-3">
                  {" "}
                  Select Skills
                </button>
              </div>
            </div>

            
           </div>

           {/* 10 */}


           <div className="  bg-black-200 rounded-b-md mb-2">
           <Image
              src={full}
              alt="data.img"
              className=" w-full rounded-t-md"
            />
            <div className=" p-4">
              <h2 className=" text-2xl font-semibold">Full Stack Developer</h2>
              <p className=" mt-2 leading-5">
              Create both front-end and back-end components of applications using JavaScript and manage applications throughout the software lifecycle.
              </p>
              <h3 className=" text-[15px] mt-4 font-semibold">
                Great if you like:
              </h3>
              <div className=" flex items-center gap-2 mb-3 mt-3">
                <span className=" bg-gray-600 px-1">
               
User interface design
               </span>
                <span className="bg-gray-600 px-1">Technology</span>
              </div>
              <span className="bg-gray-600 px-1 ">Problem solving</span>

              <div className=" flex flex-col">
                <span className=" px-6 border-b-[0.5px] shadow-md shadow-white-100 border-white-100 mt-6"></span>
                <span className="mt-3 mb-1">
                  <span className=" font-bold">129,900 </span> median salary ¹
                </span>
                <span>
                  <span className=" font-bold">39,778</span> jobs available ¹
                </span>
                <button className=" bg-white-100 text-black-200 font-bold mt-3">
                  {" "}
                  Select Skills
                </button>
              </div>
            </div>

            
           </div>

           {/* 11 */}


           <div className="  bg-black-200 rounded-b-md mb-2">
           <Image
              src={book}
              alt="data.img"
              className=" w-full rounded-t-md"
            />
            <div className=" p-4">
              <h2 className=" text-2xl font-semibold">Bookkeeper</h2>
              <p className=" mt-2 leading-5">
              Record financial transactions and manage financial records.
              </p>
              <h3 className=" text-[15px] mt-4 font-semibold">
                Great if you like:
              </h3>
              <div className=" flex items-center gap-2 mb-3 mt-3">
                <span className=" bg-gray-600 px-1">
               
Working with numbers
               </span>
                <span className="bg-gray-600 px-1">
                Attention to detail</span>
              </div>
              <span className="bg-gray-600 px-1 ">Writing & organization</span>

              <div className=" flex flex-col">
                <span className=" px-6 border-b-[0.5px] shadow-md shadow-white-100 border-white-100 mt-6"></span>
                <span className="mt-3 mb-1">
                  <span className=" font-bold">$47,200</span> median salary ¹
                </span>
                <span>
                  <span className=" font-bold">249,778</span> jobs available ¹
                </span>
                <button className=" bg-white-100 text-black-200 font-bold mt-3">
                  {" "}
                  Select Skills
                </button>
              </div>
            </div>

            
           </div>


           <div className="  bg-black-200 rounded-b-md mb-2">
           <Image
              src={frontend}
              alt="data.img"
              className=" w-full rounded-t-md"
            />
            <div className=" p-4">
              <h2 className=" text-2xl font-semibold">Front-End Developer</h2>
              <p className=" mt-2 leading-5">
              Design and develop the look, feel, function, and user experience of a website.
              </p>
              <h3 className=" text-[15px] mt-4 font-semibold">
                Great if you like:
              </h3>
              <div className=" flex items-center gap-2 mb-3 mt-3">
                <span className=" bg-gray-600 px-1">
               
               
                Problem solving
               </span>
                <span className="bg-gray-600 px-1">
                Thinking creatively</span>
              </div>
              <span className="bg-gray-600 px-1 ">
              Creating great user experiences</span>

              <div className=" flex flex-col">
                <span className=" px-6 border-b-[0.5px] shadow-md shadow-white-100 border-white-100 mt-6"></span>
                <span className="mt-3 mb-1">
                  <span className=" font-bold">$130,900</span> median salary ¹
                </span>
                <span>
                  <span className=" font-bold">249,778</span> jobs available ¹
                </span>
                <button className=" bg-white-100 text-black-200 font-bold mt-3">
                  {" "}
                  Select Skills
                </button>
              </div>
            </div>

            
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
