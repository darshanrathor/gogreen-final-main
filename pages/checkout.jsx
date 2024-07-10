import React, { useEffect, useState } from "react";
import { Loader2, Loader3 } from "../components/loader";
import useCart from "../components/context/cartHooks";
import Image from "next/image";
import { Toalvalue } from "../components/utils/countryHandle";
import { getLocalstorage } from "../components/utils/getlocalstorage";
import { useRouter } from "next/router";
import { supabase } from "../components/supabase/supabase";
import displayRazorpay from "../components/paymentbutton/razorpay";
import CartContextProvider from "../components/context/cartContext";
import { FormatingCurrency } from "../components/utils/feture";
import { POSTALCODE } from "../components/utils/postalcode";

export default function Checkout(props) {
  const initialvalue = {
    firstname: "",
    lastname: "",
    user_mobile_number: "",
    email: "",
    user_address_line_1: "",
    user_address_line_2: "",
    user_city: "",
    user_country: "India",
    user_zipcode: "",
  };

  const [inputvalue, setinputvalue] = useState(initialvalue);
  const [loader, setloader] = useState(true);
  const [loader2, setloader2] = useState(false);

  const [formErrors, setFormErrors] = useState(initialvalue);
  const [error, seterror] = useState("");
  const { cartItem } = useCart();
  const [item, setitem] = useState([]);
  const [user, setuser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // console.log(await Toalvalue());
    if (cartItem) {
      setitem(cartItem);
      setloader(false);
    } else {
      router.push("/");
    }
  }, [cartItem]);

  const data = getLocalstorage("user");

  useEffect(() => {
    if (data) {
      setuser(data);
      setinputvalue((prev) => ({ ...prev, email: user?.email }));
    }
  }, []);

  if (error) {
    setTimeout(() => seterror(""), 4000);
  }

  const validate = (values) => {
    let error = {};
    if (values.user_mobile_number.toString().length < 10) {
      error.user_mobile_number = "*required";
    }

    if (values.user_address_line_1.trim() == "") {
      error.user_address_line_1 = "*required";
    }
    if (!values.email) {
      error.email = "*required";
    }
    if (values.user_city.trim() == "") {
      error.user_city = "*required";
    }
    if (values.lastname.trim() == "") {
      error.lastname = "*required";
    }
    if (values.firstname.trim() == "") {
      error.firstname = "*required";
    }

    if (values.user_zipcode.trim() == "") {
      error.user_zipcode = "*required";
    }
    return error;
  };

  const submitingform = async (e) => {
    e.preventDefault();
    if (Object.keys(validate(inputvalue)).length !== 0) {
      setFormErrors(validate(inputvalue));
      seterror("All detailed must be filled");
    } else if (!POSTALCODE.includes(parseInt(inputvalue.user_zipcode))) {
      seterror(
        "Please note currently we deliver Idols only in Mumbai , Please selcet proper postal code "
      );
    } else if (Object.keys(validate(inputvalue)).length === 0) {
      setloader2(true);
      await updatedatabase();
      await displayRazorpay(
        inputvalue.email,
        inputvalue.firstname + " " + inputvalue.lastname,
        inputvalue.user_mobile_number,
        Toalvalue().totalvalue,
        item
      );
    } else {
      setFormErrors(validate(inputvalue));
    }
  };

  const updatedatabase = async () => {
    const { data, error } = await supabase.from("orderHistory").insert([
      {
        name: inputvalue.firstname + " " + inputvalue.lastname,
        email: inputvalue.email,
        shipping: JSON.stringify(inputvalue),
        order: JSON.stringify(item),
      },
    ]);
    if (!error) {
      setloader2(false);
    }
  };

  if (loader2) {
    setTimeout(() => setloader2(false), 5000);
  }

  const handleinput = (e) => {
    const { name, value } = e.target;
    setinputvalue({ ...inputvalue, [name]: value });
  };

  const handleNumber = (e) => {
    const { name, value } = e.target;
    setinputvalue({ ...inputvalue, [name]: parseInt(value) });
  };

  const handleselect = (e) => {
    const { value, name } = e.target;
    if (value !== "India") {
      setinputvalue((prev) => ({
        ...prev,
        user_country: value,
        user_state: "",
      }));
    } else {
      setinputvalue((prev) => ({ ...prev, [name]: value }));
    }
  };
  if (error) {
    setTimeout(() => seterror(null), 3000);
  }

  // bg-[#f9f8f8]

  if (loader) {
    setTimeout(() => setloader(false), 5000);
  }

  return (
    <>
      <div className="bg-amber-100/70 py-2.5 text-center center px-3">
        Note : We deliver Idols only in Mumbai, Please do not proceed if you are
        not from Mumbai location
      </div>
      {loader ? (
        <Loader2 />
      ) : (
        <div className=" bg-[#f9f8f8]">
          <div className="flex  w-full  items-start lg:flex-row flex-col">
            <div className="flex flex-col px-5  lg:w-3/5 2xl:w-full border-zinc-300 border-r pb-24 pt-6 lg:pt-10 w-full bg-white h-full w-full   gap-5">
              <div className="max-w-lg w-full mx-auto 2xl:ml-auto 2xl:mr-[200px] flex flex-col gap-5">
                <div>
                  <div className={` md:pt-0 relative w-[220px] -mt-2`}>
                    <img
                      src="/imgs/test.png"
                      className="w-full "
                      alt="gogreenganesha"
                    ></img>
                  </div>
                </div>

                <div className="flex mt-5 flex-col  w-full gap-4">
                  <h5 className="md:text-xl font-semibold text-lg">
                    Contact Information
                  </h5>

                  <div>
                    <div className="flex relative flex-col gap-2  w-full">
                      <input
                        autoComplete="off"
                        autoCorrect="off"
                        type="email"
                        id="email"
                        value={inputvalue.email}
                        required
                        placeholder=" "
                        onChange={handleinput}
                        name="email"
                        className={`${
                          formErrors.email
                            ? "border-red-400"
                            : "border-zinc-500"
                        }  focus:border-green-600 st text-[15px] focus:ring-1 focus:ring-green-600  h-[50px] text-base border  rounded  text-zinc-800 px-3 pt-2.5 outline-none`}
                      />
                      <label
                        htmlFor="email"
                        className="whitespace-nowrap labelt "
                      >
                        Email
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex pt-5 border-zinc-300 mt-3 flex-col gap-5">
                  <h5 className="md:text-xl font-semibold text-lg">
                    Enter Your Delivery Details
                  </h5>
                  <form
                    className="flex w-full   gap-10 mx-auto  flex-col"
                    onSubmit={submitingform}
                  >
                    <div className="flex gap-5 flex-col">
                      <div className="flex w-full flex-col gap-2 ">
                        <select
                          onChange={handleselect}
                          name="user_country"
                          defaultValue={inputvalue.user_country}
                          className="w-full h-[50px]   p-2  !border-zinc-500 rounded  text-zinc-800 border  focus:border-green-600 focus:ring-1 focus:ring-green-600  focus:outline-none"
                        >
                          {/* {country.map((item, i) => ( */}
                          <option value="India">India</option>
                          {/* ))} */}
                        </select>
                      </div>

                      <div className="flex gap-10 md:flex-row flex-col">
                        <div className="flex relative flex-col gap-2 w-full">
                          <input
                            autoComplete="off"
                            autoCorrect="off"
                            type="text"
                            value={inputvalue.firstname}
                            required
                            onChange={handleinput}
                            placeholder=" "
                            id="fname"
                            name="firstname"
                            className={`${
                              formErrors.lastname
                                ? "border-red-400"
                                : "border-zinc-500"
                            }  focus:border-green-600 st text-[15px] focus:ring-1 focus:ring-green-600  h-[50px] text-base border  rounded  text-zinc-800 px-3 pt-2.5 outline-none`}
                          />
                          <label
                            htmlFor="fname"
                            className="whitespace-nowrap labelt "
                          >
                            First name
                          </label>
                        </div>
                        <div className="flex relative flex-col gap-2 w-full">
                          <input
                            autoComplete="off"
                            autoCorrect="off"
                            type="text"
                            value={inputvalue.lastname}
                            required
                            onChange={handleinput}
                            placeholder=" "
                            id="lname"
                            name="lastname"
                            className={`${
                              formErrors.lastname
                                ? "border-red-400"
                                : "border-zinc-500"
                            }  focus:border-green-600 text-[15px] st focus:ring-1 focus:ring-green-600  h-[50px] text-base border  rounded  text-zinc-800 px-3 pt-2.5 outline-none`}
                          />
                          <label
                            htmlFor="lname"
                            className="whitespace-nowrap labelt "
                          >
                            Last name
                          </label>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 w-full">
                        <div className="flex w-full flex-col gap-5">
                          <div className="w-full relative">
                            <input
                              autoComplete="off"
                              autoCorrect="off"
                              type="text"
                              placeholder=" "
                              id="address1"
                              value={inputvalue.user_address_line_1}
                              required
                              onChange={handleinput}
                              name="user_address_line_1"
                              className={`${
                                formErrors.user_address_line_1
                                  ? "border-red-400"
                                  : "border-zinc-500"
                              }  focus:border-green-600 st text-[15px] h-[50px] focus:ring-1 focus:ring-green-600  border w-full rounded  text-zinc-800 p-2 outline-none`}
                            />
                            <label
                              htmlFor="address2"
                              className="whitespace-nowrap labelt "
                            >
                              Address
                            </label>
                          </div>
                          <div className="relative w-full">
                            <input
                              autoComplete="off"
                              autoCorrect="off"
                              type="text"
                              id="address2"
                              placeholder=" "
                              value={inputvalue.user_address_line_2}
                              required
                              onChange={handleinput}
                              name="user_address_line_2"
                              className={`${
                                formErrors.user_address_line_2
                                  ? "border-red-400"
                                  : "border-zinc-500"
                              }  focus:border-green-600 st text-[15px] focus:ring-1 focus:ring-green-600  h-[50px] text-base border  rounded  text-zinc-800 px-3 pt-2.5 outline-none w-full`}
                            />
                            <label
                              htmlFor="address2"
                              className="whitespace-nowrap labelt "
                            >
                              Apartment, suits, etc (optional)
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-6 md:gap-7 sm:flex-row flex-col ">
                        <div className="flex relative flex-col gap-2 w-full">
                          <input
                            autoComplete="off"
                            autoCorrect="off"
                            type="text"
                            placeholder=" "
                            id="city"
                            value={inputvalue.user_city}
                            required
                            onChange={handleinput}
                            name="user_city"
                            className={`${
                              formErrors.user_city
                                ? "border-red-400"
                                : "border-zinc-500"
                            }  focus:border-green-600 st text-[15px] focus:ring-1 focus:ring-green-600  h-[50px] text-base border  rounded  text-zinc-800 px-3 pt-2.5 outline-none`}
                          />
                          <label
                            htmlFor="city"
                            className="whitespace-nowrap labelt "
                          >
                            City
                          </label>
                        </div>
                        <div className="flex relative flex-col gap-2  w-full">
                          <input
                            autoComplete="off"
                            autoCorrect="off"
                            type="text"
                            id="zip"
                            value={inputvalue.user_zipcode}
                            required
                            placeholder=" "
                            onChange={handleinput}
                            name="user_zipcode"
                            className={`${
                              formErrors.user_zipcode
                                ? "border-red-400"
                                : "border-zinc-500"
                            }  focus:border-green-600 st text-[15px] focus:ring-1 focus:ring-green-600  h-[50px] text-base border  rounded  text-zinc-800 px-3 pt-2.5 outline-none`}
                          />
                          <label
                            htmlFor="zip"
                            className="whitespace-nowrap labelt "
                          >
                            Postalcode
                          </label>
                        </div>
                      </div>
                      <div className="flex relative flex-col gap-2 w-full">
                        <input
                          autoComplete="off"
                          autoCorrect="off"
                          type="number"
                          minLength="9"
                          maxLength="11"
                          value={inputvalue.user_mobile_number}
                          required
                          onChange={handleNumber}
                          placeholder=" "
                          id="number"
                          name="user_mobile_number"
                          className={`${
                            formErrors.user_mobile_number
                              ? "border-red-400"
                              : "border-zinc-500"
                          }  focus:border-green-600 st text-[15px] focus:ring-1 focus:ring-green-600  h-[50px] text-base border  rounded  text-zinc-800 px-3 pt-2.5 outline-none`}
                        />
                        <label
                          htmlFor="number"
                          className="whitespace-nowrap labelt "
                        >
                          Phone Number
                        </label>
                      </div>
                      <div className="grid gap-6 md:gap-7 w-full md:grid-cols-3 grid-cols-1 "></div>
                    </div>
                    {error && <ErrorButton text={error} />}

                    <div className="bg-red-500 px-10 py-3 md:text-lg text-center text-white rounded-md">
                      2023 Bookings Closed
                    </div>

                    {/* <button
                      onClick={submitingform}
                      disabled={loader2}
                      className={`${
                        !loader2 ? "cursor-pointer" : "cursor-not-allowed"
                      } text-[18px] mt-[-20px] bg-[#184029] text-white font-bold  ml-auto max-w-[250px] hover:bg-green-800 py-4 px-5 rounded`}
                    >
                      {loader2 ? <Loader3 /> : "Continue shopping"}
                    </button> */}

                    {/* <div>
                      <h3 className="bg-green-300 text-xl py-3 center px-3 text-center">
                        Bookings are Closed for 2022
                      </h3>
                    </div> */}

                    <div className="mt-10 text-sm border-t border-zinc-200 pt-4 ">
                      <span>All rights reserved GoGreenGanesha.</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="w-full lg:border-t-none 2xl:w-full border-t md:border-transparent border-zinc-300  lg:w-2/5  pt-10 md:pt-10 pb-20 h-full">
              <div className=" lg:max-w-md px-5 mx-auto flex flex-col gap-5 lg:gap-7 2xl:mr-auto 2xl:ml-[200px]">
                <div className="flex max-h-[300px] overflow-y-scroll divide-y divide-slate-200 flex-col items-center border-b border-slate-200">
                  {item.map((data, i) => (
                    <div
                      key={i}
                      className="flex py-3 justify-between w-full gap-5"
                    >
                      <div className="min-w-[80px] relative">
                        <Image
                          src={data?.imgs[0]}
                          width={50}
                          height={50}
                          layout="responsive"
                          className="rounded-md"
                        />
                      </div>
                      <div className="w-full flex flex-col justify-between">
                        <h2 className="break-words md:text-[18px] leading-6 inline-block">
                          {data?.name}
                        </h2>

                        <p className="flex justify-between items-center gap-5">
                          <span>Qty : {data?.quantity}</span>
                          <span className="text-zinc-800 text-xl ">
                            ₹ {FormatingCurrency(data?.price)}
                          </span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between  md:text-lg text-zinc-800    gap-10">
                    Subtotal:{" "}
                    <span className="text-zinc-800 md:text-xl font-semibold text-lg font-cera_bold">
                      {Toalvalue().subtotalformat}
                    </span>
                  </div>
                  <div className="flex text-zinc-800 justify-between md:text-lg  pb-1">
                    Shipping Charges
                    <span className="font-semibold  text-zinc-800 text-lg">
                      {parseInt(
                        Toalvalue()
                          .subtotal.split("")
                          .slice(1, Toalvalue().subtotal.split("").length)
                          .join("")
                      ) >= 1000
                        ? "Free"
                        : "+ ₹0"}
                    </span>
                  </div>

                  <div className="flex border-t border-zinc-300 pt-3  justify-between md:text-lg text-zinc-800 gap-10">
                    Total:{" "}
                    <span className="text-zinc-800 md:text-xl text-lg font-semibold">
                      {Toalvalue().totalformat}
                    </span>
                  </div>
                </div>
                <div className="">
                  <img
                    src="/imgs/credit-card-secure.png"
                    className="w-full"
                    alt="secure payment"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export function ErrorButton({ text }) {
  return (
    <div className="w-full bg-red-50 border border-red-500  p-3.5 rounded flex items-start gap-3 ">
      <div className="w-[20px]">
        <img src="/imgs/error.svg" alt="error" className="w-full" />
      </div>
      <span className="text-red-500 font-cera_medium mt-[-3px]">{text}</span>
    </div>
  );
}

Checkout.getLayout = function getLayout(page) {
  return (
    <>
      <CartContextProvider>{page}</CartContextProvider>
    </>
  );
};
