import axios from 'axios';
import { setFetchData } from '../actions';
import { setFetchDetail , loginToken , setCart} from '../actions';
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
        const response =await axios.get(`${url}/carts`)
        console.log("api",response.data);
        dispatch(setCart(response.data))
    }catch(err){

    }
}


export const cart=(id)=>async(dispatch , getState)=>{
    try{
        console.log(id)
        const response =await axios.post(`${url}/carts`);
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

export const setDa =(limit)=>async(dispatch , getState)=>{
    try{
        console.log("aaaaa",limit)
        const response =  await axios.get(`${url}/products?sort=${limit}`);
        console.log("limit api ", response.data)
        dispatch(setFetchData(response.data))
        return response
        
    }catch(err){
        console.log("err");
    }
}


export const setcategory =(limit)=>async(dispatch , getState)=>{
    try{
        console.log("aaaaa",limit)
        const response =  await axios.get(`${url}/products/category/${limit}`);
        console.log("limit api ", response.data)
        dispatch(setFetchData(response.data))
        return response
        
    }catch(err){
        console.log("err");
    }
}


export const signUpApi=(data)=>async(dispatch ,getState)=>{
    try{
         const response = await axios.post(`${url}/users/`,data);
        console.log(response.data)
    }catch(err){
        console.log("err")
    }
}


export const signInApi=(data)=>async(dispatch , getState)=>{
    // console.log("login api",data)
    try{
        console.log("login api",data)
        // const response =await axios.post(`${url}/auth/login`,data);
        const response = await axios.post(`${url}/auth/login`,data)
        console.log(response.data);
        window.localStorage.setItem('token' , response.data.token);
        // dispatch(loginToken(response.data))
    }catch(err){
        console.log("ye err kya aa rhi ha")
        console.log(err)
    }
}

export const fetchAllCart=()=>async(dispatch, getState)=>{
    try{
        console.log("cart api")
        const response = await axios.post(`${url}/carts`)
        console.log(response);
        dispatch(setCart(response.data))
    }catch(err){
        console.log(err)
    }
}

// export const signInApi=(state)=>{
//     return async(dispatch)=>{
//         try {
//             const loginData=await request.post("/auth/login",state)  
//             dispatch(login(loginData.data))
            
//         } catch (error) {
            
//         }
//     }
// }