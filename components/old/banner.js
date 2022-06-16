import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Baner() {
	return (
		<>
			<div className="w-full mt-20">
				<div className="relative">
					<Carousel
						autoPlay
						infiniteLoop
						showStatus={false}
						showIndicators={false}
						showThumbs={false}
						interval={3000}
					>



<div>
							<Image src="/imgs/banner01.jpg" alt="banner2" width={2030} height={800}/>
						</div>


						<div>
							<Image src="/imgs/website banner.jpg 2-01-min.jpg" alt="banner1" width={2030} height={800} />
							
						</div>
						



						<div>
							<Image src="/imgs/caly-banner.jpg" alt="banner2" width={2030} height={800}/>
						</div>


						<div>
							<Image src="/imgs/redsoil-banner.jpg" alt="banner2" width={2030} height={800}/>
						</div>
						<div>
							<Image src="/imgs/paper-banner.jpg" alt="banner2" width={2030} height={800}/>
						</div>

						<div>
							<Image src="/imgs/WhatsApp Image 2022-06-16 at 8.52.04 AM.jpeg" alt="banner2" width={2030} height={800}/>
						</div>



					</Carousel>
				</div>
			</div>
		</>
	);
}
