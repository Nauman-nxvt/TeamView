import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUsers} from '@fortawesome/free-solid-svg-icons';
import Hoverable from '../Hoverable'

const TeamPageLink = () => {
    return (
        <div id={'team-page-link'}>
            <span id={'team-page-span'}>TEAM PAGE</span>
            <FontAwesomeIcon style={{marginTop: 3}} color={'grey'} icon={faUsers}/>
        </div>
    )
};

const TeamPageLinkHoverable = Hoverable(TeamPageLink);

export default TeamPageLinkHoverable;