import React, { useState } from "react";
import Link from "next/link";
// import { LoginHook } from "../components/utils/GoogleLogin";
import { ErrorButton } from "../components/error/formerrortext";
import { supabase } from "../components/supabase/supabase";
import  { useRouter } from "next/router";
import { storeUser } from "../components/utils/getlocalstorage";

export default function Login() {
  const initialValue = {
    email: "",
    password: "",
  };
  const [inputvalue, setvalue] = useState(initialValue);
  const [error, seterror] = useState("");
  const [Viewpassword, setViewPassword] = useState(false);
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
    if (inputvalue.email !== "" && inputvalue.password !== "") {
      validate();
    } else {
      seterror("All details must be filled");
    }
  };

  const validate = async () => {
    const { data, error } = await supabase
      .from("userProfile")
      .select("*")
      .match({
        email: inputvalue.email,
        password: inputvalue.password,
      });

    if (data.length === 0) {
      seterror("Invalid login credential");
    } 
    else{
      storeUser("user",data[0]);
        router.push("/");
    }
  };

  const HandleviewPassword = () => {
    setViewPassword((prev) => !prev);
  };
  return (
    <>

    <div  className="flex-col lg:w-full   lg:flex-row lg:flex  w-full h-screen    "> 
      <div
        style={{ boxShadow: "0px 100px 800px 0px #f9f8f8" }}
        className=" py-32 bg-[url('/try/xyz.jpg')] bg-opacity-50 lg:w-full"
      >
        {/*login form*/}
        <div className=" flex lg:w-full justify-center items-center sm:p-0 px-5">
          <form onSubmit={handleSubmit} className="bg-white rounded shadow-xl max-w-md p-6 sm:p-10 w-full flex flex-col gap-6">
            <div>
              <h2 className="mb-2 text-3xl uppercase font-bold text-[#184029] text">Sign in</h2>
            </div>
            <div className="flex flex-col gap-5">
              {/* <LoginHook text=" Sign In with Google" className="text-[#7abf18]"/> */}
              <div className="flex gap-3 text-lg text-zinc-400 items-center">
                <span className="h-px w-full bg-[#184029]"></span>
                or
                <span className="h-px w-full bg-[#184029]"></span>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className=" text-zinc-500  text-lg">
                  Email Address
                </label>
                <div
                  className={`w-full focus-within:ring-2 focus-within:ring-green-100 focus-within:border-green-200 flex  items-center gap-3 border focus:border-gray-400 px-4 rounded border-gray-200`}
                >
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
                    placeholder="name@address.com"
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
                  className={`w-full relative focus-within:ring-2 focus-within:ring-green-100 focus-within:border-green-200 flex  items-center gap-3 border focus:border-gray-400 px-4 rounded border-gray-200`}
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
                Sign in
              </button>
            </div>

            <div className="flex flex-col gap-1 items-center">
              {/* <p>
                Forgot your password ?{" "}
                <Link href="/password-reset">
                  <a className="font-semibold text-green-500 hover:text-rose-500">
                    Click here
                  </a>
                </Link>
                .
              </p> */}
              <p>
                Don't have an account yet?{" "}
                <Link href="/signup">
                  <a className="font-semibold text-blue-500 hover:text-rose-500">
                    Sign up
                  </a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      </div>
    </>
  );
}
