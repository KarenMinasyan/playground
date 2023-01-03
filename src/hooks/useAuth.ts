import { authSelector } from 'helpers/reduxSelectors';
import {useAppSelector} from "hook";

const useAuth = () => {
	 const { token } = useAppSelector(authSelector);
	 return !!token;
};

export default useAuth;
