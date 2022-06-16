import React, { useEffect, useState } from "react";
import {
  Heading,
  Paragraph,
} from "../../components/commonComponent/commonTextSize";
import AnimatedMulti from "../../components/commonComponent/reactSelect";
import { Loader2 } from "../../components/loader";
import { Product } from "../../components/product/productcard";
import Trail from "../../components/react-spring/trailanimation";
import { supabase } from "../../components/supabase/supabase";
import { color, ProductBackground } from "../../components/utils/feture";
const rudraksha = require("../../components/jsondata/rudraksha.json");

export default function ClayGanesha() {
const [loader,setloader] = useState(true);
const [product,setproducts] = useState([]);


useEffect(()=> {
  fetchAstrologer();
},[]);


const fetchAstrologer = async () => {
  const { data, error } = await supabase
    .from("plant-ganesha")
    .select("*")
  // .order("id", { isActive: true });
  setloader(false);
  setproducts(data);
  return data;
};


  return (
    <div className="pb-24">
      <div className="bg-gradient-to-b from-[#E6FCE0] to-[#fff] pt-[130px] md:pt-[150px] pb-[60px] md:pb-[80px] flex items-center justify-start w-full">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex flex-col gap-5 max-w-4xl text-center mx-auto px-5">
            <Heading size="md:text-[50px] text-[40px]">
              Eco clay-ganeshas Idols
            </Heading>
            <Paragraph extra="max-w-2xl mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{" "}
            </Paragraph>
          </div>
        </div>
      </div>
      <AnimatedMulti />
      {loader ? <Loader2/> : 
      <div className="px-5 mt-4 w-full max-w-7xl mx-auto md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 grid ">
       <Trail open={true}>
       {product.map((item,i) => (
        <Product
         key={i}
         category="plant-ganesha"
         color={ProductBackground(color, i)}
         url={item.url}
         data={item}
         name={item.name}
         img={item.imgs[0]}
         amount={item.price}
       />
       ))}
              </Trail>      
      </div>
}
    </div>
  );
}
