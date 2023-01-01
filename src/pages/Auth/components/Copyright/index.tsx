import React, {FC} from 'react';
import './Copyright.scss';

const Copyright: FC = () => (
    <p className='copyright'>
        &copy; {new Date().getFullYear()} Playground. All rights reserved.
    </p>
);

export default Copyright;
