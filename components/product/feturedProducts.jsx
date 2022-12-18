import Image from 'next/image'
import React from 'react'
import ClayRandom from '../randomProduct/clay-random'
export default function FeturedProducts() {
  return (
    <div className='md:py-20 flex flex-col gap-12 py-14'>
        <div className='flex flex-col  text-center justify-center items-center'>
							<h2 className="md:text-4xl text-3xl w-full flex-grow font-display font-semibold  text-zinc-800 ">
								Featured Murti  2020 & 2021
							</h2>
        <div className='flex flex-row-1 text-center justify-center items-center mt-3'>
        <div className="w-[100px] h-px  bg-[#7abf18] center  mr-[20px]" />
        <Image src="/imgs/herbal-spa-treatment-leaves.png" 
				width={15} height={15}  
                className="   colors-[#e2e8f0]  "
                />
                      
        <div className="w-[100px] h-px  bg-[#7abf18] ml-[20px] " />
        </div>
                </div>
                <ClayRandom name="clay-ganesha"/>
    </div>
  )
}
