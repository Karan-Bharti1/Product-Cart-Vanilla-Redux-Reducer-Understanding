import { ADD_TO_CART, CALCULATE_TOTAL, REMOVE_FROM_CART } from './actions'
import cartReducer from './cartReducer'
import './style.css'

import { createStore } from 'redux'
 export const Products=[{
  name:"Product A",
  price:10,
  quantity:1,
  id:1
},
  {
    name:"Product B",
    price:20,
    quantity:1,
    id:2
  },
  {
    name:"Product C",
    price:15,  
    quantity:1,
    id:3
  }
]
const store=createStore(cartReducer)
window.addToCartHandler=(id)=>{
  const product=Products.find(product=>product.id===id)
  store.dispatch({type:ADD_TO_CART,payload:product})
  store.dispatch({ type: CALCULATE_TOTAL});
}
window.removeCartHandler=(id)=>{
  store.dispatch({type:REMOVE_FROM_CART,payload:id})
  store.dispatch({ type: CALCULATE_TOTAL});
}

const productsDisplay=document.getElementById("productsDisplay")
const cartDisplay=document.getElementById("cartDisplay")
const totalDisplay=document.getElementById("totalDisplay")
const displayProducts=Products.map(product=>`<li>${product.name}-Rs.${product.price} <button onClick="addToCartHandler(${product.id})">Add To Cart</button></li>`).join("")
productsDisplay.innerHTML=displayProducts
const updatedStatus = () => {
  const state = store.getState();

  if (state.cart.length === 0) {
    cartDisplay.innerHTML = `<h4>No items in cart</h4>`;
  } else {
    cartDisplay.innerHTML = state.cart
      .map(
        (item) =>
          `<li>${item.name} - ${item.quantity} - Rs.${item.price} 
            <button onClick="removeCartHandler(${item.id})">Delete</button>
          </li>`
      )
      .join("");
      totalDisplay.innerHTML = `<strong>Total: Rs.${state.total}</strong>`;
  }

  
};

updatedStatus()
store.subscribe(()=>updatedStatus())