import React, {useContext} from 'react'
import { useParams } from "react-router-dom"
import {DataContext} from "../global/DataProvider"


export default function Details() {
    const { id } = useParams();
    const value = useContext(DataContext);
    const [products] = value.products;
    const details  = products.filter((product) => {
        return product.id === id
    })
    console.log(details);
    return (
        <div className="main-content">
            <h2 className="heading">Product Detail</h2>
            <div className="underline-2"></div>
            details {id}
            {details.map((pro) => {
                return(
                    <h2>{pro.name}</h2>
                )
            })}
        </div>
    )
}

