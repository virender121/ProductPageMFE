export const updateCart = (cart, product) => {
    console.log({ state: cart, product })
    const isAlreadyAdded = cart?.cartItems?.findIndex(current => current.id === product.id) || -1
    const cartItems = [...cart.cartItems];
    const pricingDetails = structuredClone( cart.pricingDetails)
    if(isAlreadyAdded == -1) {
        cartItems.push({ ...product, quantity: 1});
    } else {
        cartItems [isAlreadyAdded] = { ...cartItems[isAlreadyAdded], quantity: cartItems[isAlreadyAdded].quantity+1}
    }
   pricingDetails.subtotal += product.price;
   if(pricingDetails.subtotal >= 30) {
    pricingDetails.deliveryCharges = 0;
   }else{
    pricingDetails.deliveryCharges = 10;
   }
   pricingDetails.total = pricingDetails.subtotal + pricingDetails.deliveryCharges;
   console.log({
    cartItems, pricingDetails
   })
    return {
        cartItems,
        pricingDetails
    }

}