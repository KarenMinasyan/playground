import AxiosInstance from 'utils/Instance';
import {CODE_MESSAGE, GENERATE_PASSWORD, LOG_OUT} from 'urls/auth';
import {CodeType, LoginType} from 'types';

export const login = (body: LoginType) => AxiosInstance.post(GENERATE_PASSWORD, body);
export const code = (body: CodeType) => AxiosInstance.post(CODE_MESSAGE, body);
export const logout = () => AxiosInstance.post(LOG_OUT);
