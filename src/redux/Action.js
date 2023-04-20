const productAction = (data)=>{
    return{
        type:'product',
        products: data,
    }
}

export const  Cart = (addtocart,setAddtocart)=>{
    return{
        type:'cart',
        addtocart:addtocart,
        setAddtocart:setAddtocart,
    }
}


export default productAction