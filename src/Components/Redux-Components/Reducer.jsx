export const initialState= {
    term:null
}
export const Action ={
    setSearch :'SET_SEARCH',
}
const reducer =(state,action)=>{
     switch (action.type){
        case "SET_SEARCH":
            return {...state,
            term:action.term
        };
        default:
            return state
     }
}
export default reducer;