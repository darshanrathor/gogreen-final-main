import { FormatingCurrency } from "./feture";

export function Toalvalue(){
    let data =[];
    
    if(typeof window !== "undefined"){
        const cart =  localStorage.getItem("cart");
        if(cart !== null){
            data = JSON.parse(cart);
        }
    }

            let query = data.reduce((total,product) =>  total + product.price * product.quantity,0);
            const subtotal =  "₹" + query ;
            const total =  ("₹"+ (query < 1000 ? parseInt(query) + 0 : query));
        const subtotalformat ="₹" + FormatingCurrency(query) ;
        const totalformat =  ("₹"+ FormatingCurrency((query < 1000 ? parseInt(query) +0 : query)));
         const totalvalue =  query < 1000 ? parseInt(query) + 0 : query;
        return {total, subtotal,query,subtotalformat,totalformat,totalvalue};    

    }