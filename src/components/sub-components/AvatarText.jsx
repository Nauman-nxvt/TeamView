import React from 'react';

export const AvatarText = props => {
    const decorator = props.role === 'External' ? <span className={'decorator'}>*</span> : '';
    return(
        <div id={'avatar-text'}>
            <p>{props.role}{decorator}</p>
            <p className={'font-weight-bold'}>{props.username}</p>
        </div>
    )
};