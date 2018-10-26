import React, {Component, Fragment} from 'react';
import {RoundBtn} from "./sub-components/RoundBtn";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {RoundImg} from "./sub-components/RoundImg";
import {AvatarText} from "./sub-components/AvatarText";
import Hoverable from './Hoverable'

class Member extends Component {
    render() {
        const {member, hovered} = this.props;
        return (
            <Fragment>
                {
                    hovered ?
                        <RoundBtn
                            style={styles.removeBtn}
                            onClick={() => {
                                this.props.removeMember(member.id)
                            }}
                            content={<FontAwesomeIcon icon={faTimes}/>}
                        /> :
                        <RoundImg style={styles.avatarImg} image={member.picture}/>
                }
                <AvatarText role={member.role} username={member.username}/>
            </Fragment>
        )
    }
}

const MemberHoverable = Hoverable(Member, 'team-block');

export default MemberHoverable;

const styles = {
    removeBtn: {
        backgroundColor: '#FFFFFF',
        color: '#FEC4A8',
        border: '1px solid',
        borderColor: '#FEC4A8',
    },
    avatarImg: {
        height: 40,
    }
};