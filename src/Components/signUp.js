import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSignUp } from "../actions";
import { signUpApi } from "../Service/api";
const SignUp = () => {
const dispatch = useDispatch();
const data = useSelector((state)=>state.signUp)
console.log(data)
const signUp=()=>{
    dispatch(signUpApi(data))
}
const onValueChange =(e)=>{
    dispatch(setSignUp({...data , [e.target.name]:e.target.value}))
} 
    return (
        <>
            <h1> SignUp Page </h1>
            <form onSubmit={() => signUp()} >
                UserName:<input name="username" type="text" placeholder="Enter your Name" onChange={(e) => onValueChange(e)} />
                <br></br>
                Email:<input name="email" type="email" placeholder="Enter your Email " onChange={(e) => onValueChange(e)} /><br></br>
                Password:<input name="password" type="password" placeholder="Enter Password " onChange={(e) => onValueChange(e)} /><br></br>
                address:<input name="city" type="text" placeholder="Enter your City " onChange={(e) => onValueChange(e)} /><br></br>
                Phone:<input name="phone" type="text" placeholder="Enter  your Number " onChange={(e) => onValueChange(e)} /><br></br>
                <Button onClick={() => signUp()} variant="primary" type="submit" >SignUp</Button>
            </form>
        </>
    )
}

export default SignUp;