import React from 'react';
import Image from "next/image";

function practice() {
  return (



    

    
    <div className="  bg-[url('/try/eco-services-bg-img.jpg')] bg-no-repeat  w-full bg-cover  " >
        <div >
        <h1 className='text-center mb-3 text-3xl items-center uppercase text-[#0d733a] font-body font-bold'>Go Green <span className='text-black'>Ganesha</span> </h1>
        <div className='flex flex-col text-center justify-center items-center'>
        <h3 className='text-center  text-xl items-center text-[#0d733a] font-body mb-2'>Promote Your Environment</h3>
        <div className='flex flex-row-1 text-center justify-center items-center mt-3'>
        <div className="w-[100px] h-px  bg-darkgreen center  mr-[20px]" />
        <Image src="/icons/herbal-spa-treatment-leaves.png" 
				width={15} height={15}  
                className="   colors-[#e2e8f0]  "
                
                
                />
                        
        <div className="w-[100px] h-px  bg-darkgreen ml-[20px] " />
        </div>
               
                </div>
    </div>
            <div className="relative mt-[px] flex flex-col   ">
       <div className=' w-full mx-auto  gap-3   px-[200px]  mt-[100px] hover:text-[#0d733a]  '>
                <div className='flex flex-grow   gap-6  '>
            <div>
            <h1 className='text-right text-xl font-bold '> 100% Natural </h1> 
            <p className='max-w-[180px] text-right text-black'>Our Ganesh Idols are made of natural clay (shadu), red soil (mitti) & paper mache     </p>
            </div>
            <div className=''>
            <Image src="/icons/herbal-spa-treatment-leaves.png" 
				width={50} height={80}  
                className=" absolute  colors-[#e2e8f0]  "
                
                
                />

                </div>
            </div> 
            </div>



{/*2nd section */}


<div className=' w-full mx-auto  gap-3   px-[100px]  mt-[100px] hover:text-[#0d733a]  '>
                <div className='flex flex-grow  gap-6 '>
            <div>
            <h1 className='text-right text-xl font-bold'> HOME DELIVERY </h1> 
            <p className='max-w-[180px] text-right text-black '>We Deliver The Idol Directly To Your Place With Best Safety Measures And Intact </p>
            </div>
            <div>
        <Image src="/icons/home.png" 
				width={50} height={80}  
                className=" absolute  colors-[#e2e8f0]  "
                
                
                />
                </div>
            </div> 
            </div>

{/*3nd section */}



<div className=' w-full mx-auto  gap-3   px-[220px]  mt-[120px] hover:text-[#0d733a] '>
                <div className='flex flex-grow gap-6 '>
            <div>
            <h1 className='text-right text-xl font-bold'> Easily Dissolvable </h1> 
            <p className='max-w-[180px] text-right text-black '>Easily Dissolve in water and after virjansoil is usedto plant tree </p>
            </div>
            <div>
        <Image src="/icons/sea.png" 
				width={50} height={80}  
                className=" absolute  colors-[#e2e8f0]   "
                
                
                />
                </div>
            </div> 
            </div>







        
        <div className=' absolute items-center mt-[180px]  ml-[460px] '>
        <Image src="/try/eco-services-center-img.png" 
				width={300} height={350}  
                className="  "
                
                
                />
</div>



{/*4nd section  */}

<div className=' w-full mx-auto  gap-3  ml-[740px]  mt-[-100px] hover:text-[#0d733a]  '>
                <div className='flex flex-grow gap-6 '>

                    <div>
        <Image src="/icons/ganesha.png" 
				width={50} height={80}  
                className=" absolute  colors-[#e2e8f0]    "
                
                
                />
                </div>  
            <div>
            <h1 className='text-left text-xl font-bold'> WIDE RANGE OF AVTAR</h1> 
            <p className='max-w-[180px] text-light text-black '>We Offers Wide Range Of Avtars And Each Of Them Is Hand Made </p>
            </div>
            
            </div> 
            </div>

            {/*5nd section  */}

<div className=' w-full mx-auto gap-3   ml-[850px]  mt-[-360px] hover:text-[#0d733a]  '>
                <div className='flex flex-grow gap-6  '>

                    <div>
        <Image src="/icons/non-toxic.png" 
				width={50} height={80}  
                className=" absolute  colors-[#e2e8f0]   "
                
                
                />
                </div>  
            <div>
            <h1 className='text-left text-xl font-bold'> No Chemical </h1> 
            <p className='max-w-[180px] text-light text-black '>No chemicals are used such as harmful color,Diamonds,Newspaper etc.. </p>
            </div>
            
            </div> 
            </div>

              {/*6nd section  */}

<div className=' w-full mx-auto  gap-3  ml-[740px]  mt-[-340px] hover:text-[#0d733a] '>
                <div className='flex flex-grow gap-6 '>

                    <div>
        <Image src="/icons/shield-variant-with-white-and-black-borders.png" 
				width={50} height={80}  
                className=" absolute  colors-[#e2e8f0] hover:opacity-50  "
                
                
                />
                </div>  
            <div>
            <h1 className='text-left text-xl font-bold'> Solid & Durable </h1> 
            <p className='max-w-[180px] text-light text-black  text-black '>Proin eget ultricies velit, in consectetur purus nam vitae purus et arcu </p>
            </div>
            
            </div> 
            </div>


        
    </div>

    </div>
  )
}

export default practice