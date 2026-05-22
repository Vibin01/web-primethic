import React from 'react'

export const BannerSection = () => {
  return (
    <div className='bg-[#0668E10F] py-[8%] px-[5%] flex flex-col justify-center items-center  '>
        
        <h3 className="text-[20px] md:text-[26px] lg:text-[32px] xl:text-[40px] 2xl:text-[48px] font-bold mb-6 md:mb-12 2xl:mb-16 text-center  flex gap-1 items-center text-[#0668E1]">
<img src="/logo/primethic-logo-e-blue.svg" alt="Primethic Logo" className="w-8 h-8 lg:w-12 lg:h-12 xl:h-14 xl:w-14"/>
PRIMETHIC
        </h3>

        <p className="text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px]  lg:max-w-[75%] font-bold italic text-center text-[#0668E1]">
          The Synthesis brings together Platform Excellence (PRIME) and Engineered Transformation (ETHIC)—where innovation is driven by intent and responsibility. </p>
        </div>
  )
}
