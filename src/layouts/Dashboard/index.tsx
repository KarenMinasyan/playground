import React, {FC} from 'react';
import Button from 'components/common/Button';
import { signOut } from 'store/auth/thunks';
import {useAppDispatch} from 'hook';

const DashboardLayout: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>dashboard</h1>
      <Button children='Logout' cb={() => dispatch(signOut())} />
    </div>
  );
}

export default DashboardLayout;
