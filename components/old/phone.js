import React from 'react';
import Image from "next/image";

function phone() {
  return (
    <div className=' fixed bottom-10 right-6 '>
        
        <a href="tel:+918169882692">
	<Image
											src="/imgs/phone.png"
											width={50}
											height={50}
											className="cursor-pointer  "
										></Image>

	</a>
    </div>
  )
}

export default phone