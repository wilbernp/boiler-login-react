import { IUser } from "@/types/user.d.t";
import { createSlice } from "@reduxjs/toolkit";

const initialState:IUser = {
    email:"",
    username:"",
    token:""
}

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state, action)=>{
            return {
                ...state,
                ...action.payload
            }
        }
    }
})


export const {setUser} = userSlice.actions

const userReducer = userSlice.reducer

export default userReducer