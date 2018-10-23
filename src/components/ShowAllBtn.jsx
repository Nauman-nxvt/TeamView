import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

export const ShowAllBtn = props => {
    const membersToShow = props.showAll ? '5' : 'all';
    const icon = props.showAll ? faAngleUp : faAngleDown;
    return (
        <div id={'show-all-div'} onClick={props.toggleShowAll}>
            <span>{`Show ${membersToShow}`} <FontAwesomeIcon icon={icon}/></span>
        </div>
    );
}