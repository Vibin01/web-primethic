"use client";
import {  FaInstagram, FaYoutube, FaMediumM, } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";

import { FaXTwitter } from "react-icons/fa6";

import Link from "next/link";

export default function FooterClient({ children }: { children: React.ReactNode }) {

  return (
    <>
    
          <footer className="bg-[#0668E1] text-white px-[4%]">
            <div className="flex flex-col  justify-center items-center xl:justify-between   text-[16px] xl:text-[18px] 2xl:text-[20px]   pt-[2%] pb-8  ">
              <div className=" w-[100%]  flex flex-col lg:flex-row justify-center  md:justify-between  lg:items-end gap-6">
                <div className=" mt-7 lg:mt-0  mb-2 lg:mb-0">
                  <div className="flex justify-start ">
                    <Link href={"https://connectec.app/"} className=" flex items-center gap-2 lg:text-[40px] font-semibold mb-4">
<img src="/logo/primethic-logo-white.svg" alt="Primethic Logo" className="w-7 h-7 lg:w-10 lg:h-10 xl:h-12 xl:w-12"/>
                    
                    PRIMETHIC
                    </Link>
                  </div>

                  <p className="mt-4 text-[14px] xl:text-[20px] 2xl:text-[20px]  lg:font-medium">
                    Phone : +91 9499045981
                  </p>
                  <p className="mt-1 lg:mt-2 text-[14px] xl:text-[20px] 2xl:text-[20px]  lg:font-medium">
                    Email : hello@connectec.app
                  </p>
                  
                </div>
                <div className="flex flex-col lg:flex-row h-full gap-3 lg:gap-14 items-start lg:justify-between lg:items-center  ">
                  

                  {/* Social Icons */}
                  <div className="  flex items-center gap-3 lg:gap-6 text-lg lg:text-xl">
                   <div className="p-2 bg-[#FFFFFF1A] rounded-full">
                      <FaXTwitter />
                    </div>
                    
                    
                    <div className="p-2 bg-[#FFFFFF1A] rounded-full">
                      <ImLinkedin2 />
                    </div><div className="p-2 bg-[#FFFFFF1A] rounded-full">
                      <FaMediumM />
                    </div>

                    
                    <div className="p-2 bg-[#FFFFFF1A] rounded-full">
                      <FaYoutube />
                    </div><div className="p-2 bg-[#FFFFFF1A] rounded-full">
                      <FaInstagram />
                    </div>    
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col mt-4 lg:mt-0 pt-3">
                  <div className="hidden lg:flex flex-col items-end  py-6">
                    <div className="sm:w-[100%]   border-t border-[#FFFFFF] my-2"></div>
                  </div>

                  <div className="mt-5 lg:mt-0 flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-between ">
                    <div className="flex justify-center items-center flex-wrap lg:flex-nowrap lg:block   text-[14px] md:text-[16px]  text-start lg:font-medium space-x-3">
                     
                      <Link href="/terms-and-condition">&nbsp;&nbsp;Terms & Conditions</Link>
                      |&nbsp;&nbsp; {""}
                      
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </div>
                  
                  </div>
                </div>
            </div>
             <div className="bg-[#FFFFFF1A] -mx-[8%] md:-mx-[5%] flex flex-col items-center justify-center py-[2%]">
                  <p className=" text-lg  font-normal flex flex-col justify-center items-center ">
                    <span>
                      <Link href="https://primethic.com/">
                        © Copyright Primethic Private Limited{" "}
                      </Link>
                      {new Date().getFullYear()}. All Rights Reserved.
                    </span>
                    
                  </p>
                  <p className="font-medium text-lg mt-[1%] text-center px-[4%]">The principles, frameworks, and methodologies are proprietary to and owned by Primethic Private Limited. Unauthorized use, reproduction, or distribution is strictly prohibited.</p>
           <p className="text-[5px] lg:text-[9px] mt-[1%] ">
                      {" "}
                      {children}
                    </p>
            </div>
          </footer>
        
    </>
  );
}
