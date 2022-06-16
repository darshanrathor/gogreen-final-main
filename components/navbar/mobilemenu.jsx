import Image from "next/image"
import Link from "next/link"

export default function Mobilemenu ({transition,passclose}){
    return(
        <div className={`fixed flex justify-between flex-col bg-[#184029]  z-30 top-0 left-0 w-full h-full transition-all duration-200 ease-linear ${transition}`}>    
<div className=" pt-5 flex flex-col gap-5">
    <div className="flex px-5 justify-between items-center ">
    <div className="w-[150px]">
<Image width={100} height={60} layout="responsive" src="/imgs/white.png" />
        </div>
        <button onClick={passclose} className="text-white  hover:bg-[#E6FCE0] hover:text-zinc-800 p-1.5 rounded-full ">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
</svg>
        </button>
    </div>
    <div className="flex divide-y px-5 divide-green-900 flex-col">
<Navlink text="Clay ganesha" link="/clay-ganesha"/>
<Navlink text="Paper ganesha" link="/paper-ganesha"/>
<Navlink text="Plant ganesha" link="/plan-ganesha"/>
<Navlink text="Cart" link="/cart"/>
<Navlink text="Contact us" link="/contact"/>
<Navlink text="Login / signup" link="/login"/>
</div>
</div>

<div className="bg-[#A2F578] h-[30px] flex">

</div>
</div>
    )
}


const Navlink = ({text,link})=> {
    return(
      <Link href={link}>
  <a className="capitalize  hover:text-[#E6FCE0] py-3.5 text-zinc-200 font-semibold text-2xl duration-100 ease-in">
  {text}
  </a>
      </Link>
    )
  } 