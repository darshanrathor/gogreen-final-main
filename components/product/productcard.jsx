import { useState } from "react";
import { FormatingCurrency } from "./formatingcurrency";
import useCart from "../context/cartHooks";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Popupcart from "./popupcart";
export function Product(props) {
  const { addtocart } = useCart();
  const [popup, setpopup] = useState(false);



  const handlecart = (e) => {
    setpopup((prev) => !prev);
  };

  if (popup) {
    setTimeout(() => setpopup(false), 3000);
  }

  const router = useRouter();
  return (
    <>
      {/* {popup && <BlurBackground />} */}
      {/* <Popupcart
        data={props.data}
        transition={`${
          popup
            ? "-translate-x-[100px] opacity-100 visible"
            : "translate-x-[0px] opacity-100 visible"
        }`}
        passclose={handlecart}
        qty={1}
      /> */}
      <div className="flex px-4 py-4 flex-col gap-2 w-full group">
        <Link 
        href={{
          pathname: `/${props.category}/product`,
          query: { q: props.url },
        }}>
          <a
            className={`relative ${props.color} group w-full mb-1 cursor-pointer`}
          >
            <Image
              src={props.img}
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              height={100}
              width={100}
               className="rounded"
              //   placeholder="blur"
              loading="lazy"
              alt={props.name}
            />
            <span className="absolute group-hover:opacity-100 duration-100 ease-linear group-hover:visible invisible opacity-0 uppercase font-semibold bottom-[0px] text-center bg-white/70  text-zinc-800 py-3 w-full">
              Quick View
            </span>
          </a>
        </Link>
          <div className=" flex flex-col gap-1 justify-between ">
            <h5
              style={{ lineHeight: 1.4 }}
              onClick={() =>
                router.push(`/${props.category}/${props.url}`)
              }
              className="text-[18px] mb-1 font-semibold cursor-pointer line text-zinc-700"
            >
              {props?.name}
            </h5>
            <div className="flex justify-between items-center">
        
            <div className="flex mt-1 gap-2 text-lg items-center">
              <span className="text-zinc-800 font-bold group-hover:text-green-600 text-lg">
                {"₹" + FormatingCurrency(props.amount)}
              </span>
            </div>
            <button
            onClick={() => {
              setpopup(true);
              addtocart(props.data);
            }}
            className="pr-2 self-center "
          >
            <svg
              className="w-7 text-zinc-800 hover:stroke-green-700 stroke-current h-7"
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
          </button>
            </div>
           
          </div>
          
        </div>
    </>
  );
}
