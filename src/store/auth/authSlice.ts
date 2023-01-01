import { createSlice } from '@reduxjs/toolkit';
import initialState from './initialState';

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
