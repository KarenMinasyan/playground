import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import initialState from './initialState';
import {codeMessage, signIn, signOut} from './thunks';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearDone: state => {
      state.status = '';
    },
    clearError: state => {
      state.error = ''
    }
  },
  extraReducers: {
    [signIn.pending.type]: state => {
      state.loading = true;
    },
    [signIn.fulfilled.type]: (state, {payload}: PayloadAction<string>) => {
      state.loading = false;
      state.status = payload;
      state.error = '';
    },
    [signIn.rejected.type]: (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    },
    [codeMessage.pending.type]: state => {
      state.loading = true;
    },
    [codeMessage.fulfilled.type]: (state, {payload}: PayloadAction<string[]>) => {
      state.loading = false;
      state.token = payload[0];
      state.refreshToken = payload[1];
      state.error = '';
    },
    [codeMessage.rejected.type]: (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    },
    [signOut.pending.type]: state => {
      state.loading = true;
    },
    [signOut.fulfilled.type]: state => {
      state.loading = false;
      state.token = null;
      state.refreshToken = null;
      state.error = '';
    },
    [signOut.rejected.type]: (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {clearDone, clearError} = authSlice.actions;
export default authSlice.reducer;
