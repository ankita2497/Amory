import React, { useContext, useState,useEffect } from 'react'
import { DataContext } from "../global/DataProvider"
import cart_empty from "../assets/cart_empty.png"
import {Link} from "react-router-dom"

export default function Cart() {
    const value = useContext(DataContext);
    const [cart, setCart] = value.cart;
    const [total, SetTotal] = useState(0)
    const temptax= (total * 0.1)
    const tax = parseInt(temptax.toFixed(2));
    const mainTotal = total + tax;
    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
               return prev + (item.price * item.amount)
            }, 0)
            SetTotal(res)
        }
        getTotal();
    }, [cart])
    const reduce = (id) => {
        cart.forEach(item => {
            if (item.id === id) {
                item.amount === 1 ? item.amount = 1 : item.amount -=1
            }
        });
        setCart([...cart])
    }
     const increase = id => {
        cart.forEach(item =>{
            if(item.id === id){
                item.amount += 1 ;
            }
        })
        setCart([...cart])
    }
    const removeItem = id => {
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item.id === id){
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }
    }
    if (cart.length === 0) {
        return (
            <div className="main-content">
               <img src={cart_empty} alt="empty"/>
            </div>
        )
    }
    return (
        <>
            <div className="container">
                <div className="cart">
                    <div className="cart-items">
                        <div className="main-content">
                            <h2 className="heading">Items</h2>
                        </div>
                        {cart.map((product) => {
                            return (
                                <div className="item" key={product.id}>
                                <img src={product.pic} alt="" />
                                <div className="item-info">
                                        <h3 className="item-name">{product.name}</h3>
                                        <h2 className="item-price">${product.price}.00</h2>
                                        <h4 className="size">Size: {product.size}</h4>
                                        <div className="amount">
                                           <button onClick={()=>reduce(product.id)}>-</button>
                                           <span>{product.amount}</span>
                                           <button onClick={()=>increase(product.id)}>+</button>
                                        </div>
                                        <button className="item-remove" onClick={()=>removeItem(product.id)}>
						                  <i className="fa fa-trash"></i>
						                  <span className="remove">Remove</span>
					                   </button>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                        <div>
                           <div className="main-content">
                               <h2 className="heading">Order Summery</h2>
                           </div>
                          <div className="cart-total">
                           <p>
				              <span>Subtotal Price</span>
                                <span> ${ total}.00</span>
			               </p>
			              <p>
				             <span>Tax</span>
                                <span>${tax }.00</span>
			             </p>
			              <p>
				             <span>Total Price</span>
                                <span>${mainTotal }.00</span>
			              </p>
			               <Link to="/">Proceed to Checkout</Link>
                         </div>
                     </div>
                </div>
        </div>
         </>   
    )
}

