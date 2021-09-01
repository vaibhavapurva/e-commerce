export const SET_FETCH_DATA = 'SET_FETCH_DATA';
export const SET_FETCH_DETAIL = 'SET_FETCH_DETAIL';
export const SET_LIMIT_DATA = 'SET_LIMIT_DATA';

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