export const SET_FETCH_DATA = 'SET_FETCH_DATA';
export const SET_FETCH_DETAIL = 'SET_FETCH_DETAIL';
export const SET_LIMIT_DATA = 'SET_LIMIT_DATA';
export const SET_SIGNUP = 'SET_SIGNUP';
export const SET_SIGNIN ='SET_SIGNIN';
export const SET_TOKEN = "SET_TOKEN";

// export const  setFetchData=(payload)=>{
//     // console.log("payload", payload)
//     return{
//         type:SET_FETCH_DATA,
//         payload:payload,
//     }
// }

export const setFetchData=(payload)=>{
    console.log("action ", payload)
    return{
        type:SET_FETCH_DATA,
        payload:payload
    }
}

export const setFetchDetail=(payload)=>{
    return{
        type:SET_FETCH_DETAIL,
        payload:payload,
    }
}

export const setLimit=(payload)=>{
    console.log("ac",payload)
    return{
        type:SET_LIMIT_DATA,
        payload:payload,
    }
}

export const setSignUp=(payload)=>{
    console.log("set",payload)
    return{
        type:SET_SIGNUP,
        payload:payload
    }
}

export const setSignIn=(payload)=>{
    // console.log(payload)
    return{
        type:SET_SIGNIN,
        payload:payload
    }
}


export const loginToken=(payload)=>{
    console.log("actis",payload)
    return{
        type:SET_TOKEN,
        payload:payload
    }
}