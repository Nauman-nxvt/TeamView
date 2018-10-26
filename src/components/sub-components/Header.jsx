import React from 'react';
import TeamPageLink from './TeamPageLink'

export const Header = () => {
    return (
        <div id={'header-row'} className={'row'}>
            <div id={'navbar'} className={'col-12'}>
                <span id={'main-heading'}>YOUR TEAM FOR THIS TEST</span>
                <TeamPageLink/>
            </div>
        </div>
    );
};