import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Index = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("SEP 19 , 2023 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <>
      <div className="bg-black bg-opacity-90 px-5 md:py-16 py-10 bg-cover backdrop-blur-sm">
        <section className="text-center items-center justify-beween text-white max-w-6xl mx-auto gap-10 flex-col lg:flex-row  flex     ">
          <div className="">
            <img
              src="/imgs/countimg.png"
              width={"100%"}
              height={"100%"}
              className="sm:w-full "
            />
          </div>

          <div className=" center w-full mx-auto  max-w-[600px] ">
            <div className=" text-center flex flex-col gap-3 items-center justify-center    ">
              <h2 className=" font-bold text-2xl sm:text-3xl md:text-4xl px-5 font-body  text-white text-center">
                {" "}
                सर्वांना गणेशचतुर्थीच्या हार्दीक शुभेच्छा{" "}
              </h2>
              <p className="text-center text-lg sm:text-xl  text-zinc-100 text-semibold font-serif items-center px-5 mt-3 ">
                तुमच्या मनातील सर्व मनोकामना पूर्ण होवोत, सर्वांना सुख, समृध्दी,
                ऎश्वर्य,शांती,आरोग्य लाभो हीच बाप्पाच्या चरणी प्रार्थना. ” गणपती
                बाप्पा मोरया, मंगलमुर्ती मोरया!!!{" "}
              </p>

              <div className=" py-5 ">
                <div className="   text-center gap-x-3  items-center justify-center  sm:flex-col-2  flex">
                  <section className="flex flex-col  sm:flex-col-2 text-center gap-x-2 md:text-2xl text-xl  text-white font-bold   ">
                    <p className=" text-yellow-500"> {timerDays} </p>
                    <h5 className="text-yellow-500"> Days </h5>
                  </section>
                  <span>:</span>

                  <section className="flex flex-col text-center gap-x-2 md:text-2xl  text-xl    font-bold ">
                    <p className=" text-yellow-500"> {timerHours} </p>
                    <h5 className="text-yellow-500"> Hours </h5>
                  </section>
                  <span>:</span>

                  <section className=" flex flex-col text-center  md:text-2xl text-xl   font-bold  ">
                    <p className=" text-yellow-500">{timerMinutes} </p>
                    <h5 className="text-yellow-500"> minutes </h5>
                  </section>
                  <span>:</span>

                  <section className="flex flex-col text-center gap-x-2  md:text-2xl text-xl  font-bold ">
                    <p className=" text-yellow-500"> {timerSeconds}</p>
                    <h5 className="text-yellow-500"> Seconds </h5>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
