import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from "../global/DataProvider";
function Product() {
    const value = useContext(DataContext);
    const [products] = value.products;
    const addCart = value.addCart
    return (
        <div className="main-content">
            <h2 className="heading"> Shop your favourite cushion</h2>
            <div className="underline-2"></div>
            <div className="product">
                {products.map((item) => {
                    return (
                        <div key={item.id} className="product-content">
                            <Link to={`/shop/${item.id}`}>
                                <img src={item.pic} alt="Item" />
                            </Link>
                            <div className="product-info">
                                <h3 className="heading-2">{item.name}</h3>
                                <span> ${item.price}.00</span>
                            </div>
                            <h4 className="size heading-2">Size: {item.size }</h4>
                            <button onClick={() => addCart(item.id)}>Add to Cart</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Product;