import Link from "next/link";
import Image from "next/image";

export default function Category() {
	return (
		<>
			<div className=" w-full px-5 flex flex-col gap-14  md:py-20 py-14" >
				<div className="w-full flex flex-col  items-center text-center justify-center ">
				
					<div className='flex flex-col text-center justify-center items-center'>
					<h2 className="md:text-4xl text-3xl gap-x-3  text-center w-full font-semibold  ">
							2022 Booking Started
						</h2>
        <div className='flex flex-row-1 text-center justify-center items-center mt-3'>
        <div className="w-[100px] h-px  bg-[#7abf18] center  mr-[20px]" />
        <Image src="/imgs/herbal-spa-treatment-leaves.png" 
				width={15} height={15}  
                className="   colors-[#e2e8f0]  "
                />
                        
        <div className="w-[100px] h-px  bg-[#7abf18] ml-[20px] " />
        </div>
               
                </div>
				
				</div>
				<div className="w-full max-w-[1200px] gap-12 mx-auto flex flex-col  sm:flex-row  gap-y-10 ">
						
					<CategoryItem
						data={{
							image: "/imgs/15.png",
							name: "Clay Ganesha",
							desc: "Made of river clay Shadu Mitti (Mati) & non toxic colors",
							url: "clay-ganesha",
						}}
					/>
					<CategoryItem
						data={{
							image: "/imgs/Papper.jpg",
							name: "Paper Ganesha",
							desc: "Lightweight idols made of paper mache & non toxic colors",
							url: "papper-ganesha",
						}}
					/>
					<CategoryItem
						data={{
							image: "/imgs/WhatsApp Image 2022-06-10 at 7.28.00 AM.jpeg",
							name: "Plant Ganesha",
							desc: "Idols made of red soil used for planting after visarjan",
							url: "plant-ganesha",
						}}
					/>
				</div>
			</div>
		</>
	)
}



function CategoryItem({ data }) {
	return (
		<>
			<div className="flex flex-col gap-5 text-zinc-800  bg-[#E6FCE0] px-8  py-10 w-full rounded-md mx-auto">
				<Link href={`/${data.url}`}>
					<a className="w-full flex  select-none justify-center h-[350px]">
						<img src={data.image} className="w-full md:w-[250px] rounded-md"></img>
					</a>
				</Link>

				<div className=" font-heading w-full flex text-[#184029] flex-col gap-2 justify-between items-center">
					<h2 className="md:text-3xl text-2xl  font-semibold tracking-wide">
						{data.name}
					</h2>
					<p className="md:text-lg text-center font-body text-black">{data.desc}</p>
					<Link href={`/${data.url}`}>
						<button className="text-white  text-lg font-semibold w-full max-w-[200px]  py-2 rounded-full px-5 mt-2 hover:bg-[#A2F578] hover:text-zinc-800 duration-200 ease-in bg-[#184029]">
							View All
						</button>
					</Link>
				</div>
			</div>
		</>
	);
}
