const initialdata = {
  name: "singam",
  product: [],
};
const reducer = (storedata = initialdata, action) => {
  if (action.type === "product") {
    return {
      ...storedata,
      product: action.products,
    };
  } else if (action.type === "cart") {
    return {
      ...storedata,
      addtocart: action.addtocart,
      setAddtocart: action.setAddtocart,
    };
  }
  return storedata;
};

export default reducer;
