import React from 'react';

export const RoundImg = props => {
    return(
        <div id={'avatar-img'}>
            <img style={props.style} src={require(`../../assets/images/${props.image}`)} alt={'avatar'}/>
        </div>
    )
};