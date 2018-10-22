import React, {Fragment} from 'react';
import Member from "./Member";

export const TeamMembers = props => {
    const Members = props.team.map((member)=>{
        return(
            <Member key={member.id} member={member} removeMember={props.removeMember}/>
        );
    });

    return (
        <Fragment>
            {Members}
        </Fragment>
    );
};