import cartReducer from './cartReducer'
import './style.css'

import { createStore } from 'redux'
 export const Products=[{
  name:"Product A",
  price:20,
  quantity:1,
  id:1
},
  {
    name:"Product B",
    price:40,
    quantity:1,
    id:2
  },
  {
    name:"Product C",
    price:50,  
    quantity:1,
    id:3
  }
]
const store=createStore(cartReducer)
window.addToCartHandler=(id)=>{
  store.dispatch({type:"ADD_TO_CART",payload:id})
}

const productsDisplay=document.getElementById("productsDisplay")
const cartDisplay=document.getElementById("cartDisplay")
const displayProducts=Products.map(product=>`<li>${product.name}-Rs.${product.price} <button onClick="addToCartHandler(${product.id})">Add To Cart</button></li>`).join("")
productsDisplay.innerHTML=displayProducts
const updatedStatus=()=>{
  const state=store.getState()
cartDisplay.innerHTML= state.cart.map(item=>`<li>${item.name}-${item.quantity}-${item.price}<br/></li>`).join("")
}
updatedStatus()
store.subscribe(()=>updatedStatus())