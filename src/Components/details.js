import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { fetchDetail } from "../Service/api";
import './details.css';
import Button  from 'react-bootstrap/Button';
import {buy} from "../Service/api"
import {cart} from "../Service/api"
// import 'bootstrap/dist/css/bootstrap.min.css';




const Detail =()=>{
    const {id} = useParams();
    console.log(id)
    const dispatch = useDispatch();
    const history =useHistory();
    useEffect(()=>{
        dispatch(fetchDetail(id));
    },[])
    const detail = useSelector((state => state.detail));
    const token = useSelector((state=> state.token))
    console.log("del",detail);
    const buyNow=(id)=>{
        // dispatch(buy(id));
        if(!token){
            history.push('/signin');
        }else{
            dispatch(cart(id))
            history.push(`/checkout`)
        }
    }
    const AddCart=(id)=>{
        if(!token){
            history.push('/signin');
        }else{
            dispatch(cart(id))
        }
    }
    return(
        <>
        <h1>Detail</h1>
        <div ClassName='container'>
                
                        <div className='card'key={detail.id}>
                            <tr></tr>
                            <h3>{detail.category}</h3>
                            
                            <img src={detail.image} alt='img'/>
    
                            <p>{detail.title}</p>
                            <p>{detail.description}</p>
                            {/* <p> rating:{detail.rating.rate}</p> */}
                            <h5>price:{detail.price}</h5>
                            <Button variant="outline-primary" onClick={()=>buyNow(detail.id)} >Buy Now</Button>{' '}
                            <Button variant="primary" onClick={()=>AddCart(detail.id)}>Add to Cart</Button>
                        </div>
            </div>
        </>
    )
}

export default Detail;