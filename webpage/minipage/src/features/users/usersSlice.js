import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', name: 'Aiyegbusi Meee'},
    {id: '1', name: 'Dolapo Dee'},
    {id: '2', name: 'Blud Bitch'},
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer