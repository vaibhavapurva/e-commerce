import React from "react";
import Button  from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';


const SignIn=()=>{
    const signIn=()=>{

    }
const onValueChange=()=>{

}
return(
    <>
    <h1> SignIn Page </h1>
    <form onSubmit={() => signIn()} >
                Email:<input name="email" type="email" placeholder="enter you email " onChange={(e) => onValueChange(e)} />
                <br></br>
                password:<input name="password" type="password" placeholder="enter password " onChange={(e) => onValueChange(e)} />
                <br>
                </br>
                <Button onClick={() => signIn()} variant="primary" type="submit" >Login </Button>
        </form>
    </>
)
}

export default SignIn;