class TokenService {
	getLocalAccessToken() {
		return localStorage.getItem('token');
	}
	removeLocalAccessToken() {
		return localStorage.removeItem('token');
	}
	setLocalAccessToken(token: string) {
		return localStorage.setItem('token', token);
	}
    getLocalRefreshToken() {
        return localStorage.getItem('refreshToken');
    }
    removeLocalRefreshToken() {
        return localStorage.removeItem('refreshToken');
    }
    setLocalRefreshToken(refreshToken: string) {
        return localStorage.setItem('refreshToken', refreshToken);
    }
}
export default new TokenService();
