import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Family() {
	return (
		<div className="bg-zinc-50 px-5 md:py-20  py-14">

			<div className=" max-w-6xl flex gap-10 mx-auto w-full flex-col md:flex-row text-center items-center justify-center gap-6 ">

				<div className="text-center w-full items-center justify-start ">
					<div className='flex flex-col gap-2 text-center justify-start items-center'>
						<h2 className="md:text-4xl text-3xl font-playfair uppercase  text-zinc-800 ">Our  Happy
							<br />
							Gogreen Family
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




					<p className="max-w-[500px] md:text-lg font-sans mt-7">"We, through our activities, intend to promote Green Living. Our vision is to create awareness and responsibility towards correcting the damage to nature."</p>
				</div>

				<div className="w-full ">
					<div className=" mx-auto max-w-[400px] w-full ">
						<div className="relative flex flex-col w-full ">
							<Carousel
								autoPlay
								infiniteLoop
								showStatus={false}
								showIndicators={true}
								showThumbs={true}
								interval={2000}
							>
								<div className="h-[300px] w-full">
									<Image src="/imgs/1.jpeg" alt="family" objectFit="fill" layout="fill" />
								</div>
									<div className="h-[300px] w-full">
									<Image src="/imgs/2.jpeg" alt="family" objectFit="fill" layout="fill" />
								</div>
								<div className="h-[250px] w-full">
									<Image src="/imgs/10.png" alt="family" objectFit="fill" layout="fill" />
								</div>
								<div className="h-[300px] w-full">
									<Image src="/imgs/20.png" alt="family" objectFit="fill" layout="fill" />
								</div>
								<div className="h-[300px] w-full">
									<Image src="/imgs/4.jpeg" alt="family" objectFit="fill" layout="fill" />
								</div>
								<div className="h-[300px] w-full">
									<Image src="/imgs/5.png" alt="family" objectFit="fill" layout="fill" />
								</div>
								<div className="h-[300px] w-full">
									<Image src="/imgs/6.png" alt="family" objectFit="fill" layout="fill" />
								</div>
								<div className="h-[300px] w-full">
									<Image src="/imgs/test.jpeg" alt="family" objectFit="fill" layout="fill" />
								</div>
							</Carousel>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}