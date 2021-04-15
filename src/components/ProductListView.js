import React from 'react'
import ProductCardView from './ProductCardView';
import loaderGif from "../images/loading-min.gif"
import './product.css'
function ProductListView(props) {
    const { products, loading } = props;

    return (
        <div >
            {loading && <img src={loaderGif} />
            }
            {products && products.length > 0 &&
                <>
                    <h5 className="">
                        Total {products.length} Products Found
                    </h5>
                    <div className="product__list">
                        {products.map(product => <ProductCardView product={product} key={product._id} />)}
                    </div>
                </>
            }
        </div>
    )
}

export default ProductListView
