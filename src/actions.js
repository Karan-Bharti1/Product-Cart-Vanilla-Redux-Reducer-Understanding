export const ADD_TO_CART="addToCart"
export const REMOVE_FROM_CART="removeFromCart"
export const CALCULATE_TOTAL="calculateTotal"
 export const addToCart=(product)=>({type:ADD_TO_CART,payload:product})
 export const removeFromCart=(id)=>({type:REMOVE_FROM_CART,payload:id})
 export const calculateTotal=()=>({type:CALCULATE_TOTAL})