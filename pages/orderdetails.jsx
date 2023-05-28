import Link from 'next/link'
import React from 'react'

function orderdetails() {
  return (
    <div className="flex flex-col bg-zinc-50 min-h-screen gap-5 w-full">
      <section className=" pt-[120px] w-full  max-w-7xl mx-auto px-5">
        <h1 className=" font-bold text-green-700 mb-5  text-2xl md:text-3xl">
          View Order Details{" "}
        </h1>
        <div className="px-5 py-10 bg-white shadow">
          <h3 className="md:text-xl text-lg">
            <Link legacyBehavior href="/clay-ganesha">
              <a className="text-green-600 hover:text-green-500 border-b-[2px] border-green-500">
                Browse Products
              </a>
            </Link>{" "}
            No order has been made yet.
          </h3>
        </div>
      </section>
    </div>
  );
}

export default orderdetails