import React, {Component} from 'react';
import {RoundBtn} from "./RoundBtn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {RoundImg} from "./RoundImg";
import {AvatarText} from "./AvatarText";

export default class Member extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memberHovered: false,
        }
    }

    onMouseEnter = () => {
        this.setState({memberHovered: true});
    };

    onMouseLeave = () => {
        this.setState({memberHovered: false});
    };

    render() {
        const {member} = this.props;
        return(
            <div className={'team-block'} style={this.state.memberHovered ? {backgroundColor: '#E2F4EA'} : {}} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                {
                    this.state.memberHovered ?
                        <RoundBtn
                            style={styles.removeBtn}
                            onClick={()=>{this.props.removeMember(member.id)}}
                            content={<FontAwesomeIcon icon={faTimes}/>}
                        /> :
                        <RoundImg style={styles.avatarImg} image={member.picture}/>
                }
                <AvatarText role={member.role} username={member.username}/>
            </div>
        )
    }
}

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