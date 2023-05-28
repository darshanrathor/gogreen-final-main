import React from 'react';
import Image from "next/image";

export default function About() {
  return (
    <>
      <section id="Aboutus" className="  mt-[80px]  ">
        <div className="  w-full h-[200px] bg-[#184029]  ">
          <div className="py-[70px] items-center justify-center  text-center text-xl text-white fond-heading ">
            <h1 className="md:text-3xl text-2xl mb-3 font-semibold text-white">
              Bring Home Eco-Friendly Ganpati Idol…!!!
            </h1>
            <h3 className="md:text-2xl text-xl text-white">
              {" "}
              Home Delivery available in Mumbai, Navi Mumbai & Thane
            </h3>
          </div>
        </div>
        <div className="flex-col lg:flex-row flex bg-white ">
          <div className=" mt-[50px] lg:justify-right lg:items-right px-[50px] lg:px[100px]  items-center justify-center   ">
            <Image
              src="/imgs/713N9NlwhRL.jpg"
              width={500}
              height={600}
              className="lg:w-[500px] lg:h-[500px]"
            />
          </div>

          <div className="mt-6 max-w-[800px] rounded-xl p-3  ">
            <div className="w-full mx-auto ">
              <div className="flex flex-col text-center justify-center items-center">
                <h1 className="text-center text-3xl md:text-4xl text-zinc-800 font-heading font-bold">
                  {" "}
                  Welcome to GoGreen Ganesha{" "}
                </h1>
                <div className="flex flex-row-1 text-center justify-center items-center mt-3">
                  <div className="w-[100px] h-px  bg-[#7abf18] center  mr-[20px]" />
                  <Image
                    src="/imgs/herbal-spa-treatment-leaves.png"
                    width={15}
                    height={15}
                    className="   colors-[#e2e8f0]  "
                  />

                  <div className="w-[100px] h-px  bg-[#7abf18] ml-[20px] " />
                </div>
              </div>
            </div>

            <div className="max-w-[650px] font-body  ">
              <p className="text-left lg:text-lg text-sm text-bold p-3  ">
                “We, at GO GREEN GANESH, are committed to save the environment,
                sea by providing artistically designed Ganesha idols made out of
                River Clay, Soil, Paper Mache which are Ecofriendly , Non-
                Harmful to Nature" . We will invest the best efforts to provide
                the widest range of least priced eco-friendly Ganapati Murtis to
                add more colors to your spirits and enthusiasms.So this year let
                us all Celebrate a Green Ganesh Chaturthi with GoGreenGanesha
              </p>

              <p className="text-left lg:text-lg text-sm  text-bold p-3 ">
                Every year it hurts to see our own Bappa lying on the beach
                shore the very next day of Visarjan. ,Thats why we have made our
                idols in such a way that we can continue enjoying this festival
                without harming any of your nearby water bodies. Our idols are
                made of organic materials only. Mostly from a blend of mud and
                natural red clay. The materials used are biodegradable and cause
                no harm to nature. We do not use synthetic colors, glitter, or
                any harmful ingredients. The idols made by us are 100%
                dissolvable in Water.
              </p>
              <p className="text-left lg:text-lg text-sm  text-bold p-3 ">
                Additionally, you can order this Eco-friendly idol online at
                your convenience. You can also ask for home delivery, where you
                can forget the worries of pickup. We will deliver your Ganpati
                idol to your home with safe packaging.
              </p>
            </div>
          </div>
        </div>

        <div className=" flex flex-col lg:flex-col px-[150px] lg:px-[130px] bg-zinc-100  ">
          {/*   <button link="/clay-ganesha" className='bg-[#184029] max-w-[120px] text-center items-center justify-center  text-display tracking-wide font-semibold text-lightgray py-2 rounded-full px-2 mb-2 hover:bg-hovergreen'>
                        Book Now
                      </button>
                      */}
        </div>
      </section>

      <div id="testimonal" className=" bg-zinc-100   ">
        <div className="p-9 gap-y-5 ">
          <div className="p-9 gap-y-5 	">
            <div className="flex flex-col text-center justify-center items-center">
              <h1 className="text-3xl uppercase font-bold  font-body text-center">
                Happy Customer
              </h1>
              <div className="flex flex-row-1 text-center justify-center items-center mt-3">
                <div className="w-[100px] h-px  bg-[#7abf18] center  mr-[20px]" />
                <Image
                  src="/imgs/herbal-spa-treatment-leaves.png"
                  width={15}
                  height={15}
                  className="   colors-[#e2e8f0]  "
                />

                <div className="w-[100px] h-px  bg-[#7abf18] ml-[20px] " />
              </div>
            </div>
          </div>

          <div className="itmes-center text-center font-heading flex flex-col lg:flex lg:flex-row mt-[40px] justify-center">
            <figure className="snip1139">
              <blockquote>
                The packaging was awesome..it was a big box filled with dry
                grass for protection. Coming to the murti, it was a masterpiece
                with that back sihasan.
                <div className="arrow"></div>
              </blockquote>
              <img
                src="/imgs/WhatsApp Image 2022-06-11 at 9.50.09 PM.jpeg"
                alt=""
              />
              <div className="author">
                <h5>
                  Rajeev <span>- Andheri (W)</span>
                </h5>
              </div>
            </figure>

            <figure className="snip1139 hover">
              <blockquote>
                Ganesh idols were so awesome...a great collection of eco
                friendly ganesh idols you can find at the Bombay store! Will
                surely visit again...n nice service too!!!
                <div className="arrow"></div>
              </blockquote>
              <img src="/imgs/Dhara.jpeg" alt="s" />
              <div className="author">
                <h5>
                  Dharadhar <span>- Borivali (W)</span>
                </h5>
              </div>
            </figure>
            <figure className="snip1139">
              <blockquote>
                Super Beautiful and lovely Idol. And it feels good when you see
                that you are not hampering the nature. And instead giving back
                in form of plant. It's very eco friendly.
                <div className="arrow"></div>
              </blockquote>
              <img src="/imgs/gargi.jpeg" alt="" />
              <div className="author">
                <h5>
                  Gargi <span>- Dadar (W)</span>
                </h5>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

