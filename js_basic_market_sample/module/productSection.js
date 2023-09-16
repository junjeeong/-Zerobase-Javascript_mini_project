import { getProductList } from "./productList.js"
import { appendChildList, makeDOMWithProperties } from "../utils/dom.js"
    

export const getProductSection = (sectionName, productInfo) =>{
    const productListSection = makeDOMWithProperties('div',{
        className : 'product-list-section'
    })

    const sectionTitle = makeDOMWithProperties('div',{
        className : 'section-title'
    });

    const titleHighLight = makeDOMWithProperties('span', {
        className : 'section-title-highlight'
    });

    const title = makeDOMWithProperties('span', {
        innerHTML : sectionName
    })

    const productListContainer = getProductList(productInfo);

    appendChildList(sectionTitle, [titleHighLight, title]);
    appendChildList(productListSection, [sectionTitle, productListContainer]);

    return productListSection;
}
    