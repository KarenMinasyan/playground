import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import initialState from './initialState';
import {codeMessage, signIn} from './thunks';

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearDone: state => {
      state.status = '';
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
    [codeMessage.fulfilled.type]: (state, {payload}: PayloadAction<{token: string; refreshToken: string}>) => {
      state.loading = false;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken;
      state.error = '';
    },
    [codeMessage.rejected.type]: (state, {payload}) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const {clearDone} = authSlice.actions;
export default authSlice.reducer;
