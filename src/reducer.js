import { SET_FETCH_DATA, SET_FETCH_DETAIL, SET_LIMIT_DATA } from "./actions";
const initialState={
    product:[],
    detail:[],
    limit:"",

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
        default:
            return state

    }
}

export default Reducer;