import Link from 'next/link'
import React from 'react'

export default function OrderFailed() {
    return (
      <div className="pt-[150px] bg-red-50 h-screen  px-5">
        <div className="flex items-center mx-auto bg-white justify-center max-w-3xl w-full border-l-8 rounded-md border-red-500">
          <div className=" flex flex-col gap-10 md:pt-10 py-5  md:pb-10 w-full md:px-10 px-5 items-start ">
            <img src="/imgs/cancel.png" className="w-14 h-full" alt="success" />
            <h1 className="md:text-4xl text-red-600 text-3xl font-bold text-center">
              Order cancelled!
            </h1>
            <div className="flex gap-5 flex-col">
              <p className="md:text-xl text-lg">
                <span>
                  Sorry, the order has been cancelled as the payment was not
                  successful.
                </span>
                <span>
                  In case the amount was debited from your account, do write us
                  at <b className="font-cera_bold">gogreenganeshaa@gmail.com</b>{" "}
                  with the transaction and order details. So that we can look
                  and do the needful.
                </span>
                <span>Thank you.</span>"
              </p>

              <Link legacyBehavior href="/">
                <a className="mt-5 bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-400/30 text-white text-center text-lg  p-3 rounded-md max-w-xs">
                  Continue with Gogren Ganesha
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}
