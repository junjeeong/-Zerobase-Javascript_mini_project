export const makeDOMWithProperties= (domType, propertyMap) => {

    const dom = document.createElement(domType);
    Object.keys(propertyMap).forEach((key) => {
        dom[key] = propertyMap[key];
    });

    return dom;
};

//2개 이상의 요소를 appendChild() 하고 싶을때 사용하는 함수 
export const appendChildList = (target, childrenList) => {
    if(!Array.isArray(childrenList)) return; 

    childrenList.forEach((children)=>{
        target.appendChild(children);
    })
};
