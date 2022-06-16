import React,{useEffect, useRef ,useState} from 'react';
import Image from "next/image";





const Index = () => {
  const [timerDays,setTimerDays]= useState('00');
  const [timerHours,setTimerHours]= useState('00');
  const [timerMinutes,setTimerMinutes]= useState('00');
  const [timerSeconds,setTimerSeconds]=useState('00');

  let interval = useRef();

  const startTimer = () =>{
      const countDownDate = new Date('aug 31 , 2022 00:00:00').getTime();

      interval = setInterval(() => {
        const now =new Date().getTime();
        const distance = countDownDate - now;

        const days= Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours= Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes= Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds= Math.floor((distance % (1000 * 60)) / 1000);

          if (distance < 0){

            clearInterval(interval.current);

          } else {

            setTimerDays(days);
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);


          }


      }, 1000);

  };

  useEffect (() =>{
      startTimer();
      return () => {
        clearInterval(interval.current);
        
      };
  });

  return (
    <>
      <div id="main" className=" bg-cover bg-no-repeat ">
      <section className="text-center text-white bg-black bg-opacity-90 bg-cover backdrop-blur-sm  flex-row  lg:flex sm:items-center gap-x-24 sm:justify-center     ">

      
<div className=' ' >
<Image

src="/imgs/countimg.png"
width={400}
height={500}
className="sm:w-full "

/>

</div>
        
  
        <div   className=" center w-full  ">
          <div id="glass" className=" text-center flex flex-col items-center justify-center    " >


            <h2 className=" font-bold text-2xl px-5 font-body  text-zinc-300 text-center"> सर्वांना गणेशचतुर्थीच्या हार्दीक शुभेच्छा </h2>
            <p className="text-center text-xl  text-zinc-300 text-semibold font-serif items-center px-5 mt-3 "> 
            तुमच्या मनातील सर्व मनोकामना पूर्ण होवोत, सर्वांना
            सुख, समृध्दी, ऎश्वर्य,शांती,आरोग्य लाभो हीच
             बाप्पाच्या चरणी प्रार्थना. ”
              गणपती बाप्पा मोरया, मंगलमुर्ती मोरया!!!  </p>
        
        <div className=" py-5 " >
          <div className="   text-center gap-x-3  items-center justify-center  sm:flex-col-2  flex">
          <section className="flex flex-col  sm:flex-col-2 text-center gap-x-2 text-xl  text-white font-bold   ">
            <p className="text-xl text-white"> { timerDays } </p>
            <h5 className='text-white'> Days </h5>
          </section>
          <span>:</span>


          <section className="flex flex-col text-center gap-x-2 text-xl  text-zinc-300  font-bold ">
            <p className="text-xl text-white"> { timerHours} </p>
            <h5 className='text-white'> Hours </h5>
          </section>
          <span>:</span>

          <section className=" flex flex-col text-center  text-xl  text-zinc-300  font-bold  ">
            <p className="text-xl text-white ">{timerMinutes} </p>
            <h5 className='text-white'> minutes  </h5>
          </section>
          <span>:</span>


          <section className="flex flex-col text-center gap-x-2  text-xl text-zinc-300  font-bold ">
            <p className="text-xl text-white"> {timerSeconds}</p>
            <h5 className='text-white'> Seconds  </h5>
          </section>
          </div>

         
          </div>



        </div>

        </div>

      </section>
     
</div>

    </>
  )
}

export default Index