
import React, {useEffect, useState} from 'react'
import Link from "next/link";
import Realistic from "../components/utils/confetti";

export default function StoreThankYouPage(){
    const [showeffect,seteffect] = useState(false);

    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify([]));
        seteffect(true);
        // location.reload();
        setTimeout(()=> seteffect(false),2100);
    },[]);
    return(
        <div className="w-full md:py-20 py-32 flex relative bg-gradient-to-r from-green-100 to-lime-200 justify-center items-center min-h-screen">
            {showeffect &&
            <div className="h-full absolute w-full">
               <Realistic/>
            </div>
            }
            <div className="bg-white shadow-md items-center rounded-md p-6 md:p-10 flex flex-col gap-9 md:gap-10 max-w-2xl">
                <div>
                    <img src="/imgs/checked.png" alt="success" className="h-[80px]"/>
                </div>
                <div className="flex flex-col gap-5 text-center">
                    <h1 className="md:text-4xl text-green-600 text-3xl font-bold mb-3"> Your order is successful!</h1>
                    <p style={{lineHeight:1.7}} className="md:text-lg max-w-lg mx-auto">
                        Your order has been placed and one of our representative will email you shortly about your order details and delivery timelines.</p>
                
                    <Link href="/orederhistory"><a className="mt-5 font-semibold mx-auto bg-blue-500 hover:bg-blue-600  text-white text-center text-lg  py-3 px-10 rounded-md max-w-sm">View your order History</a></Link>
                </div>

            </div>

        </div>
    )
}
StoreThankYouPage.getLayout = function getLayout(page) {
    return (
            <>
                {page}
            </>
    )
}