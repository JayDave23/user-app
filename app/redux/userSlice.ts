import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: []
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
            edituser:(state , action)=>{
              state.user = action.payload
            },
            setuser:(state ,action)=>{
              state.user=action.payload
            }
            
        }
    })
export const {setuser,edituser} = userSlice.actions
export default userSlice.reducer