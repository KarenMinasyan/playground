import React, {FC, ReactNode} from 'react';
import './Button.scss';

const Button: FC<{ children: ReactNode, cb?: () => void, disabled?: boolean }> = ({children, cb, disabled = false}) => (
    <button className='button' onClick={cb} disabled={disabled}>
        {children}
    </button>
);

export default Button;
