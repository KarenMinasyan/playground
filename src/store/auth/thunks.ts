import {createAsyncThunk} from '@reduxjs/toolkit';
import {code, login} from 'services/auth-service';
import {CodeType, LoginType} from 'types';
import TokenService from 'utils/TokenService';

export const signIn = createAsyncThunk<string, LoginType, { rejectValue: string }>('auth/signIn', async (data, {rejectWithValue}) => {
  return login(data)
    .then(({data}) => data)
    .catch(e => rejectWithValue(e.response.data.message));
});

export const codeMessage = createAsyncThunk<string[], CodeType, { rejectValue: string }>('auth/codeMessage', async (data, {rejectWithValue}) => {
  return code(data)
    .then(({data: {jwt}}) => {
      const {token, refreshToken} = jwt;
      TokenService.setLocalAccessToken(token);
      TokenService.setLocalRefreshToken(refreshToken);
      return [token, refreshToken];
    })
    .catch(e => rejectWithValue(e.response.data.message))
});
