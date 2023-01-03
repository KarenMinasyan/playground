import React, {FC} from 'react';
import './Error.scss';

const Error: FC<{ message: string | undefined }> = ({message}) => (
    <div className='error'>
        <div className='error-icon'>!</div>
        <p>{message}</p>
    </div>
);

export default Error;
