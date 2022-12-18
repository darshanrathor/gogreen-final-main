import React, { useState } from "react";
import Link from "next/link";
// import { LoginHook } from "../components/utils/GoogleLogin";
import { supabase } from "../components/supabase/supabase";
import { ErrorButton } from "../components/error/formerrortext";
import { useRouter } from "next/router";
import { storeUser } from "../components/utils/getlocalstorage";

export default function Signup() {
  const initialValue = {
    email: "",
    password: "",
    name: "",
  };
  const [Viewpassword, setViewPassword] = useState(false);

  const [inputvalue, setvalue] = useState(initialValue);
  const [error, seterror] = useState("");
  const router = useRouter();

  if (error) {
    setTimeout(() => seterror(""), 2000);
  }

  const handleInput = (e) => {
    const { name, value } = e.target;
    setvalue({ ...inputvalue, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputvalue.password.length < 6) {
      seterror("password must be 6 character");
    } else if (
      inputvalue.email !== "" &&
      inputvalue.password !== "" &&
      inputvalue.password.length >= 6
    ) {
      validate();
      window.location.href = "/";
    } else {
      seterror("All details must be filled");
    }
  };

  const validate = async () => {
    const d = await storedetail();
    if (d?.err === null || undefined) {
      storeUser("user", { name: d.data[0].name, email: d.data[0].email });
    } else {
      seterror(d?.err?.details.split("=")[1]);
    }
  };

  const storedetail = async () => {
    try {
      const { data, error } = await supabase.from("userProfile").insert([
        {
          name: inputvalue.name,
          email: inputvalue.email,
          password: inputvalue.password,
        },
      ]);
      return { data: data, err: error };
    } catch (err) {
      console.log(err);
    }
  };

  const HandleviewPassword = () => {
    setViewPassword((prev) => !prev);
  };

  return (
    <>
      {/*signup form*/}
      <div className="pb-20 bg-[#f9f8f8] px-5 pt-36 flex flex-col gap-10 justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded shadow-xl max-w-lg p-6 sm:p-10 w-full flex flex-col gap-6"
        >
          <div>
            <h2 className="mb-2 text-4xl text-zinc-700 font-bold text-[#184029]">Signup</h2>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex  flex-col gap-2">
              <label htmlFor="name" className=" text-zinc-500  text-lg">
                Full Name
              </label>
              <div className="w-full flex focus-within:ring-2 focus-within:ring-green-100 focus-within:border-green-200 items-center gap-3 border focus:border-gray-400 px-4 border-gray-200 rounded">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64.000000 64.000000"
                  className="w-6 h-6 "
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                    fill="#B9BEC7"
                    stroke="none"
                  >
                    <path
                      d="M244 591 c-88 -54 -108 -149 -49 -236 16 -23 20 -35 11 -35 -23 0
-97 -72 -120 -119 -27 -52 -41 -120 -31 -151 6 -19 13 -20 265 -20 252 0 259
1 265 20 10 31 -4 99 -31 151 -23 47 -97 119 -120 119 -9 0 -5 12 11 35 59 88
35 193 -56 240 -39 21 -108 19 -145 -4z m127 -47 c93 -48 55 -194 -50 -194
-104 0 -146 137 -57 191 38 23 67 24 107 3z m63 -284 c49 -33 87 -90 93 -139
l6 -41 -213 0 -213 0 6 42 c7 55 52 116 107 146 61 32 159 29 214 -8z"
                    />
                  </g>
                </svg>
                <input
                  id="name"
                  type="text"
                  onChange={handleInput}
                  value={inputvalue.name}
                  name="name"
                  placeholder="Full name"
                  className="outline-none w-full  p-2.5"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="  text-zinc-500  text-lg">
                Email Address
              </label>
              <div className="w-full focus-within:ring-2 focus-within:ring-green-100 focus-within:border-green-200 flex items-center gap-3 border focus:border-gray-400 px-4 rounded border-gray-200">
                <svg
                  fill="none"
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.121.878a3 3 0 00-4.242 0L.877 4.88A2.989 2.989 0 000 7v7a2 2 0 002 2h12a2 2 0 002-2V7a2.99 2.99 0 00-.879-2.122l-5-4zm3.042 4.986L8 8.844l-5.164-2.98 4.457-3.565a1 1 0 011.414 0l4.456 3.565zm.838 1.825l-5.49 3.17a.993.993 0 01-1.012.007L2 7.69V14h12V7.69z"
                    fill="#B9BEC7"
                  />
                </svg>
                <input
                  id="email"
                  type="email"
                  onChange={handleInput}
                  value={inputvalue.email}
                  name="email"
                  placeholder="example@gmail.com"
                  className="outline-none  w-full  p-2.5"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="  text-zinc-500  text-lg">
                Password
              </label>
              <div
                className={`w-full relative  focus-within:ring-2 focus-within:ring-green-100 focus-within:border-green-200 flex  items-center gap-3 border focus:border-gray-400 px-4 rounded border-gray-200`}
              >
                <svg
                  fill="none"
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 16"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 4a2 2 0 114 0v2.058A35.706 35.706 0 007 6c-.695 0-1.37.022-2 .058V4zM3 6.22V4a4 4 0 118 0v2.22a39.5 39.5 0 011.315.162C13.306 6.52 14 7.373 14 8.336v4.962c0 .836-.529 1.624-1.39 1.873C11.554 15.478 9.407 16 7 16s-4.553-.522-5.61-.829A1.938 1.938 0 010 13.298V8.336c0-.963.693-1.815 1.685-1.954.35-.05.796-.106 1.315-.161zM2 8.358v4.909c.983.282 2.896.734 5 .734s4.017-.452 5-.734V8.357A37.569 37.569 0 007 8c-2.075 0-3.961.213-5 .357zM7 9a1 1 0 011 1v2a1 1 0 11-2 0v-2a1 1 0 011-1z"
                    fill="#B9BEC7"
                  />
                </svg>
                <input
                  id="password"
                  type={`${Viewpassword ? "text" : "password"}`}
                  onChange={handleInput}
                  value={inputvalue.password}
                  name="password"
                  placeholder="Enter your password"
                  className=" outline-none  w-full  p-2.5"
                  required
                />
                {inputvalue.password !== "" && (
                  <div
                    onClick={HandleviewPassword}
                    className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2"
                  >
                    {!Viewpassword ? (
                      <svg
                        aria-hidden="true"
                        className=" fill-zinc-400 hover:fill-zinc-800 SVGInline--cleaned-svg SVG-svg Icon-svg Icon--review-svg Icon--hoverable-svg db-RegisterTextInputWithVisibilityToggle-visibilityToggle-svg Icon-color-svg Icon-color--gray300-svg"
                        height="16"
                        width="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 14c-4.418 0-8-4.686-8-6s3.582-6 8-6 8 4.686 8 6-3.582 6-8 6zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0-2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                          fillRule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="fill-zinc-400 hover:fill-zinc-800"
                        aria-hidden="true"
                        height="16"
                        width="16"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M15.707.293a1 1 0 0 1 .083 1.32l-.083.094-14 14a1 1 0 0 1-1.497-1.32l.083-.094 2.448-2.45C1.061 10.43 0 8.715 0 8c0-1.314 3.582-6 8-6 1.29 0 2.508.4 3.587.997L14.293.293a1 1 0 0 1 1.414 0Zm-1.422 4.839C15.359 6.285 16 7.444 16 8c0 1.314-3.582 6-8 6-.765 0-1.505-.14-2.205-.38l1.659-1.657a4 4 0 0 0 4.51-4.51l2.32-2.321ZM8 4a4 4 0 0 0-3.447 6.031l1.514-1.514a2.003 2.003 0 0 1 2.45-2.45l1.514-1.514A3.981 3.981 0 0 0 8 4Z" />
                      </svg>
                    )}
                  </div>
                )}
              </div>
            </div>
            {error !== "" && <ErrorButton text={error} />}
            <button
              type="submit"
              className="mt-1 text-lg hover:bg-green-800 bg-[#184029] py-3 px-6 rounded text-white"
            >
              Sign Up
            </button>
          </div>

        </form>
        <p className="text-zinc-800 text-lg">
          Already have an account ?{" "}
          <Link href="/login">
            <a className="font-semibold text-blue-600 hover:text-rose-500">
              Log in
            </a>
          </Link>

        </p>
      </div>
    </>
  );
}
