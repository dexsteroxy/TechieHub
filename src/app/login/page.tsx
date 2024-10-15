"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import React from "react";
import { cn } from "../../../lib/utils";
import StarsCanvas from "@/components/ui/StarBackground";
import Link from "next/link";

const page = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className=" py-6 bg-black-100">
      {/* <StarsCanvas /> */}
      <div className=" bg-black-100 min-h-screen p-4 md:p-0">
        <div className="max-w-md w-full md:shadow-md md:shadow-white-100 mx-auto rounded-none md:rounded-2xl p-5 shadow-input bg-black-100">
          <h2 className="font-bold text-xl text-neutral-200">
            Welcome to <span className=" text-white-100">TechieHub</span>
          </h2>
          <p className=" text-sm max-w-sm mt-2 text-neutral-300 capitalize">
            Please kindly sign-up to TechieHub
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label
                  htmlFor="firstname"
                  className=" text-white font-semibold"
                >
                  First name
                </Label>
                <Input
                  id="firstname"
                  placeholder="Tyler"
                  type="text"
                  className=""
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname" className=" text-white font-semibold">
                  Last name
                </Label>
                <Input
                  id="lastname"
                  placeholder="Durden"
                  type="text"
                  className=""
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email" className=" text-white font-semibold">
                Email Address
              </Label>
              <Input
                id="email"
                placeholder="projectmayhem@fc.com"
                type="email"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password" className=" text-white font-semibold">
                Password
              </Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                className=""
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label
                htmlFor="twitterpassword"
                className=" text-white font-semibold"
              >
                Confirm password
              </Label>
              <Input
                id="twitterpassword"
                placeholder="••••••••"
                type="twitterpassword"
              />
            </LabelInputContainer>

            <div className=" flex items-center justify-center">
              <div className=" flex cursor-pointer items-center justify-center hover:shadow-sm  hover:shadow-blue-500 rounded-md hover:transition hover:duration-300 mx-auto -mt-4 mb-5 h-16 w-60 bg-zinc-800">
                <div>
                  <h3 className=" font-semibold text-purple underline cursor-pointer">
                    Upload Photo
                  </h3>
                </div>
              </div>
            </div>

            <Link href={"/mainlogin"}>
              <button
                className="bg-gradient-to-br relative group/btn  from-zinc-900 to-zinc-900  block bg-zinc-800 w-full text-white rounded-md h-10 font-medium  shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Sign up &rarr;
                <BottomGradient />
              </button>
            </Link>

            <div className="bg-gradient-to-r from-transparent  via-neutral-700 to-transparent my-8 h-[1px] w-full" />

            <div className="flex flex-col space-y-4">
              <button
                className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input  bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <IconBrandGoogle className="h-4 w-4 text-neutral-300" />
                <span className=" text-neutral-300 text-sm">Google</span>
                <BottomGradient />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default page;
