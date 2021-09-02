import React, { useEffect } from "react";
import './components.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllData } from "../Service/api";
import { Button, Card } from 'react-bootstrap';
import { useHistory } from "react-router";
import { setLimit } from "../actions";
import {setLimitApi , setSort , setDa ,setcategory} from "../Service/api"


const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(fetchAllData());
    },[])
    const products = useSelector((state => state.product))
    const limits = useSelector((state => state.limit))
    console.log("lomitsss",limits)
    console.log("Product ", products)
    const ProductClick=(id)=>{
        history.push(`/detail/${id}`);
    }
    const onValueLimit =(e)=>{
        dispatch(setSort(e.target.value))
    }
    const onValueSort =(e)=>{
        dispatch(setDa(e.target.value))
    }
    const onValueCat =(e)=>{
        dispatch(setcategory(e.target.value))
    }

    // const limit = (e)=>{
    //     // dispatch(setLimit({[e.traget.name]:e.traget.value}))
    //     dispatch(setLimitApi(limits));
    //     history.push("/home")
    // }
    // const sort = (e)=>{
    //     // dispatch(setSort(limits));
    //     history.push("/")
    // }
    return (
        <>
            <h1> Home Page </h1>

            {/* <form onSubmit={() => sort()} > */}
            <form>
            Limit:<input name="limit" type="search" placeholder="enter you limit " onChange={(e) => onValueLimit(e)} />
                {/* <Button onClick={() => sort()} variant="primary" type="submit" >Login </Button> */}
            </form>
            <form>
                <select name="catnm" onChange={(e)=> onValueSort(e)}>
                    <option>Sort</option>
                    <option> desc</option>
                    <option> asc</option>
                </select>
            </form>
            <form>
                <select name="category" onChange={(e)=> onValueCat(e)}>
                <option>category </option>
                    <option>men's clothing </option>
                    <option> women's clothing</option>
                    <option> electronics</option>
                    <option> jewelery</option>
                </select>
            </form>
            <div ClassName='container'>
                {
                    products.map(data=>(
                        <div className='card'key={data.id}>
                            <tr></tr>
                            <h3>{data.category}</h3>
                            <div onClick={()=> ProductClick(data.id)}>
                            <img src={data.image} alt='img'/>
                            </div>
                            <p>{data.title}</p>
                            <p> rating:{data.rating.rate}{data.rating.count}</p>
                            <h5>price:{data.price}</h5>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default Home;