import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { GlassMagnifier, Magnifier } from "react-image-magnifiers";

export default function DemoCarousel({ data }) {
  return (
    <Carousel
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      showThumbs={true}
    >
      {data.map((item, i) => (
        <div key={i} className="w-full">
          <img className="w-full" src={item} />
          {/* <GlassMagnifier imageSrc={item} largeImageSrc={item} /> */}
        </div>
      ))}
    </Carousel>
  );
}
