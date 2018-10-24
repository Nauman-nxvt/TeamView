import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    return (
        <div className={'row'}>
            <div id={'navbar'} className={'col-12'}>
                <span id={'main-heading'}>YOUR TEAM FOR THIS TEST</span>
                <div id={'team-page-link'}>
                    <span id={'team-page-span'}>TEAM PAGE</span>
                    <FontAwesomeIcon style={{marginTop: 3}} color={'grey'} icon={faUsers}/>
                </div>
            </div>
        </div>
    );
};