//여기서 멈춤
import { makeDOMWithProperties } from "../utils/dom.js";
import { CART_COOKIE_KEY } from "../constants/cart.js";

const addCartInfo =(productInfo)=>{
    const originalCartInfo = JSON.parse(localStorage.getItem(CART_COOKIE_KEY)) || [];
    
    if(originalCartInfo.findIndex((cartInfo) => cartInfo.id === productInfo.id ) !== -1) return;

    localStorage.setItem(CART_COOKIE_KEY, JSON.stringify([
        ...originalCartInfo,
        productInfo, 
    ]));
};


export const getCartToggleBtn = (productInfo) => {
    const cartToggleBtn = makeDOMWithProperties('button', {
        className : 'cart-toggle-btn',
        type : 'button',
        onclick : ()=>{
            addCartInfo(productInfo);
        }
    })};
