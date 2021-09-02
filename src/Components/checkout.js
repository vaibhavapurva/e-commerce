import { useDispatch, useSelector } from "react-redux";
import {fetchAllCart}  from "../Service/api";
import React, { useEffect } from "react";


const CheCkout=()=>{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllCart());
    },[])
    return(
        <>
            <h1> CheCkout page</h1>
        </>
    )
}

export default CheCkout;