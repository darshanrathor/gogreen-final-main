import React, { useEffect, useState } from 'react'
import { Product } from '../product/productcard';
import { supabase } from '../supabase/supabase';
import { color, ProductBackground } from '../utils/feture';

export default function ClayRandom({url,name}) {
const [products,setproducts] = useState(null);

useEffect(()=> {
 fectdata(url,name);
},[setproducts]);

const fectdata =async (url,name)=> {
   
  if(url){
    const { data, error } = await supabase
    .from(name)
    .select("*")
    .neq('url', url)
    .limit(4);

    if(error){return;}
        else{setproducts(data);}
        return true;
  }
  else{
    const { data, error } = await supabase
    .from(name)
    .select("*")
    .limit(4);

    if(error){return;}
        else{setproducts(data);}
        return true;
  }
}


  return (
    <>
    {products === null ? 
    ""
    :
    <div className={` ${url ? "pt-10 pb-24 flex-col gap-14 flex md:gap-20" : ""}  w-full `}>
{url ? 
 <h2 className="md:text-4xl text-3xl font-semibold text-center">
 You May Also like
</h2>
 :""}
  
    <div className="grid lg:grid-cols-4 place-items-start w-full sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-10 max-w-7xl mx-auto">
      {products?.map((item, i) => (
        <Product
        key={i}
        category={name}
        color={ProductBackground(color, i)}
        url={item.url}
        data={item}
        name={item.name}
        img={item.imgs[0]}
        amount={item.price}
      />
      ))}
    </div>
  </div>
}
</>
  )
}
