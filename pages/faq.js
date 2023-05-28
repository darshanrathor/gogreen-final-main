import React, { useState } from "react";
import { faq, FaqSection } from "../components/old/faqs";
import Image from "next/image";

export default function Faqs() {
  const [state, setstate] = useState("");

  const handleFaq = (e) => {
    setstate(e);
  };

  return (
    <>
      <div className=" flex flex-col lg:p-4  items-center justify-center">
        {/* 
      <Image

src="/imgs/68s4Y7j.jpg"
width={1500}
height={300}
className="  py-14 "

/>
*/}
      </div>

      <div
        id="faq-bg"
        className=" lg:flex  lg:flex-row p-5 mb-10  lg:max-w[100px] flex flex-col items-center justify-center text-center"
      >
        <div id="faq" className="ml-6 mt-[100px] w-full  hidden ">
          <Image
            src="/imgs/5159616.jpg"
            width={500}
            height={600}
            className="hiddden "
          />
        </div>
        <div
          id="faq-in"
          className=" lg:p-16  font-body from-transparent m w-full lg:w-full "
        >
          <div className="flex flex-col text-center justify-center items-center mb-8">
            <h1 className=" font-playfair  text-center  lg:textcenter  lg:text-4xl text-4xl  text-[#184029] ">
              Frequently Asked Questions{" "}
            </h1>
            <div className="flex flex-row-1 text-center justify-center items-center mt-3">
              <div className="w-[100px] h-px  bg-[#7abf18] center  mr-[20px]" />
              <Image
                src="/imgs/herbal-spa-treatment-leaves.png"
                width={15}
                height={15}
                className="   colors-[#e2e8f0]  "
              />

              <div className="w-[100px] h-px  bg-[#7abf18] center  mr-[20px]" />
            </div>
          </div>

          {faq.map((item, i) => (
            <FaqSection
              key={i}
              active={state}
              onclick={handleFaq}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </>
  );
}
