import React, { useState,createContext, useEffect } from 'react'
import ItemsData from '../data/ItemsData';
export const DataContext = createContext();

export const DataProvider = (props) => {
    const [products, setProducts] = useState(ItemsData);
    const [cart, setCart] = useState([]);
    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item.id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product.id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("This product already is been cart.")
        }
    }
    useEffect(() => {
        const storeCart = JSON.parse(localStorage.getItem("storeCart"))
        if(storeCart) setCart(storeCart)
    }, [])
     useEffect(() => {
        localStorage.setItem("storeCart", JSON.stringify(cart))
    }, [cart])
  const value = {
       products: [products, setProducts],
      cart: [cart, setCart],
       addCart: addCart
    }
    return ( 
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider
