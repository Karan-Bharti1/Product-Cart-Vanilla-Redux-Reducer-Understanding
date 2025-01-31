import { ADD_TO_CART, CALCULATE_TOTAL, REMOVE_FROM_CART } from "./actions"
import { Products } from "./main"

const initialState={cart:[],total:0}
const cartReducer=(state=initialState,action)=>{
switch (action.type) {
    case ADD_TO_CART:
           const item=state.cart.find(product=>product.id===action.payload.id)
           if (item){
            return {...state,cart: state.cart.map(product=>product.id===action.payload.id
                ?{...product,quantity:product.quantity+1}
                :product)}
           }else 
           {
            return {...state,cart:[...state.cart,action.payload]}}
        case REMOVE_FROM_CART:
        return {...state,cart:state.cart.filter(item=>item.id!==action.payload)}
        case CALCULATE_TOTAL:
            return {...state,total:state.cart.reduce((acc,curr)=>acc+curr.quantity*curr.price,0)}
    default:
        return state
}
}
export default cartReducer;