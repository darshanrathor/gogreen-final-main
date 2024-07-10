import React, { useState } from "react";

import Image from "next/image";
export default function Contact() {
  const initialvalue = {
    name: "",
    email: "",
    message: "",
  };
  const [formValue, setformValue] = useState(initialvalue);
  const [error, seterror] = useState(null);
  const [formError, setformError] = useState({
    name: "",
    email: "",
    message: "",
  });

  if (error) {
    setTimeout(() => seterror(null), 2000);
  }

  const notify = () =>
    toast.success("Your message has been send", { theme: "colored" });

  const handleForm = (e) => {
    e.preventDefault();
    if (
      (formValue.name !== "" && formValue.message !== "") ||
      formValue.email !== ""
    ) {
       fetch(
        "https://5yab4wx3hj.execute-api.ap-south-1.amazonaws.com/default/e-educationContact",
        {
          method: "post",
          // headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formValue),
        }
      ).then((res) => {
        console.log(res.json());
        // notify();
        // setformValue(initialvalue);
      });
    } else {
      seterror("All detailed must be filed");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setformValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="mt-[100px] lg:hidden ">
        <Image src="/try/group.jpg" width={1200} height={600} className=" " />
      </div>

      <div className="  ">
        <div className="    mt-0  ">
          <h4 className="max-w-7xl px-5 mx-auto md:text-4xl text-white font-cera_medium text-3xl">
            Contact US
          </h4>
        </div>
        <div className="md:px-0 md:pt-16 pb-24">
          <div className="  max-w-6xl w-full mx-auto">
            <div className="flex px-10 md:flex-row  flex-col mb-12 divide-zinc-300  md:divide-x gap-x-16 max-w-4xl mx-auto items-start md:items-center">
              <div className="md:max-w-xs w-full">
                <span>#Contact</span>
                <h2 className="mt-2 font-bold text-2xl">
                  Get in touch with us
                </h2>
              </div>
              <p className=" w-full md:pl-14 py-3 text-lg leading-7">
                Let us know what you want to know. Our representatives are here
                to help you
              </p>
            </div>
            <div className="flex gap-10 md:gap-40 px-5 md:flex-row flex-col ">
              <div className="mt-10   p-5 md:p-3 max-w-lg w-full mx-auto rounded-[20px] shadow-xl border border-green-500/50">
                <form
                  onSubmit={handleForm}
                  className="flex rounded-xl flex-col  w-full gap-10 md:py-8 md:px-7"
                >
                  <h4 className="font-cera_bold text-zinc-800 ">
                    Ready to Get Started?
                  </h4>
                  <div className="w-full relative   flex  gap-3 ">
                    <input
                      type="text"
                      value={formValue.name}
                      onChange={handleInput}
                      id="name"
                      name="name"
                      className={`w-full min-w-[200px]  items-center justify-center  text-zinc-800  border border-zinc-400  rounded focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none pt-3 pb-2 px-3  `}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="w-full flex relative  gap-3  ">
                    <input
                      type="text"
                      value={formValue.email}
                      onChange={handleInput}
                      id="email"
                      name="email"
                      className={`w-full min-w-[200px]  items-center justify-center  text-zinc-800  border border-zinc-400  rounded focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none pt-3 pb-2 px-3  `}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="w-full min-w-[200px] flex relative  gap-3  ">
                    <textarea
                      value={formValue.message}
                      onChange={handleInput}
                      id="message"
                      name="message"
                      className={`w-full min-w-[200px] h-[100px] items-center justify-center  text-zinc-800  border border-zinc-400  rounded focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none pt-3 pb-2 px-3  `}
                      placeholder="Enter your message"
                    />
                  </div>
                  {error !== null && (
                    <span className="py-2 px-6 text-red-500 border-red-500 font-semibold border-l-4 bg-red-50">
                      {error}
                    </span>
                  )}
                  <button className="bg-green-900 px-10 py-2.5 transition duration-150  max-w-[200px] hover:bg-green-800 hover:scale-[1.05]  rounded-md font-cera_medium text-base text-white">
                    Send Enquiry
                  </button>
                </form>
              </div>
              <div className="bg-white mx-auto max-w-sm backgroundeffect shadow-2xl py-10 my-auto px-8 md:px-12 md:py-14 text-left rounded-[10px] w-full flex flex-col  gap-10 items-center">
                <div className="w-full">
                  <h5 className="group-hover:text-white items-center flex gap-4">
                    <svg
                      className="w-6 h-6 fill-blue-700 rounded-full"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g data-name="Layer 21" id="Layer_21">
                        <path
                          className="cls-1"
                          d="M16,31a3,3,0,0,1-2.21-1C10.14,26,4,18.39,4,13.36A12.19,12.19,0,0,1,16,1,12.19,12.19,0,0,1,28,13.36c0,5-6.14,12.59-9.79,16.65A3,3,0,0,1,16,31ZM16,3A10.2,10.2,0,0,0,6,13.36c0,3.14,3.47,8.86,9.28,15.31a1,1,0,0,0,1.44,0C22.53,22.22,26,16.5,26,13.36A10.2,10.2,0,0,0,16,3Z"
                        />
                        <path
                          className="cls-1"
                          d="M16,19a6,6,0,1,1,6-6A6,6,0,0,1,16,19ZM16,9a4,4,0,1,0,4,4A4,4,0,0,0,16,9Z"
                        />
                      </g>
                    </svg>
                    Address
                  </h5>
                  <p className="mt-1 max-w-xs ml-10 group-hover:text-white md:text-lg">
                    Near Atul Tower, Mathuradas Road ext, Kandivali West,
                    Mumbai-400067 .
                  </p>
                </div>

                <div className="w-full">
                  <h5 className="group-hover:text-white items-center flex gap-4">
                    <svg
                      className="w-6 h-6 fill-blue-700"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title />
                      <g data-name="8-Email" id="_8-Email">
                        <path d="M45,7H3a3,3,0,0,0-3,3V38a3,3,0,0,0,3,3H45a3,3,0,0,0,3-3V10A3,3,0,0,0,45,7Zm-.64,2L24,24.74,3.64,9ZM2,37.59V10.26L17.41,22.17ZM3.41,39,19,23.41l4.38,3.39a1,1,0,0,0,1.22,0L29,23.41,44.59,39ZM46,37.59,30.59,22.17,46,10.26Z" />
                      </g>
                    </svg>
                    Email{" "}
                  </h5>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:gogreenganeshaa@gmail.com"
                    className="mt-1 ml-10 group-hover:text-white md:text-lg"
                  >
                    gogreenganeshaa@gmail.com
                  </a>
                </div>

                <div className="w-full ">
                  <h5 className="group-hover:text-white items-center flex gap-4">
                    <svg
                      className="w-6 h-6 fill-blue-700"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title />
                      <g data-name="1" id="_1">
                        <path d="M348.73,450.06a198.63,198.63,0,0,1-46.4-5.85c-52.43-12.65-106.42-44.74-152-90.36s-77.71-99.62-90.36-152C46.65,146.75,56.15,99.61,86.69,69.07l8.72-8.72a42.2,42.2,0,0,1,59.62,0l50.11,50.1a42.18,42.18,0,0,1,0,59.62l-29.6,29.59c14.19,24.9,33.49,49.82,56.3,72.63s47.75,42.12,72.64,56.31L334.07,299a42.15,42.15,0,0,1,59.62,0l50.1,50.1a42.16,42.16,0,0,1,0,59.61l-8.73,8.72C413.53,439,383.73,450.06,348.73,450.06ZM125.22,78a12,12,0,0,0-8.59,3.56l-8.73,8.72c-22.87,22.87-29.55,60-18.81,104.49,11.37,47.13,40.64,96.1,82.41,137.86s90.73,71,137.87,82.41c44.5,10.74,81.61,4.06,104.48-18.81l8.72-8.72a12.16,12.16,0,0,0,0-17.19l-50.09-50.1a12.16,12.16,0,0,0-17.19,0l-37.51,37.51a15,15,0,0,1-17.5,2.72c-30.75-15.9-61.75-39.05-89.65-66.95s-51-58.88-66.94-89.63a15,15,0,0,1,2.71-17.5l37.52-37.51a12.16,12.16,0,0,0,0-17.19l-50.1-50.11A12.07,12.07,0,0,0,125.22,78Z" />
                        <path d="M364.75,269.73a15,15,0,0,1-15-15,99.37,99.37,0,0,0-99.25-99.26,15,15,0,0,1,0-30c71.27,0,129.25,58,129.25,129.26A15,15,0,0,1,364.75,269.73Z" />
                        <path d="M428.15,269.73a15,15,0,0,1-15-15c0-89.69-73-162.66-162.65-162.66a15,15,0,0,1,0-30c106.23,0,192.65,86.43,192.65,192.66A15,15,0,0,1,428.15,269.73Z" />
                      </g>
                    </svg>
                    Phone{" "}
                  </h5>
                  <p className="mt-1 ml-10 group-hover:text-white md:text-lg">
                    Mobile: +91 8169882692
                  </p>
                </div>

                <div className="flex w-full flex-col gap-5">
                  <h6>Follow Us</h6>
                  <div className="flex gap-5 ">
                    <a
                      href="https://www.facebook.com/drashti.mehta.94"
                      className="p-3 group hover:bg-indigo-200 bg-indigo-600 rounded-md"
                    >
                      <svg
                        className="group hover:fill-indigo-200 fill-white  w-6 h-6"
                        enableBackground="new 0 0 56.693 56.693"
                        id="Layer_1"
                        version="1.1"
                        viewBox="0 0 56.693 56.693"
                      >
                        <path d="M40.43,21.739h-7.645v-5.014c0-1.883,1.248-2.322,2.127-2.322c0.877,0,5.395,0,5.395,0V6.125l-7.43-0.029  c-8.248,0-10.125,6.174-10.125,10.125v5.518h-4.77v8.53h4.77c0,10.947,0,24.137,0,24.137h10.033c0,0,0-13.32,0-24.137h6.77  L40.43,21.739z" />
                      </svg>
                    </a>
                    <a
                      href="/"
                      className=" p-3 group hover:bg-white bg-gray-500 rounded-md"
                    >
                      <svg
                        className="fill-red-500 group-hover:fill-black fill-gray-100 w-6 h-7"
                        viewBox="0 0 48 48"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title />
                        <g data-name="8-Email" id="_8-Email">
                          <path d="M45,7H3a3,3,0,0,0-3,3V38a3,3,0,0,0,3,3H45a3,3,0,0,0,3-3V10A3,3,0,0,0,45,7Zm-.64,2L24,24.74,3.64,9ZM2,37.59V10.26L17.41,22.17ZM3.41,39,19,23.41l4.38,3.39a1,1,0,0,0,1.22,0L29,23.41,44.59,39ZM46,37.59,30.59,22.17,46,10.26Z" />
                        </g>
                      </svg>
                    </a>

                    <a
                      href="https://www.instagram.com/gogreenganesha/"
                      className="p-3 group hover:bg-red-200 bg-red-600 rounded-mdhover:bg-red-200 bg-red-600 rounded-md"
                    >
                      <Image
                        src="/imgs/insta.svg"
                        width={25}
                        height={25}
                        className="cursor-pointer items-center text-center justify-center "
                      ></Image>
                    </a>
                    <a
                      href="https://wa.me/918169882692"
                      className=" p-3 group hover:bg-green-200 bg-green-600 rounded-md"
                    >
                      <svg
                        className="fill-green-500 group-hover:fill-white fill-white w-6 h-6 "
                        id="Layer_1"
                        version="1.1"
                        viewBox="0 0 56.693 56.693"
                      >
                        <g>
                          <path
                            className="st0"
                            d="M46.3802,10.7138c-4.6512-4.6565-10.8365-7.222-17.4266-7.2247c-13.5785,0-24.63,11.0506-24.6353,24.6333   c-0.0019,4.342,1.1325,8.58,3.2884,12.3159l-3.495,12.7657l13.0595-3.4257c3.5982,1.9626,7.6495,2.9971,11.7726,2.9985h0.01   c0.0008,0-0.0006,0,0.0002,0c13.5771,0,24.6293-11.0517,24.635-24.6347C53.5914,21.5595,51.0313,15.3701,46.3802,10.7138z    M28.9537,48.6163h-0.0083c-3.674-0.0014-7.2777-0.9886-10.4215-2.8541l-0.7476-0.4437l-7.7497,2.0328l2.0686-7.5558   l-0.4869-0.7748c-2.0496-3.26-3.1321-7.028-3.1305-10.8969c0.0044-11.2894,9.19-20.474,20.4842-20.474   c5.469,0.0017,10.6101,2.1344,14.476,6.0047c3.8658,3.8703,5.9936,9.0148,5.9914,14.4859   C49.4248,39.4307,40.2395,48.6163,28.9537,48.6163z"
                          />
                          <path
                            className="st0"
                            d="M40.1851,33.281c-0.6155-0.3081-3.6419-1.797-4.2061-2.0026c-0.5642-0.2054-0.9746-0.3081-1.3849,0.3081   c-0.4103,0.6161-1.59,2.0027-1.9491,2.4136c-0.359,0.4106-0.7182,0.4623-1.3336,0.1539c-0.6155-0.3081-2.5989-0.958-4.95-3.0551   c-1.83-1.6323-3.0653-3.6479-3.4245-4.2643c-0.359-0.6161-0.0382-0.9492,0.27-1.2562c0.2769-0.2759,0.6156-0.7189,0.9234-1.0784   c0.3077-0.3593,0.4103-0.6163,0.6155-1.0268c0.2052-0.4109,0.1027-0.7704-0.0513-1.0784   c-0.1539-0.3081-1.3849-3.3379-1.8978-4.5706c-0.4998-1.2001-1.0072-1.0375-1.3851-1.0566   c-0.3585-0.0179-0.7694-0.0216-1.1797-0.0216s-1.0773,0.1541-1.6414,0.7702c-0.5642,0.6163-2.1545,2.1056-2.1545,5.1351   c0,3.0299,2.2057,5.9569,2.5135,6.3676c0.3077,0.411,4.3405,6.6282,10.5153,9.2945c1.4686,0.6343,2.6152,1.013,3.5091,1.2966   c1.4746,0.4686,2.8165,0.4024,3.8771,0.2439c1.1827-0.1767,3.6419-1.489,4.1548-2.9267c0.513-1.438,0.513-2.6706,0.359-2.9272   C41.211,33.7433,40.8006,33.5892,40.1851,33.281z"
                          />
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
