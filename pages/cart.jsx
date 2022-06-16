import useCart from "../components/context/cartHooks";
import {useRouter} from "next/router";
import React, {useEffect, useRef, useState} from "react";
import {Toalvalue} from "../components/utils/countryHandle";
import { FormatingCurrency } from "../components/utils/feture";
import Image from "next/image";

export default function Cart() {
    const {cartItem} = useCart();
    const [item, setitem] = useState([]);
    // const [subtotalvalue,setsubtotal] = useState(null);


    useEffect(() => {
        // console.log(await Toalvalue());
        setitem(cartItem);
    }, [cartItem]);

    const router = useRouter();
    return (
            <div className={`bg-gray-50 pt-28 md:pt-28 w-full min-h-screen pb-24`}>
                {item.length === 0 ?
                    <div className="justify-center items-start flex">
                        <div className="flex justify-center items-center mt-[100px] w-full justify-center flex-col gap-7 px-5">
                            <h2 className="md:text-4xl text-center text-3xl text-zinc-800">
                                Your shopping bag is empty
                            </h2>
                            <p className="md:text-xl text-lg text-zinc-700 text-center max-w-md">
                                Continue shopping our eco friendly ganesha
                            </p>
                            <button onClick={() => router.push("/clay-ganesha")}
                                    className="border border-zinc-800 hover:bg-zinc-800 hover:text-white text-zinc-800 py-3 px-7 max-w-xs">
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                    :
                    <div className="w-full h-full flex gap-10 max-w-6xl mx-auto ">
                        <div className="w-full  flex gap-10 flex-col items-start">
                            <h3 className="md:text-4xl text-3xl font-semibold text-zinc-800 px-5">
                                Shopping Bag
                            </h3>
                            <div className="w-full flex gap-10 md:flex-row flex-col sm:px-3">
                                <div className=" md:w-4/6  ">
                                    <div className="bg-white flex flex-col divide-y divide-slate-200">
                                        {item.map((item, i) => (
                                            <CartItemList data={item} cartid={i} key={i}/>
                                        ))}
                                    </div>
                                </div>
                                <div className=" w-full md:w-2/6 ">
                                    <div className="bg-white flex flex-col gap-3  py-7">
                                        <div className="flex flex-col gap-2">

                                            <h3 className="text-2xl font-semibold px-5 pb-3">
                                                Summary
                                            </h3>
                                        </div>
                                        <div className="mt-5">
                                            <div className="flex text-zinc-600 justify-between pb-3 px-6">
                                                Subtotal <span className="font-semibold text-lg text-zinc-800">

                                     {Toalvalue().subtotalformat}
                                </span>
                                            </div>
                                            <div className="flex text-zinc-600 justify-between py-3 px-6">
                                                Shipping Charges
                                                <span className="font-semibold text-zinc-800 text-lg">
                                                      {parseInt(Toalvalue().subtotal.split("").slice(1,Toalvalue().subtotal.split("").length).join("")) >= 1000 ?
                                                            "Free" :
                                                            "+ ₹80"
                                                    }
                                                 </span>
                                            </div>
                                            <div
                                                className="flex pt-5 border-t justify-between text-zinc-800 px-6 font-cera_medium pb-6">
                                                Total <span className="font-semibold text-zinc-800 text-lg">
                                     {Toalvalue().totalformat}
                                        </span>
                                            </div>
                                        </div>
                                        <div className="px-5 flex justify-center">
                                            <button onClick={() => router.push("/checkout")}
                                                    className="rounded-full py-3 max-w-sm w-full hover:bg-green-800 px-7 bg-[#184029] text-white font-bold">
                                                Go to Checkout
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
    )
}


function CartItemList({data, cartid}) {
    // const [optonal,setoptional]  = useState(false);
    const {increase, decrease, removeCart} = useCart();
    const [qty, setqty] = useState({qty: data.quantity});

    const handleincrase = () => {
        increase(data);
        setqty(prev => ({qty: prev.qty + 1}))
    }
    const handledecrease = () => {
        decrease(data);
        setqty(prev => ({qty: prev.qty - 1}))
    }
    return (
        <>
            <div className={`p-5 flex gap-4`}>
                <div className="relative md:w-[160px] w-[150px] ">
                    <Image src={data.imgs[0]} alt={data.name} layout="responsive" objectFit="cover" width={80} style={{borderRadius:'5px'}} height={80}  className="rounded-md"/>
                </div>
                <div className="flex relative flex-col justify-around  w-full pr-7 pb-2">
                    <button onClick={() => removeCart(cartid)}
                            className="absolute text-zinc-400 hover:bg-gray-50 rounded-full p-2 -top-2  sm:top-3 -right-2 sm:right-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"/>
                        </svg>
                    </button>
                    <div className="flex flex-col gap-3">
                        <div className="flex rounded-[10px] max-w-[100px] px-2 w-full   border border-zinc-300">
                            <button onClick={handledecrease}
                                    className={`${data.quantity === 1 ? "text-zinc-300 cursor-not-allowed" : ""} py-1 `}
                                    disabled={data.quantity === 1}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M18 12H6"/>
                                </svg>
                            </button>
                            <span className="py-1 sm:py-2 px-1 w-full text-center">
                                {data.quantity}
                                {/*{qty.qty}*/}
                                </span>
                            <button onClick={handleincrase} className="py-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 4v16m8-8H4"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <h5 className="text-lg text-left font-semibold sm:mt-0 mt-2 sm:text-right">
                    
                            
                    ₹{FormatingCurrency(data?.price)}  
                    </h5>
                </div>
            </div>
        </>
    )
}

export function CalculatePercentage({val}) {
    // let value = val;
    const total = val;
    const [percentage,setpercentage] = useState(0);
    // parseInt(value.slice(1,value.length).join(""))
    // const percentage = (((total) / 1000) * 100 > 100 ? 0.01 : 100 - ((total) / 1000) * 100);
    // const remainingpprice = 1000 - total;
    const [mouted,setmouted] = useState(false);

    useEffect(()=> {
        setpercentage((((total) / 1000) * 100 > 100 ? 0.01 : 100 - ((total) / 1000) * 100));
        setmouted(true);
        return()=> setmouted(false);
    },[total,mouted]);

    return (
        <>
            {mouted ?
                <div className="w-full px-5 flex flex-col gap-3 pb-3">
                    <div className="h-[5px]  bg-gray-100 opacity-90 w-full overflow-x-hidden">
                        <div className={`${1000 -total <= 0 ? "bg-green-500" : "bg-yellow-300"}`} style={{
                            transform: `translate3d(-${percentage}%, 0px, 0px)`,
                            height: "5px",
                            transition: ".3s background-color ease-in-out,.3s transform cubic-bezier(0, 0, .25, 1)"
                        }}>

                        </div>
                    </div>
                </div>
                :
                ""
            }
</>

    )
}

const Model =(props) => {
    const [optionaldata,setoptionaldata] = useState({name:"",gotra:""});
    const handleOptional =(e) => {
        const {name,value} = e.target;
        setoptionaldata(prev => ({...prev,[name]:value}));
    }
    const ref = useRef();
    return(
        <div ref={ref} className="flex bg-white p-5 rounded-md z-10 fixed top-1/2 left-1/2 -translate-x-1/2 max-w-xs w-full -translate-x-1/2 flex-col gap-6 shadow-md">
            <h3 className="flex justify-between text-xl text-zinc-800">
                Add your Personalisation
                <button onClick={()=> props.passclose(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                </button>
                </h3>
            <div className="flex flex-col gap-5 pb-5 w-full">
              <label htmlFor="name" className="flex gap-2 items-center">
               Name: <input id="name" value={optionaldata.name} onChange={handleOptional} type="text" name="name" placeholder="Enter your full name"
                       className=" py-3 w-full focus:border-black outline-none border-b border-zinc-400"/>
              </label>
                <label htmlFor="gotra" className="flex gap-2 items-center">
                Gotra: <input id="gotra" value={optionaldata.gotra} onChange={handleOptional} type="text" name="gotra" placeholder="Enter your Gotra"
                       className=" py-3 w-full focus:border-black outline-none border-b border-zinc-400"/>
                </label>
            </div>
            <button onClick={()=> props.handledata(optionaldata)} className="bg-gray-200 p-3 rounded-full font-cera_bold hover:bg-gray-300">
                Submit
            </button>

        </div>
    )
}


