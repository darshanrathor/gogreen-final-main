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

export default function ClayGanesha() {
  const [loader, setloader] = useState(true);
  const [product, setproducts] = useState([]);
  const [allproducts, setallproducts] = useState();

  useEffect(() => {
    fetchAstrologer();
  }, []);

  const fetchAstrologer = async () => {
    const { data, error } = await supabase.from("paper-ganesha").select("*");
    // .order("id", { isActive: true });
    setloader(false);
    setproducts(data);
    setallproducts(data);
    return data;
  };

  const handlefilter = (e, o) => {
    // console.log(e.length === 0 && o !== "latest")
    if (e.length === 0) {
      setproducts(allproducts);
    }
    // else if (e.length === 0 && o !== "latest") {
    //   if (o === "high") {
    //     const hight = allproducts.sort((a, b) => parseInt(b?.price) - parseInt(a?.price));
    //     setproducts(hight);
    //   }
    //   else if (o === "low") {
    //     const low = allproducts.sort((a, b) => parseInt(a?.price) - parseInt(b?.price));
    //     setproducts(low);
    //   }
    // }
    else {
      const arr = allproducts.filter((item, i) => {
        return e.indexOf(item?.inch) > -1;
      });
      // if (o === "high") {
      //   arr.sort((a, b) => parseInt(b?.price) - parseInt(a?.price));
      //   setproducts(arr);
      // }
      // else if (o === "low") {
      //   arr.sort((a, b) => parseInt(a?.price) - parseInt(b?.price));
      //   setproducts(arr);
      // }
      // else {
      setproducts(arr);
      // }
    }
  };

  return (
    <div className="pb-24">
      <div className="bg-gradient-to-b from-[#E6FCE0] to-[#fff] pt-[130px] md:pt-[150px] pb-[60px] md:pb-[80px] flex items-center justify-start w-full">
        <div className="max-w-7xl w-full mx-auto">
          <div className="flex flex-col gap-5 max-w-4xl text-center mx-auto px-5">
            <Heading size="md:text-[50px] text-[40px]">
              Eco Paper Ganeshas Idols
            </Heading>
            <Paragraph extra="max-w-2xl mx-auto">
              Paper mache Ganpati's are made from the term that they explain
              being Paper . Paper is used to making such idols. these idols are
              light in weight .{" "}
            </Paragraph>
          </div>
        </div>
      </div>

      {/* <div className="bg-green-300/70 py-2.5 text-center center px-3">
        Note : Booking are closed for 2022
      </div> */}
      <AnimatedMulti passheight={handlefilter} />
      {loader ? (
        <Loader2 />
      ) : (
        <div className="px-5 mt-10 md:mt-4 w-full max-w-7xl mx-auto md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 grid ">
          <Trail open={true}>
            {product.map((item, i) => (
              <Product
                key={i}
                category="paper-ganesha"
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
      )}
    </div>
  );
}
