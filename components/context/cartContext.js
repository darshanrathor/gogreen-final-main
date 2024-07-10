import React, {createContext, useEffect, useReducer, useState} from "react";
import {cartReducer, itemCountHandle} from "./cartReducer";

export const CartContext = createContext();

let storage,initialValue = [];

if(typeof window !== "undefined" &&  localStorage.getItem("cart") !== null &&  localStorage.getItem("cart") !== ''){
    if( Array.isArray(JSON.parse(localStorage.getItem("cart")))){
        storage = JSON.parse(localStorage.getItem("cart"));
    }
}
else{
    storage = [];
}

initialValue = {cartItem:storage,checkout:false,...itemCountHandle(storage)};


const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer,initialValue);
    // const [itemcount,setitemcount] = useState({count:0});



// useEffect(()=> {
//     setitemcount({count:state.itemCount});
// },[state])


    const addtocart =(payload) => {
        dispatch({type:"ADD_TO_CART",payload});
    }
    const removeCart =(payload) => {
        dispatch({type:"REMOVE_CART",payload});
    }
    const increase =(payload) => {
        dispatch({type:"INCREASE",payload});
    }
    const decrease =(payload) => {
        dispatch({type:"DECREASE",payload});
    }

    const contextValues = {
        addtocart,
        increase,
        decrease,
        removeCart,
        ...state,
    }
    return(
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;