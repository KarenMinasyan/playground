import AxiosInstance from 'utils/Instance';
import {GENERATE_PASSWORD} from 'urls/auth';
import {LoginType} from 'types';

export const login = (body: LoginType) => AxiosInstance.post(GENERATE_PASSWORD, body);
