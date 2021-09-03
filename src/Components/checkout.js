import { useDispatch, useSelector } from "react-redux";
import {fetchAllCart}  from "../Service/api";
import React, { useEffect } from "react";



const CheCkout=()=>{
    const dispatch = useDispatch();
    useEffect(() => {
        // dispatch(fetchAllCart());
    },[])
    const cart = useSelector((state => state.cart));
    console.log("chevk",cart)
    return(
        <>
            <h1> CheCkout page</h1>
            <div ClassName='container'>
                {
                    cart.map(data=>(
                        <div className='card'key={data.id}>
                            <tr></tr>
                            <h3>{data.date}</h3>
                            <h4>ProductID:{data.products[0].productId}</h4>
                            <h4>quantity:{data.products[0].quantity}</h4>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default CheCkout;