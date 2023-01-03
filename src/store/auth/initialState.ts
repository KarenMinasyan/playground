import {InitialState} from 'types';
import TokenService from 'utils/TokenService';

const initialState = {
    loading: false,
    email: '',
    status: '',
    token: TokenService.getLocalAccessToken() || null,
    refreshToken: TokenService.getLocalRefreshToken() || null,
    error: '',
} as InitialState;

export default initialState;
