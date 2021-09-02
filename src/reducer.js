import { SET_FETCH_DATA, SET_FETCH_DETAIL, SET_LIMIT_DATA  , SET_SIGNUP,SET_SIGNIN, SET_TOKEN} from "./actions";
const initialState={
    product:[],
    detail:[],
    limit:"",
    signUp:[],
    signIn:[],
    token:localStorage.getItem("token"),
}


function Reducer(state=initialState , action){
    switch(action.type){
        case SET_FETCH_DATA:
            console.log("reduc",action.payload)
            return{
                ...state,
                product:action.payload
            }
        case SET_FETCH_DETAIL:
            console.log("red",action.payload)
            return{
                ...state,
                detail:action.payload
            }
        // case SET_LIMIT_DATA:
        //     console.log("reddd", action.payload)
        //     return{
        //         ...state,
        //         limit:action.payload
        //     }

        case SET_LIMIT_DATA:
            console.log("reddd",action.payload)
            return{
                ...state,
                limit:action.payload
            }
        case  SET_SIGNUP:
            console.log("redff",action.payload)
            return{
                ...state,
                signUp:action.payload
            }
        case SET_SIGNIN:
            return{
                ...state,
                signIn:action.payload
            }
        case SET_TOKEN:
            console.log("redddd",action.payload.token)
            return{
                ...state,
                token:action.payload.token
            }
        default:
            return state

    }
}

export default Reducer;