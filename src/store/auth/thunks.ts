import {createAsyncThunk} from '@reduxjs/toolkit';
import {login} from 'services/auth-service';
import {LoginType} from 'types';

export const signIn = createAsyncThunk<string, LoginType, { rejectValue: string }>('auth/signIn', async (data, {rejectWithValue}) => {
    return login(data)
            .then(({data}) => data)
            .catch(e => rejectWithValue(e.response.data.message))
});
