import {useContext} from "react";
import {CartContext} from "./cartContext";

const useCart = ()=> {
    const context = useContext(CartContext);
    return {
        ...context
    }
}

export default useCart;