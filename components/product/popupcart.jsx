import Link from "next/link";
import React from "react";
import { FormatingCurrency } from "../utils/feture";
import { a, useTransition } from "@react-spring/web";

export default function Popupcart({ data, qty, active, passclose }) {
  const transitions = useTransition(active, {
    from: { opacity: 0, transform: "translateX(50px)" },
    enter: { opacity: 1, transform: "translateX(0)" },
    leave: { opacity: 0, transform: "translateX(-50px)" },
    config: { duration: 100 },
  });

  return (
    <>
      {transitions((style, i) => (
        <a.div
          style={style}
          className={`flex z-30  duration-200 ease-in fixed w-full border-[2px] border-green-500 rounded shadow-xl shadow-gray-200/30 bg-white top-[50px] right-5 flex-col gap-5 p-6  max-w-[330px]`}
        >
          <div className="flex text-zinc-800 justify-between font-semibold items-center md:text-xl text-xl">
            Added To Basket
            <button
              onClick={() => passclose(true)}
              className="hover:bg-zinc-100 p-1 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <Link href="/cart">
            <a className="flex gap-5">
              <div>
                <img
                  className="w-[100px] rounded"
                  src={data?.imgs[0]}
                  alt="test"
                />
              </div>
              <div className="flex  flex-col gap-1">
                <h5 className="font-semibold leading-6 text-[18px] text-zinc-800">
                  {data?.name}
                </h5>
                <span className="flex gap-2 items-center font-cera_medium text-green-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#41B14F"
                      fillOpacity="1"
                      d="M16 0c-8.836 0-16 7.164-16 16s7.164 16 16 16 16-7.164 16-16-7.164-16-16-16zM13.52 23.383l-7.362-7.363 2.828-2.828 4.533 4.535 9.617-9.617 2.828 2.828-12.444 12.445z"
                    />
                  </svg>
                  Added to Basket
                </span>
                <div className="text-white flex gap-5 mt-2 justify-between items-center">
                  <p className="text-zinc-700">QTY: {qty}</p>
                  <div className="flex gap-1">
                    <h5 className="font-bold text-lg text-zinc-800">
                      ₹{FormatingCurrency(parseInt(data?.price) * qty)}
                    </h5>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </a.div>
      ))}
    </>
  );
}
