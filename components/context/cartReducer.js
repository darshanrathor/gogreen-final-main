
const storage = cartItem => {localStorage.setItem("cart",JSON.stringify(cartItem.length > 0 ? cartItem: []));}
export const sumItem = (cartItems) => {
storage(cartItems);
}


export const itemCountHandle =(cartItems) => {
    const itemCount = cartItems.reduce((total,product) =>  total + product.quantity,0 );
return {itemCount};
}

export const cartReducer = (state,action) => {
    switch(action.type){
        case "ADD_TO_CART":
            state.cartItem.push({
                ...action.payload,
                quantity: 1
            });
        
            return{
                ...state,
                cartItem: [...state.cartItem],
                ...sumItem(state.cartItem),
                ...itemCountHandle(state.cartItem)

            };
        case "REMOVE_CART":
            state.cartItem.splice(action.payload,1);
            return{
                ...state,
                cartItem: [...state.cartItem],
                ...sumItem(state.cartItem),
                ...itemCountHandle(state.cartItem)
            };
        case "INCREASE":
            state.cartItem[state.cartItem.findIndex(item => item?.product_id === action.payload?.product_id)].quantity++;
            return{
                ...state,
                cartItem: [...state.cartItem],
                ...sumItem(state.cartItem),
                ...itemCountHandle(state.cartItem)

            };
        case "DECREASE":
            state.cartItem[state.cartItem.findIndex(item => item?.product_id === action.payload?.product_id)].quantity--;
            return{
                ...state,
                cartItem: [...state.cartItem],
                ...sumItem(state.cartItem),
                ...itemCountHandle(state.cartItem)

            }
    }
}
