import React from 'react';

const PercentColor = (props) => {
    const color = props.percent >= "0.0" ? 'green' : 'red';
    return (
        <div>
            <font color={color}>{props.percent}</font> 
        </div>
    );
}

export default PercentColor;