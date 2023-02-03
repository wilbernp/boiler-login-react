import { IUser } from "@/types/user";
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
        },
        setToken:(state,action)=>{
            return{
                ...state,
                token:action.payload
            }
        }
    }
})


export const {setUser,setToken} = userSlice.actions

const userReducer = userSlice.reducer

export default userReducer