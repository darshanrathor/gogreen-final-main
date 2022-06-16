import React, { useState } from "react";

const height = [
  { value: "10", label: "10 Inches" },
  { value: "12", label: "12 Inches" },
  { value: "15", label: "15 Inches" },
  { value: "8", label: "8 Inches" },
  { value: "9", label: "9 Inches" },
];

const sort = [
  { value: "10", label: "Price (high to low)" },
  { value: "12", label: "Price (high to low)" },
  { value: "15", label: "Newest" },
  { value: "8", label: "8 Inches" },
  { value: "9", label: "9 Inches" },
];

export default function AnimatedMulti() {
  const [showfilter, setfilter] = useState(false);
  const [filterval, setfiltervalue] = useState([]);
  const [otherfilter, setotherfilter] = useState("latest");

  const handlechange = (e) => {
    const { value } = e.target;
    const index = filterval.indexOf(value);
    if (index === -1) {
      setfiltervalue((prev) => [...prev, value]);
    } else {
      const samevalue = filterval.filter((item) => item !== value);
      setfiltervalue(samevalue);
    }
  };

const handleselect =(e)=> {
const {value} = e.target;
setotherfilter(value);
}

  
  return (
    <div className=" border-slate-200 border-t">
    <div className="max-w-7xl bg-white flex-row gap-8 flex pt-5 pb-3  justify-between w-full  mx-auto px-5">
      <div className="flex gap-3 sm:flex-row flex-col w-full sm:items-center">
        <label className="font-semibold whitespace-nowrap text-lg">Height (IN)</label>
        <div className="relative bg-red-100  sm:w-[170px] ">
          <div className="border bg-white text-lg absolute z-10 hover:shadow-lg top-[-5px] sm:top-[-20px] left-0  w-full border-zinc-400 px-2.5 pt-[6px] pb-[10px] rounded-[7px]">
            <button
              onClick={() => setfilter((prev) => !prev)}
              className="flex sm:text-base text-[15px]  justify-between w-full gap-5 items-center text-zinc-800 "
            >
              All heights
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 ${showfilter ? "rotate-180" : ""}`}
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
            {showfilter && (
              <div className={`flex mt-2 flex-col gap-1.5`}>
                {height.map((item, i) => (
                  <label
                    key={i}
                    className="flex gap-2 items-center"
                    htmlFor={item.label}
                  >
                    <input
                      onChange={handlechange}
                      value={item.value}
                      type="checkbox"
                      id={item.label}
                    />
                    {item.label}
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex gap-1.5 sm:gap-3 w-full sm:flex-row flex-col  sm:items-center  items-end md:justify-end">
        <label className="font-semibold text-lg whitespace-nowrap text-zinc-700 ">
          Sort by
        </label>
<select className="border px-2 py-2.5 text-zinc-800 rounded-md border-zinc-400 outline-none max-w-[180px] w-full" onChange={handleselect}>
  <option value="latest">Latest</option>
  <option value="hight">Price Hight to Low</option>
  <option value="low">Price Low to High</option>
</select>
      </div>
    </div>
    </div>
  );
}
