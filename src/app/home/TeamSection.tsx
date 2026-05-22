"use client"
import React, { useEffect } from 'react'

export const TeamSection = () => {

    useEffect(() => {
    const shouldScroll = sessionStorage.getItem("scrollToTeam");
    if (shouldScroll === "true") {
      sessionStorage.removeItem("scrollToTeam");
      const teamSection = document.getElementById("team");
      teamSection?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div id='team' className='py-[5%] flex flex-col justify-center items-center '>

<h3 className='text-base text-[#0668E1] font-bold mb-sm'>
  PRIMETHIC</h3>
<p className='text-[#0668E1] text-h2 font-extrabold lg:max-w-[75%] text-center'>
 What begins, carries through. </p>
    </div>
  )
}
