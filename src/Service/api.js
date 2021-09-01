import axios from 'axios';
import { setFetchData } from '../actions';
import { setFetchDetail } from '../actions';
const url ="https://fakestoreapi.com";



export const fetchAllData=()=>async(dispatch , getState)=>{
    try{
        console.log("try")
        const response = await axios.get(`${url}/products`);
        console.log(response.data);
        dispatch(setFetchData(response.data))
    }
    catch(err){
        console.log("err");
    }

}

export const fetchDetail=(id)=>async(dispatch, getState)=>{
    console.log(id)
    try{
        console.log("try details")
        const response = await axios.get(`${url}/products/${id}`)
        console.log(response.data);
        dispatch(setFetchDetail(response.data));
    }catch(err){
        console.log("err");
    }
}

export const buy=(id)=>async(dispatch , getState)=>{
    try{
        console.log(id)
        const response =await axios.get(`${url}/products/${id}`)
        console.log("api",response.data);
    }catch(err){

    }
}


export const cart=(id)=>async(dispatch , getState)=>{
    try{
        console.log(id)
        const response =await axios.get(`${url}/products/${id}`)
        console.log("api cart",response.data);
    }catch(err){

    }
}


export const setLimitApi=(limit)=>async(dispatch , getState)=>{
    try{
        // console.log("aaaaa",limit)
        debugger
        const response =  await axios.get(`${url}/products?limit=5`);
        console.log("limit api ", response.data)
        debugger
        dispatch(setFetchData(response.data))
        return response
        
    }catch(err){
        console.log("err");
    }
}

export const setSort =(limit)=>async(dispatch , getState)=>{
    try{
        console.log("aaaaa",limit)
        const response =  await axios.get(`${url}/products?limit=${limit}`);
        console.log("limit api ", response.data)
        dispatch(setFetchData(response.data))
        return response
        
    }catch(err){
        console.log("err");
    }
}