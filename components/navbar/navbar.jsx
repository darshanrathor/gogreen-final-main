import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, {useEffect, useState } from "react";
import useCart from "../context/cartHooks";
import dynamic from "next/dynamic";
import Cookies from "js-cookie";
import { getLocalstorage } from "../utils/getlocalstorage";
const DynamicMobile = dynamic(()=> import("../navbar/mobilemenu"));

export default function Navbar() {
  const {itemCount} = useCart();
  const [cartitem, setcartitem] = useState(0);
  const [displaymenu,setdisplaymenu] = useState(false);
const [user,setuser] = useState(null);
  const router = useRouter();

  const data = getLocalstorage("user");


useEffect(() => {
  setcartitem(itemCount);
},[itemCount]);


  useEffect(() => {
    setuser(data);
  }, []);


const handleclose =()=> {
  setdisplaymenu(prev=> !prev);
}

const logout = (name) => {
  Cookies.remove("user");
  router.reload();
};

  return (
    <>
         <DynamicMobile
        transition={
          displaymenu
            ? "translate-x-0 opacity-100 visible"
            : "transplate-x-[300px] opacity-0 invisible "
        }
        passclose={handleclose}
      />
    <div
      className={`flex justify-around  w-full  h-[85px] z-20 fixed border-b border-green-800 bg-[#184029] duration-[200ms] ease-in-out left-0 top-0`}
    >
      <div className="flex w-full  items-center gap-10 justify-between max-w-7xl mx-auto px-5 ">
        <div className="flex items-center gap-2">
          <button onClick={handleclose} className="text-white md:hidden block">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
</svg>
          </button>
          <Link href="/">
        <a className="w-[130px]">
<Image priority={true} width={100} height={50} layout="responsive" src="/imgs/white.png" />
        </a>
        </Link>
        </div>

        <div className="hidden md:flex gap-7 justify-center items-center w-full">
<Navlink text="clay ganesha" link="/clay-ganesha"/>
<Navlink text="paper ganesha" link="/paper-ganesha"/>
<Navlink text="plant ganesha" link="/plant-ganesha"/>
        </div>
        <div className="flex gap-5  items-center">
          <div className="flex gap-1  text-white items-center">
{user!== null ? 
<div>
                <div className="relative group py-2 cursor-default">
                <h6 className="text-white cursor-pointer flex flex-col gap-1 leading-[1.1]">
  Hello, <span className="capitalize">{user?.name}</span>
</h6>
                    <div className="group-hover:opacity-100 divide-y divide-slate-200 shadow-xl border-[3px] border-green-700  invisible    rounded-md  w-[200px]  bg-white cursor-pointer group-hover:visible transition-all duration-150 ease-in opacity-0 absolute top-[110%] right-0 ">
                      <button
                        onClick={() => router.push("/userProfile/callHistory")}
                        className=" py-4 hover:bg-[#E6FCE0] w-full font-semibold text-[15px] text-zinc-800 "
                      >
                        Order History
                      </button>
                      <button
                        onClick={logout}
                        className={`py-4  hover:bg-[#E6FCE0]  w-full text-[15px] font-semibold  text-zinc-800`}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
</div>

: 
<>
<Link href="/login">
  <a className="text-white hover:text-zinc-300 md:text-lg">
    Login
  </a>
</Link>
/
<Link href="/signup">
  <a className="text-white hover:text-zinc-300 md:text-lg">
    Signup
  </a>
</Link>
</>
}
</div>
        <button className="text-white flex gap-1 items-center px-6  hover:text-zinc-300" onClick={() => router.push("/cart")}>
        <svg
              className="w-6  stroke-current h-6"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 1.5L2.25 4.5V15C2.25 15.3978 2.40804 15.7794 2.68934 16.0607C2.97064 16.342 3.35218 16.5 3.75 16.5H14.25C14.6478 16.5 15.0294 16.342 15.3107 16.0607C15.592 15.7794 15.75 15.3978 15.75 15V4.5L13.5 1.5H4.5Z"
                strokeWidth="1.08"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M2.25 4.5H15.75"
                strokeWidth="1.08"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M12 7.5C12 8.29565 11.6839 9.05871 11.1213 9.62132C10.5587 10.1839 9.79565 10.5 9 10.5C8.20435 10.5 7.44129 10.1839 6.87868 9.62132C6.31607 9.05871 6 8.29565 6 7.5"
                strokeWidth="1.08"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          <span
            className={`font-semibold  text-[17px]`}
          >
            {cartitem > 0 ? "(" +cartitem + ")" : ""}
          </span>
        </button>
        </div>
      </div>
    </div>
    </>
  );
}




const Navlink = ({text,link})=> {
  return(
    <Link href={link}>
<a className="capitalize hover:text-zinc-300   py-2.5 text-white font-semibold md:text-xl duration-100 ease-in">
{text}
</a>
    </Link>
  )
} 