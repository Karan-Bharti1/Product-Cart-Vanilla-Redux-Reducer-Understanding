import { Products } from "./main"

const initialState={cart:[]}
const cartReducer=(state=initialState,action)=>{
switch (action.type) {
    case "ADD_TO_CART":
           const item=state.cart.find(product=>product.id===action.payload)
           if (item){
            return {...state,cart: state.cart.map(product=>product.id===action.payload
                ?{...product,quantity:product.quantity+1}
                :product)}
           }else 
           {
            const cartItem=Products.find(product=>product.id===action.payload)
            return {...state,cart:[...state.cart,cartItem]}}
        
    default:
        return state
}
}
export default cartReducer;