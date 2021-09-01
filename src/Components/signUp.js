import React from "react";
import { Button } from "react-bootstrap";

const SignUp = () => {
const signUp=()=>{

}
const onValueChange =()=>{

} 
    return (
        <>
            <h1> SignUp Page </h1>
            <form onSubmit={() => signUp()} >
                name:<input name="name" type="text" placeholder="enter you name" onChange={(e) => onValueChange(e)} />
                <br></br>
                Email:<input name="email" type="email" placeholder="enter you email " onChange={(e) => onValueChange(e)} /><br></br>
                Password:<input name="password" type="password" placeholder="enter password " onChange={(e) => onValueChange(e)} />
                <br></br>
                <Button onClick={() => signUp()} variant="primary" type="submit" >SignUp</Button>
            </form>
        </>
    )
}

export default SignUp;