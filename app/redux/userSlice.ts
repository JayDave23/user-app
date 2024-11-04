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

// {const user=
  // name: action.payload.name,
  // username: action.payload.username,
  // email: action.payload.email,
  // address: {
  //     street: action.payload.address.street,
  //     suite: action.payload.address.suite,
  //     city: action.payload.address.city,
  //     zipcode: action.payload.address.zipcode,
  //     geo: {
  //         lat: action.payload.address.geo.lat,
  //         lng: action.payload.address.geo.lng
  //     }
  // },
  // phone: action.payload.phone,
  // website:action.payload.phone,
  // company:{
  //     name:action.payload.company.name,
  //     catchPhrase:action.payload.company.catchPhrase,
  //     bs:action.payload.company.bs
  // }