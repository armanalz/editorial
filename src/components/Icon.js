import React from 'react';
import url from '../resources/images/sprite.svg';

const Icon = (props) => {
    return (
        
        <svg  style={{transform:props.transform,fill:props.fill}}>
             <use xlinkHref={`${url}#icon-${props.icon}`} />
        </svg>
    );
};

export default Icon;