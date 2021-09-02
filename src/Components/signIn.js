// import React, {useState}from "react";
// import Button  from 'react-bootstrap/Button';
// import { useDispatch, useSelector } from "react-redux";
// import { setSignIn } from "../actions";
// import { signInApi } from "../Service/api";
// // import 'bootstrap/dist/css/bootstrap.min.css';


// const SignIn=()=>{
// const dispatch = useDispatch();
// const [login , setLogin]=useState({username:"",password:""})

// const imputHandle=(e)=>{
//     let{name, value}=e.target;
//     setLogin({...login,[name]:value})
// }
// const submitData=(e)=>{
//     e.preventDefault()
//     dispatch(signInApi(login));
// }


// return(
//     <>
//     <h1> SignIn Page </h1>
//     <form onSubmit={submitData} >
//                 userNAme:<input name="username" type="text" placeholder="Enter your Username  "onChange={imputHandle}/>
//                 <br></br>
//                 password:<input name="password" type="password" placeholder="enter password " onChange={imputHandle} />
//                 <br>
//                 </br>
//                 <Button  variant="primary" type="submit" >Login </Button>
//         </form>
//     </>
// )
// }

// export default SignIn;



import React, {useImperativeHandle, useState}from "react";
import Button  from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { setSignIn } from "../actions";
import { signInApi } from "../Service/api";
// import 'bootstrap/dist/css/bootstrap.min.css';


const SignIn=()=>{
const dispatch = useDispatch();
const history =useHistory();
// const [login , setLogin]=useState({username:"",password:""})
const data = useSelector((state=>state.signIn));

// const password = useSelector((state=>state.password))
// console.log(data , password)
// const data = JSON.stringify(da);
// console.log(data)
const signIn=()=>{
    dispatch(signInApi(data))
    history.push('/')
    }
const onValueChange=(e)=>{
    dispatch(setSignIn({ ...data,[e.target.name]:e.target.value}))
}
return(
    <>
    <h1> SignIn Page </h1>
    <form onSubmit={() => signIn()} >
                userNAme:<input name="username" type="text" placeholder="Enter your Username  " onChange={(e) => onValueChange(e)} />
                <br></br>
                password:<input name="password" type="password" placeholder="enter password " onChange={(e) => onValueChange(e)} />
                <br>
                </br>
                <Button onClick={() => signIn()} variant="primary" type="submit" >Login </Button>
        </form>
    </>
)
}
// mor_2314
// 83r5^_
export default SignIn;