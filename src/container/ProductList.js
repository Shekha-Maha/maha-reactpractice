import React, { useEffect, useState } from 'react'

import product from "../api/product"
import useFetch from '../hooks/useFetch';

function productListFactory(options){
    const {View} = options; 

    return function ProductList(props) {
    
        const productResponse = useFetch(product.getProduct);
            
        return (
            <View products={productResponse.response?.data} loading={productResponse.loading} />
        )
    }
}



export default productListFactory
