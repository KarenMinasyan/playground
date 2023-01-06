import { authSelector } from 'helpers/reduxSelectors';
import {useAppSelector} from "hook";

const useAuth = () => {
	 const { token } = useAppSelector(authSelector);
  console.log(token, 'token');
	 return !!token;
};

export default useAuth;
