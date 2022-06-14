import React, { useEffect, useState } from "react"
import {
  addToDb,
  getStoredCart
} from "../../2021-ema-john-simple-resources-master/utilities/fakedb"
import Cart from "../cart/Cart"
import Product from "../product/Product"
import "./shop.css"

const Shop = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [displayProducts, setDisplayProducts] = useState()
  useEffect(function () {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  useEffect(
    function () {
      if (products.length) {
        const savedCart = getStoredCart()
        const storedCart = []
        for (let key in savedCart) {
          if (products.length) {
            console.log(key, savedCart[key])
            const addedProduct = products.find((product) => product.key === key)
            if (addedProduct) {
              const quantity = savedCart[key]
              addedProduct.quantity = quantity

              storedCart.push(addedProduct)
            }
          }
        }
      }
    },
    [products]
  )
  //  cart
  //---- cart button event handler------ //
  const handleAddToCart = (product) => {
    // console.log(product)
    const newCart = [...cart, product]
    setCart(newCart)
    console.log(product)
    // save to Local Storage
    addToDb(product.key)
  }

  const handleSearch = (event) => {
    const searchedText = event.target.value
    const matchedProducts = products.filter((product) =>
      product.name.tolwerCase().includes(searchedText.tolwerCase())
    )
    console.log(matchedProducts.length)
  }
  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="type here"
          onChange={handleSearch}
          name=""
          id=""
        />
      </div>
      <div className="shop-container">
        <div className="product-container">
          <h3>Products : {products.length}</h3>
          {products.map((product) => (
            <Product
              product={product}
              handleAddToCart={handleAddToCart}
              key={product.key}></Product>
          ))}
        </div>
        <div className="cart-container">
          <h3>Order Summery</h3>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  )
}

export default Shop
