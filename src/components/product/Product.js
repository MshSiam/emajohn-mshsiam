import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons"
import "./product.css"
import Rating from "react-rating"

const cartIcon = <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>

const Product = (props) => {
  // console.log(props)
  const { name, img, price, stock, seller, star } = props.product
  return (
    <div className="product">
      <div className="img">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <h2>{name}</h2>
        <p>Seller : {seller}</p>
        <p>Price : {price}</p>
        <h4>Only {stock} available. Grab yours </h4>
        <Rating
          className="rating"
          initialRating={star}
          emptySymbol="far fa-star"
          fullSymbol=" fas fa-star"
          readonly></Rating>
        <br />
        <button
          onClick={() => {
            props.handleAddToCart(props.product)
          }}>
          {cartIcon} Add to Cart
        </button>
      </div>
    </div>
  )
}

export default Product
