import React from "react";

export  function FaqSection(props){
    
 
  return(
        <button className={`border-b-2 cursor-default border-zinc-400 w-full py-5 flex flex-col gap-5`}  >
            <h5 onClick={()=> props.onclick(props.title)} className="flex pr-2 text-left duration-100 ease-linear hover:text-[#0d733a] sm:text-xl lg:text-xl text-[15px] text-zinc-800  cursor-pointer justify-between w-full">
                {props.title}
                <span>
                    <svg  viewBox="0 0 16 16" className={`${props.active === props.title ? "transform fill-azure-500 rotate-180 transition linear duration-200" : ""} w-5 fill-zinc-800 h-5`}
                      style={{shapeRendering: "geometricprecision"}}>
                    <path fillRule="evenodd"
                          d="M11.293 6.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 9.586l3.293-3.293z"/>
                </svg>
                </span>
            </h5>
            {props.active === props.title &&
            <div className="flex flex-col gap-5">
                {
                    props.desc.map((item, i) => (
                        <p key={i}
                           dangerouslySetInnerHTML={{__html: item}}
                           className={`w-full text-zinc-600 text-left  font-body leading-7 text-[15px] md:text-lg `}>
                        </p>
                    ))
                }
                {props.list &&
                <ul className={`${props.stylelist} ml-10 items-start text-zinc-700 flex list-none flex-col gap-1`}>
                    {props.list.map((item, i) => (
                        <li key={i}>
                            {item}
                        </li>
                    ))
                    }
                </ul>
                }
                {
                    props.desc2 &&
                    <p
                       dangerouslySetInnerHTML={{__html: props.desc2}}
                       className={`w-full text-zinc-600 text-left  leading-7 text-[14px] md:text-lg `}>
                    </p>
                }
            </div>
            }
        </button>




    )
}




export const faq =[
  {
    title:"How do I book the Murti??",
    desc:["You can visit website gogreenganesha.com or message on WhatsApp or call on +91 81698 82692 and team member will assist you throughout the process ."]
  },
  {
    title:"Will I get the exact same murti? ??",
    desc:["The images show in the catalogue/website are sample pieces The murti you will get will have the same features as th one you booked but there maybe changes in the art work of the murti (Eg. Flower design on the path, pitamber) . \n"]
  },
  {
    title:"When & How will I get my Murti?\n",
    desc:["Murti can be delivered to you at your doorsteps. Your Murti will be delivered 2-6 days before Ganesh Chaturthi, We provide delivery in all the Metro Cities. Charges may vary according to Pincode \n You can also Pickup your Murti from the location near to our Office in Kandivali West that will be provided. \n"]
  },
  {
    title:"How do I see the Murti I like?\n",
    desc:["You can visit the location   in Kandivali Mumbai. Or you can ask the team to arrange for a video call & more images. \n"]
  },
  {
    title:"Do I get options in colours? ,\n Can I ask for Modification in Murti ? ",
    desc:["Small modification related to paint work can be made in Plant Ganesha , \n We have colour options in Dhoti & Shela but it is on availability basis only. \n "]
  },
  {
    title:"Where are we located📍?\n",
    desc:["Our workshops are in Pen District of Maharashtra. The murti are sourced from local artists of Pen.\n"]
  },

  {
    title:"What is the booking amount?, How do I pay ? , How will I know I will get the murti after payment?\n",
    desc:["Booking amount is 50% of the price of Murti + Delivery </br> You can pay using UPI, GPay, Net Banking, NEFT, or Cash (Office - Kandivali West) </br> After payment we will send you a receipt which will authenticate your payment.\n"]
  }


]

