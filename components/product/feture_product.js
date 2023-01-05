export const isInCart = (product,cartItem) => {
    return !!cartItem.find(item => item?.product_id === product?.product_id);
}