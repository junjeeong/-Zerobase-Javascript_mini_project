export const makeDomWithProperties = (domType, propertyMap) => { // TS의 필요성
  const dom = document.createElement(domType);
  Object.keys(propertyMap).map((key) => {
    dom[key] = propertyMap[key];
  });
  return dom;
}

export const appendChildList = (target, childrenList) => {
  if (!Array.isArray(childrenList)) return;

  childrenList.forEach((children) => {
    target.appendChild(children); 
  })
};
