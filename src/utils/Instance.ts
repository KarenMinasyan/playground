import axios from 'axios';
import TokenService from './TokenService';

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	params: {},
});
instance.interceptors.request.use(
    (config: any) => {
		const token = TokenService.getLocalAccessToken();
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`;
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);
instance.interceptors.response.use(
	res => {
		return res;
	},
	async err => {
		const originalConfig = err.config;
		if (originalConfig.url !== 'auth/login' && err.response) {
			if (err.response.status === 401) {
				TokenService.removeLocalAccessToken();
				TokenService.removeLocalRefreshToken();
				return await instance
					.post('Accounts/Logout')
					.then(() => {
						window.location.href = 'auth/login';
					})
					.catch(e => e);
			}
		}
		return Promise.reject(err);
	}
);
export default instance;
