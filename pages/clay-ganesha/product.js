import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import BaseSection from "../../components/commonComponent/baseSection";
import useCart from "../../components/context/cartHooks";
import { Loader2 } from "../../components/loader";
import { isInCart } from "../../components/product/feture_product";
import Popupcart from "../../components/product/popupcart";
import ClayRandom from "../../components/randomProduct/clay-random";
import { supabase } from "../../components/supabase/supabase";
import { FormatingCurrency } from "../../components/utils/feture";
import DemoCarousel from "../../components/carousel/reactResponsiveCarousel";

export default function ClayGaneshaSlug() {
  const [qty, setqty] = useState({ qty: 1 });
  const [text, settext] = useState("desc");
  const [popup, setpopup] = useState(false);
  const [product, setproducts] = useState(null);
  const [images, setimage] = useState(0);
  const { addtocart, increase, decrease, cartItem } = useCart();

  const router = useRouter();

  useEffect(() => {
    const id = router.asPath.split("/")[2].split("=")[1];
    fetchGanesha(id);
  }, [router]);

  const fetchGanesha = async (id) => {
    const { data, error } = await supabase
      .from("clay-ganesha")
      .select("*")
      .eq("url", id)
      .single();
    // .order("id", { isActive: true });
    setproducts(data);
    return data;
  };

  console.log(product);

  const handledecrease = () => {
    if (isInCart(product, cartItem)) {
      decrease(product);
      setqty((prev) => ({ qty: prev.qty - 1 }));
    } else if (!isInCart(product, cartItem)) {
      setqty((prev) => ({ qty: prev.qty - 1 }));
    }
  };
  const handleincrase = () => {
    if (isInCart(product, cartItem)) {
      increase(product);
      setqty((prev) => ({ qty: prev.qty + 1 }));
    } else if (!isInCart(product, cartItem)) {
      setqty((prev) => ({ qty: prev.qty + 1 }));
    }
  };
  const handleadddtocart = () => {
    isInCart(product, cartItem) ? setpopup(true) : "";
    addtocart(product);
    for (let i = 0; i <= qty.qty - 2; i++) {
      increase(product);
    }
  };

  const handleClick = (e) => {
    settext(e);
  };

  const handlecart = (e) => {
    setpopup(false);
  };

  const obj = {
    features: [
      { title: "100% Natural", img: "leaf" },
      { title: "Dissolves in water", img: "water" },
      { title: "Attractive Idols", img: "paint" },
      { title: "Home Delivered", img: "car" },
      { title: "Online Booking", img: "pc" },
      { title: "Fairly Priced", img: "tag" },
    ],
  };

  if (popup) {
    setTimeout(() => setpopup(false), 3000);
  }

  const handleiamge = (i) => {
    setimage(i);
  };

  return (
    <>
      {/* <div className="bg-green-300/70 py-2.5 mt-[85px]  text-center center px-3">

Note : Booking are closed for 2022 

</div> */}
      {product ? (
        <>
          <Popupcart
            qty={qty.qty}
            transition={`${
              popup
                ? "-translate-x-[10px] md:-translate-x-[100px] opacity-100 visible"
                : "translate-x-[0px] opacity-0 invisible"
            }`}
            data={product}
            passclose={handlecart}
          />
          <BaseSection>
            <div className="min-h-screen overflow-x-hidden">
              <div className="md:pt-10 truncate pt-10">
                <div className="flex gap-2 items-center text-zinc-500 max-w-7xl px-5 mx-auto">
                  <Link legacyBehavior href="/">
                    <a className="hover:text-green-700 text-zinc-800">Home</a>
                  </Link>
                  /
                  <Link legacyBehavior href="/clay-ganesha">
                    <a className="hover:text-green-700 text-zinc-800">
                      Clay-ganesha
                    </a>
                  </Link>
                  /
                  <span className="whitespace-nowrap max-w-xs w-full truncate">
                    {product?.url}
                  </span>
                </div>
                {/*${images === image[i] ? "border-zinc-500" :"border-transparent"}*/}
                <div className="max-w-7xl  mx-auto pt-8 md:gap-10 md:flex-row flex-col gap-10 flex px-5">
                  <div className=" w-full md:w-1/2">
                    <div className="flex-col-reverse flex gap-2">
                      <>
                        <DemoCarousel data={product?.imgs} />
                        {/* {product?.imgs?.map((item, i) => (
                          <div
                            key={i}
                            onClick={() => handleiamge(i)}
                            className={`${
                              images === i
                                ? "border-zinc-800"
                                : "border-zinc-200"
                            } bg-gray-50 flex cursor-pointer rounded-md  border-2   max-w-max`}
                          >
                            <Image
                              src={item}
                              loading="lazy"
                              alt={product?.name}
                              height={80}
                              width={80}
                              objectFit="cover"
                            />
                          </div>
                        ))} */}
                      </>
                      {/* <div className="bg-gray-50 block responsive w-full rounded-md">
                        <Image
                          layout="responsive"
                          objectFit="cover"
                          objectPosition="center"
                          height={100}
                          width={100}
                          loading="lazy"
                          src={
                            product?.imgs[images] ? product?.imgs[images] : ""
                          }
                          alt={product?.name}
                          className="rounded"
                        />
                      </div> */}
                    </div>
                  </div>
                  <div className=" md:w-1/2 break-words inline-block whitespace-normal 	w-full ">
                    <div className="flex flex-col gap-5">
                      <div className="flex  flex-col gap-3 md:px-14">
                        <h2
                          style={{ lineHeight: 1.3 }}
                          className="text-zinc-900  font-semibold md:text-4xl text-2xl sm:text-3xl"
                        >
                          {product?.name}
                        </h2>

                        <div className="relative pb-3 pt-1">
                          <h5 className="md:text-4xl text-3xl font-bold font- text-zinc-900 flex gap-3 items-center">
                            ₹{FormatingCurrency(product?.price)}
                          </h5>
                        </div>
                        {/*fetures */}

                        <div>
                          <ul className="flex flex-col gap-2 text-zinc-600">
                            <li className="md:text-xl md:text-lg ">
                              <b className="font-semibold text-zinc-800">
                                Size
                              </b>{" "}
                              : {product?.feature?.size}
                            </li>
                            <li className="md:text-xl md:text-lg">
                              <b className="font-semibold text-zinc-800">
                                Material
                              </b>{" "}
                              : {product?.feature?.material}
                            </li>
                            <li className="md:text-xl md:text-lg">
                              <b className="font-semibold text-zinc-800">
                                Finish
                              </b>{" "}
                              : {product?.feature?.finish}
                            </li>
                            <li className="md:text-xl md:text-lg">
                              <b className="font-semibold text-zinc-800">
                                Features
                              </b>{" "}
                              : {product?.feature?.features}
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-col mt-5">
                        <div className="flex gap-3 items-center text-zinc-800 pb-5 md:text-xl md:px-14">
                          Quantity:
                          <div className="flex py-2 px-2 gap-3 rounded-[10px] max-w-[100px] w-full divide-zinc-200   border border-zinc-300">
                            <button
                              onClick={handledecrease}
                              className={`${
                                qty.qty === 1
                                  ? "text-zinc-300 cursor-not-allowed"
                                  : ""
                              } w-full`}
                              disabled={qty.qty === 1}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M18 12H6"
                                />
                              </svg>
                            </button>
                            <span className="w-full text-center">
                              {qty.qty}
                            </span>
                            <button onClick={handleincrase} className="w-full">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 4v16m8-8H4"
                                />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-4 pb-7 mt-5">
                          <button
                            onClick={() => {
                              setpopup(true);
                              handleadddtocart();
                            }}
                            className="text-base md:mx-12 rounded-full hover:scale-[1.05] transform transition duration-200 ease-in bg-zinc-900 text-white font-semibold hover:bg-zinc-800  p-4 max-w-sm w-full"
                          >
                            ADD TO BASKET
                          </button>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={`https://wa.me/918169882692/?text=Hii, Gogreenganesha, %0a %0a I want to order this ${product?.name} murti %0a  https://gogreenganesha.com/clay-ganesha/product?q=${product?.url}`}
                            className="text-base md:mx-12 rounded-full hover:scale-[1.05] transform transition duration-200 ease-in bg-green-600 uppercase text-white font-semibold hover:bg-green-700 flex gap-3 justify-center items-center  px-4 py-3 max-w-sm w-full"
                          >
                            <span>
                              <svg
                                className="w-[30px]"
                                style={{ enableBackground: "new 0 0 512 512" }}
                                version="1.1"
                                viewBox="0 0 512 512"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="_x33_75-whatsapp">
                                  <g>
                                    <path
                                      d="M417.103,92.845C374.08,49.721,316.787,26.001,255.897,26.001    c-125.678,0-227.946,102.269-227.946,227.945c0,40.146,10.474,79.37,30.394,113.973l-32.343,118.08l120.852-31.728    c33.268,18.173,70.744,27.724,108.941,27.724h0.103c125.576,0,230.101-102.269,230.101-227.945    C485.998,193.161,460.125,135.97,417.103,92.845z"
                                      style={{ fill: "#2CB742" }}
                                    />
                                    <path
                                      d="M255.897,443.593c-34.089,0-67.46-9.138-96.518-26.388l-6.879-4.107l-71.67,18.789l19.099-69.924    l-4.518-7.187c-18.995-30.188-28.956-64.995-28.956-100.83c0-104.424,85.018-189.44,189.545-189.44    c50.619,0,98.158,19.714,133.892,55.548c35.731,35.835,57.705,83.376,57.603,133.996    C447.495,358.578,360.319,443.593,255.897,443.593z"
                                      style={{ fill: "#fff" }}
                                    />
                                    <path
                                      d="M359.807,301.691c-5.647-2.872-33.677-16.635-38.914-18.48c-5.237-1.952-9.035-2.875-12.834,2.875    s-14.683,18.48-18.073,22.384c-3.285,3.799-6.674,4.312-12.321,1.437c-33.473-16.735-55.445-29.878-77.521-67.768    c-5.853-10.062,5.854-9.344,16.736-31.11c1.85-3.801,0.926-7.086-0.514-9.961c-1.436-2.875-12.834-30.906-17.557-42.304    c-4.62-11.089-9.343-9.549-12.835-9.754c-3.285-0.206-7.086-0.206-10.883-0.206c-3.8,0-9.96,1.438-15.197,7.085    c-5.236,5.75-19.92,19.51-19.92,47.541s20.432,55.139,23.205,58.937c2.874,3.798,40.148,61.299,97.338,86.045    c36.144,15.607,50.314,16.94,68.386,14.271c10.985-1.643,33.679-13.759,38.401-27.107c4.723-13.347,4.723-24.743,3.285-27.105    C369.255,305.901,365.454,304.465,359.807,301.691z"
                                      style={{ fill: "#2CB742" }}
                                    />
                                  </g>
                                </g>
                                <g id="Layer_1" />
                              </svg>
                            </span>
                            Whatsapp Booking
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*mobile description */}
              <div className="sm:hidden px-5 flex flex-col gap-3">
                <div
                  className={`${
                    text === "desc"
                      ? " border-zinc-100 shadow-md shadow-zinc-200/50 "
                      : "border-transparent"
                  } border flex flex-col gap-4 rounded-lg `}
                >
                  <button
                    onClick={() =>
                      settext((prev) => (prev === "desc" ? "" : "desc"))
                    }
                    className={`${
                      text === "desc" ? "rounded-t-lg" : " rounded-lg"
                    } bg-gradient-to-r from-green-50 to-teal-50  p-4  w-full   flex justify-between text-left cursor-pointer font-semibold text-xl md:text-2xl`}
                  >
                    Description
                    <span className=" block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${
                          text === "desc" ? "transform rotate-180" : ""
                        } fill-zinc-800 h-5 w-5 transition duration-100 ease-in`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                  {text === "desc" && (
                    <div className="flex flex-col pb-5 gap-4">
                      {product?.description?.description?.map((item, i) => (
                        <div key={i} className="flex px-5 flex-col gap-3">
                          <h6 className="md:text-2xl text-lg sm:text-xl font-semibold">
                            {item.title}
                          </h6>
                          <p className="md:text-lg ">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div
                  className={`${
                    text === "feature"
                      ? " border-zinc-100 rounded-t-lg shadow-md shadow-zinc-200/50 "
                      : "border-transparent rounded-lg"
                  } border flex flex-col gap-4`}
                >
                  <button
                    onClick={() =>
                      settext((prev) => (prev === "feature" ? "" : "feature"))
                    }
                    className={`${
                      text === "desc" ? "rounded-t-lg" : " rounded-lg"
                    } bg-gradient-to-r from-green-50 to-teal-50  p-4  w-full   flex justify-between text-left cursor-pointer font-semibold text-xl md:text-2xl`}
                  >
                    Features
                    <span className=" block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${
                          text === "feature" ? "transform rotate-180" : ""
                        } fill-zinc-800 h-5 w-5 transition duration-100 ease-in`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                  {text === "feature" && (
                    <div className="flex flex-col pb-5 px-5">
                      {obj.features.map((item, i) => (
                        <div
                          key={i}
                          className="flex border border-zinc-100 flex-col items-center text-center whitespace-nowrap w-full px-10 py-6"
                        >
                          <div>
                            <img
                              src={`/imgs/${item.img}.svg`}
                              className="w-[30px] h-[30px]"
                              alt={item.title}
                            />
                          </div>
                          <h6 className="font-semibold md:text-[17px]">
                            {item.title}
                          </h6>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/*        
                <div
                  className={`${text === "additional"
                    ? " border-zinc-100 rounded-t-lg shadow-md shadow-zinc-200/50 "
                    : "border-transparent rounded-lg"
                    } border flex flex-col gap-4`}
                >
                  <button
                    onClick={() =>
                      settext((prev) => (prev === "additional" ? "" : "additional"))
                    }
                    className={`${text === "desc" ? "rounded-t-lg" : " rounded-lg"
                      } bg-gradient-to-r from-green-50 to-teal-50  p-4  w-full   flex justify-between text-left cursor-pointer font-semibold text-xl md:text-2xl`}
                  >
                    Additional Information
                    <span className=" block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${text === "desc" ? "transform rotate-180" : ""
                          } fill-zinc-800 h-5 w-5 transition duration-100 ease-in`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                  {text === "additional" && (
                    <div className="flex   flex-col pb-5 px-5 gap-2 sm:gap-4">
                      {product?.description?.additional?.map((item, i) => (
                        <div key={i} className="flex  py-2 gap-4 sm:gap-12">
                          <h6 className="w-full max-w-[80px] col-span-2 font-semibold">
                            {item.title}
                          </h6>
                          <p className="md:text-lg  col-span-10 break-words ">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                      */}

                <div
                  className={`${
                    text === "specification"
                      ? " border-zinc-100 rounded-t-lg shadow-md shadow-zinc-200/50 "
                      : "border-transparent rounded-lg"
                  } border flex flex-col gap-4`}
                >
                  <button
                    onClick={() =>
                      settext((prev) =>
                        prev === "specification" ? "" : "specification"
                      )
                    }
                    className={`${
                      text === "desc" ? "rounded-t-lg" : " rounded-lg "
                    } bg-gradient-to-r from-green-50 to-teal-50  p-4  w-full   flex justify-between text-left cursor-pointer font-semibold text-xl md:text-2xl`}
                  >
                    Specification
                    <span className=" block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`${
                          text === "desc" ? "transform rotate-180" : ""
                        } fill-zinc-800 h-5 w-5 transition duration-100 ease-in`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                  {text === "specification" && (
                    <div className=" px-5  pb-5 ">
                      <h3 className="start py-1  text-lg md:text-xl ">
                        {" "}
                        With Gogreen Ganesha{" "}
                      </h3>
                      <p className="start py-3 text-base md:text-xl">
                        Let us celebrate this year Ganesh Chaturthi in an
                        eco-friendly way by welcoming your home a Murti of Go
                        Green Ganesha. It is basically made up of River Mud,
                        Natural Colors that will not harm the mother nature
                        after visarjan. Just by changing the material used to
                        create the Murti, we managed to change the way people
                        looked at immersions during the festival. To complete
                        the immersion ritual with a Go Green Ganesha Murti, all
                        we need is a sprinkle of water and the best part is, it
                        can be done in one's own backyard instead of being
                        carried to a waterbody. This exciting new format
                        instantly touched a chord with people. It not only
                        solves the water pollution issue but also creates a huge
                        environmental impact for water bodies that get polluted
                        every year.
                      </p>

                      <p className="start py-3 text-base md:text-xl ">
                        So, Book your Go Green Ganesha now and contribute a bit
                        to Nature! "
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/*desktop description*/}
              <div className="sm:block mt-14 hidden">
                <div className="max-w-6xl border border-slate-200 rounded bg-slate-50 mx-auto mt-5 w-full mb-10">
                  <ul className="flex divide-x divide-slate-200  rounded-l bg-white   w-full font-bold font-body">
                    <li
                      className={`py-3.5
								${
                  text === "desc" ? "bg-slate-50" : ""
                } cursor-pointer text-xl transition-all duration-200 px-8 ease-in uppercase  font-bold`}
                      onClick={() => handleClick("desc")}
                    >
                      Description
                    </li>

                    <li
                      className={`py-3.5
								${
                  text === "feature" ? "bg-slate-50" : ""
                } cursor-pointer text-xl transition-all duration-200 px-8 ease-in uppercase  font-bold`}
                      onClick={() => handleClick("feature")}
                    >
                      Features
                    </li>

                    {/*  <li
                      className={`py-3.5
                 ${text === "additional" ? "bg-slate-50" : ""
                        } cursor-pointer text-xl transition-all duration-200 px-8 ease-in uppercase  font-bold`}
                      onClick={() => handleClick("additional")}
                    >
                      Additional Information
                    </li>
                      */}
                  </ul>

                  <div className="p-6">
                    {text === "desc" && (
                      <div className="flex flex-col gap-5">
                        {product?.description?.description?.map((item, i) => (
                          <div key={i} className="flex flex-col gap-3">
                            <h6 className="md:text-2xl  text-xl font-semibold">
                              {item.title}
                            </h6>
                            <p className="md:text-lg ">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    {/* {text === "additional" && (
                      <div className="flex divide-y border rounded px-5 flex-col">
                        {product?.description?.additional?.map((item, i) => (
                          <div key={i} className="grid grid-cols-12  py-3 gap-14">
                            <h6 className="text-lg col-span-2 font-semibold">
                              {item.title}
                            </h6>
                            <p className="md:text-lg col-span-10 ">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    )} */}

                    {text === "feature" && (
                      <div className="grid grid-cols-2 md:grid-cols-3  rounded px-5 ">
                        {obj.features.map((item, i) => (
                          <div
                            key={i}
                            className="flex border border-slate-200 flex-col items-center gap-3 text-center whitespace-nowrap w-full px-10 py-8"
                          >
                            <div>
                              <img
                                src={`/imgs/${item.img}.svg`}
                                className="w-[40px] h-[40px]"
                                alt={item.title}
                              />
                            </div>
                            <h6 className="font-semibold md:text-[19px]">
                              {item.title}
                            </h6>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="sm:block mt-14 hidden ">
                <div className="max-w-6xl border border-slate-200 rounded bg-slate-50 mx-auto mt-5 w-full mb-10">
                  <div className=" p-10  ">
                    <h2 className="font-semibold md:text-[27px] uppercase">
                      {" "}
                      Specification
                    </h2>

                    <h3 className="start py-1 mt-4 text-xl ">
                      {" "}
                      With Gogreen Ganesha{" "}
                    </h3>
                    <p className="start py-3 text-xl">
                      Let us celebrate this year Ganesh Chaturthi in an
                      eco-friendly way by welcoming your home a Murti of Go
                      Green Ganesha. It is basically made up of Red Soil,
                      Organic Fertilizers, Natural Colors and Seeds that will
                      transform Ganesha Murti into a plant. Just by changing the
                      material used to create the Murti, we managed to change
                      the way people looked at immersions during the festival.
                      To complete the immersion ritual with a Go Green Ganesha
                      Murti, all we need is a sprinkle of water and the best
                      part is, it can be done in one's own backyard instead of
                      being carried to a waterbody. This exciting new format
                      instantly touched a chord with people. It not only solves
                      the water pollution issue but also creates a huge
                      environmental impact for water bodies that get polluted
                      every year.
                    </p>

                    <p className="start py-3 text-xl ">
                      So, Book your Go Green Ganesha now and contribute a bit to
                      Nature! "
                    </p>
                  </div>
                </div>
              </div>

              <ClayRandom name="clay-ganesha" url={product?.url} />
            </div>
          </BaseSection>
        </>
      ) : (
        <Loader2 />
      )}
    </>
  );
}

// export async function getStaticProps() {

//   const random = data.filter(item => item.url !== str1).sort( () => Math.random() - 0.5).slice(0,4);
//   return {
//       props: {
//           data: mala.response.products.filter(item => item.url === str1),
//           url:str1,
//           random:random
//       }
//   }
// }
