export const initialState={
    user : null,
}

export const actionTypes = {
    SET_USER: "SET_USER",  /*action dispatch */
};

const reducer = (state, action)=>{
    console.log(action);
    switch(action.type){
        case actionTypes.SET_USER:
            return{
                ...state,
                user: action.user,/* changes in data layer are returned */
            };

        default: 
            return state;
    }
};

export default reducer;