import React from 'react'
import connector from "../connector/connector"
import './product.css'
function ProductCardView(props) {
    const {product} = props
    return (
        <div className="productcard">
            <img className='product__img' src={connector.joinWithBase(product.cover.medium)}/>
            <h6 className="product__name">{product.name}</h6>
            <div className="product__price">
                <h5 className="price__regular">
                    {product.price.regular} Tk.
                </h5>
            </div>
        </div>
    )
}

export default ProductCardView
