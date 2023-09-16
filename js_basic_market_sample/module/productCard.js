//productInfo(사진+설명)를 받아서 productCard를 만들어내는 모듈
import { appendChildList, makeDOMWithProperties } from "../utils/dom.js";
import { getCartToggleBtn } from "./cartToggleBtn.js";

export const getProductCard = (productInfo) =>{
    const {
        imgSrc,
        name,
        discountPercent,
        price,
        originalPrice 
        } = productInfo;

// ---- product card ----
const productCard = makeDOMWithProperties('div', {
    className : 'product-card'
})

// ---- image con ----
const productImgContainer = makeDOMWithProperties('div', {
    className : 'product-image-con'
});

const productImg = makeDOMWithProperties('img', {
    src : imgSrc,
    alt : name
});

const cartToggleBtn = getCartToggleBtn(productInfo);

appendChildList(productImgContainer, [productImg, cartToggleBtn]);

// ---- product description ----
const productDescription = makeDOMWithProperties('div', {
    className : 'product_description'
});

const productName = makeDOMWithProperties('div', {
    className : 'product-name',
    innerHTML : name
});

const productPriceCon = makeDOMWithProperties('div', {
    className : 'product-price-con'
});

const productDiscoutPercent = makeDOMWithProperties('div', {
    className : 'product-discount-percent',
    innerHTML : `${discountPercent}%`
});

const productPrice = makeDOMWithProperties('div', {
    className : 'product-price',
    innerHTML : `${price.toLocaleString()}원`
});

const productOriginalPrice = makeDOMWithProperties('div', {
    className : 'product-original-price',
    innerHeight : `${originalPrice.toLocaleString()}원`
})

appendChildList(productPriceCon, [productDiscoutPercent, productPrice]);
appendChildList(productDescription, [productName, productPriceCon, productOriginalPrice]);
appendChildList(productCard, [productImgContainer, productDescription]);

return productCard;
}