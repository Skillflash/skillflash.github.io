import React from 'react';
import Loader from 'react-loaders';


const LoadingIndicator = props => {
    const { size, color } = props;
    return (
        <div className='mt-20 text-neutral-black text-7xl w-fit mx-auto'>
            <Loader type="line-scale-party" color={color} active size='lg' style={{transform: `scale(${size})`}}  />
        </div>
    )
}

export default LoadingIndicator;