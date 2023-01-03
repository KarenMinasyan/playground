import React, {FC} from 'react';
import {ReactComponent as Bg} from 'assets/imgs/bg.svg';
import './Playground.scss';

const Playground: FC = () => (
    <div className='playground'>
        <div className='playground-inner'>
            <h1>PLAYGROUND</h1>
            <Bg/>
        </div>
    </div>
);

export default Playground;
