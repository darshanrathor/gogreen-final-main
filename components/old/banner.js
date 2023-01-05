import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Baner() {
	return (
		<>
			<div className="w-full mt-20">
				<div className="relative">
					<Carousel
						showThumbs={false}
						autoPlay
						infiniteLoop
						showStatus={false}
						interval={3000}
					>
						<div>
							<Image layout="responsive" src="/imgs/banner1.jpg" alt="banner2" width={2030} height={700} />
						</div>

						<div>
							<Image layout="responsive" src="/imgs/cate_banner.jpg" alt="banner1" width={2030} height={700} />

						</div>

						<div>
							<Image layout="responsive" src="/imgs/caly-banner.jpg" alt="banner2" width={2030} height={700} />
						</div>
						<div>
							<Image layout="responsive" src="/imgs/redsoil_banner.jpg" alt="banner2" width={2030} height={700} />
						</div>
						<div>
							<Image layout="responsive" src="/imgs/paper-banner.jpg" alt="banner2" width={2030} height={700} />
						</div>

						<div>
							<Image layout="responsive" src="/imgs/WhatsApp.jpeg" alt="banner2" width={2030} height={700} />
						</div>
					</Carousel>
				</div>
			</div>
		</>
	);
}
