import AxiosInstance from 'utils/Instance';
import {GENERATE_PASSWORD} from "urls/auth";

export const login = (body: any) => AxiosInstance.post(GENERATE_PASSWORD, body);
