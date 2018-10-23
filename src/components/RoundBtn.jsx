import React from 'react';

export const RoundBtn = props => {
    return(
        <button
            style={{...baseStyle, ...props.style}}
            onClick={props.onClick}
        >
            {props.content}
        </button>)

};

const baseStyle = {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    border: '0',
    fontSize: 22,
};