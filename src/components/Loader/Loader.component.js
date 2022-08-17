import React from 'react';
import Loader from 'react-loaders';


const LoadingIndicator = props => {
    const { size, color } = props;
    return (
        <div className='w-fit mx-auto'>
            <Loader type="line-scale" color={color} active size='lg' style={{transform: `scale(${size})`}}  />
        </div>
    )
}

export default LoadingIndicator;