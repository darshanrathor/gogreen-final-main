import Image from "next/image";
import { useInView } from "react-cool-inview";
import { useState } from "react";
import { Trail2 } from "../react-spring/trailanimation";
export default function AboutEco() {

	const [animatein, setanimatein] = useState(false);

	const { observe } = useInView({
		// For an element to be considered "seen", we'll say it must be 100% in the viewport
		threshold: 0.8,
		onEnter: ({ unobserve }) => {
			setanimatein(true);
			// Stop observe when the target enters the viewport, so the callback only triggered once
			unobserve();
		},
	});



	const arr = ["100% ECO-FRIENDLY IDOLS", "NATURAL COLORS/CHEMICAL ARE USED", "STRONGER THAN NON/OTHER ECO-FRIENDLY IDOLS", "EASY TO CARRY", "EASILY DISSOLVABLE IN WATER", "PROMOTING GREEN CITY"];

	return (
		<div className="w-full md:py-20 py-14 text-[#184029]">
			<div className="w-full flex flex-col items-center text-center justify-center ">
				<div className="flex w-full  justify-center items-center">

					<div className='flex flex-col text-center justify-center items-center'>
						<h2 className="text-3xl w-full font-display font-playfair text-zinc-800 tracking-wider md:text-4xl ">
							Eco Friendly Ganesha
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
			</div>
			<div className="capitalize mt-8 flex flex-col max-w-3xl gap-2  items-center font-body  px-5 mx-auto text-center">
				<p className="leading-7  md:text-lg">
					The festival when celebrated in the right spirit with a responsible
					attitude translates into joy for one and all.
				</p>
				<p className="leading-7 md:text-lg">
					Save lakes , use plain Clay Ganesha , Devotion is important not
					decoration.
				</p>
			</div>
			<div className="flex max-w-6xl px-5 pt-14 md:pt-16 mx-auto w-full  flex-col items-center justify-between sm:flex-row">
				<div className="w-full sm:w-1/2 ">
					<div className=" w-full h-[300px] md:h-96 relative">
						<Image
							src="/imgs/eco.jpg"
							layout="fill"
							className="rounded"
							objectFit="cover"
							quality={100}
						/>
					</div>
				</div>
				<div ref={observe} className="w-full   h-96 flex justify-center md:w-1/2">
					{animatein && (
						<div
							className="flex h-full flex-col gap-y-4 font-body my-8 md:mx-4 "
						>
							<h2
								className="md:text-2xl text-3xl font-playfair tracking-wider"

							>
								WHAT MAKES US UNIQUE ?
							</h2>

							<div className="flex flex-col gap-5">
								<Trail2 open={animatein}>
									{arr.map((item, i) => (
										<Text key={i} name={item} />
									))}
								</Trail2>

							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

function Text({ name }) {
	return (
		<>
			<div className="flex gap-x-2 items-center">
				<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
				</svg>				<p className="md:text-lg">{name}</p>
			</div>
		</>
	);
}
