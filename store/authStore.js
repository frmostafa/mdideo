import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jwt : false ,
    name : 'undifined',
    password : 'undifiend'
}

const slice = createSlice({
    name : "auth",
    initialState : initialState,
    reducers : {
        LoginUser : (state , action) => {
            if(!state.jwt){
                state.jwt = action.payload.jwt;
                state.name = action.payload.username;
                state.password = action.payload.password;
                // console.log(action);

            }
        }
    }
})

export const { LoginUser } = slice.actions;
export default slice.reducer;