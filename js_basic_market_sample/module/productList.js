import { makeDOMWithProperties } from "../utils/dom.js"
import { getProductCard } from "./productCard.js"

export const getProductList = (productInfoList) => {
    if(!Array.isArray(productInfoList) || !productInfoList) return;
    const productListContainer = makeDOMWithProperties('div', {
        className : 'product-list-con'
    });

    productInfoList.forEach((productInfo)=>{ 
        productListContainer.appendChild(
            getProductCard(productInfo) 
        );
    })

    return productListContainer;
}