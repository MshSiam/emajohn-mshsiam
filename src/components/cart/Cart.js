import React from "react"

const Cart = (props) => {
  const { cart } = props
  console.log(cart)
  let totalQuantity = 0
  let total = 0
  for (let product of cart) {
    if (!product.quantity) {
      product.quantity = 1
    }
    total = parseInt(total + product.price * product.quantity)
    totalQuantity = totalQuantity + product.quantity
    console.log(totalQuantity)
  }
  return (
    <div>
      <h4>Items Order : {cart.length} </h4>
      <h4>Total price : {total}</h4>
      <h4>Tax : {(total * 5) / 100}</h4>
      <hr />
      <h3>Grand Total : {total + (total * 5) / 100}</h3>
    </div>
  )
}

export default Cart
