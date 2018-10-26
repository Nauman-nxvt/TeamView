import React, {Component, Fragment} from 'react';
import {RoundBtn} from "./sub-components/RoundBtn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default class SelectMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMemberId: 0,
        };
        this.select = React.createRef();
    }

    componentDidMount() {
        this.select.current.size = this.props.availableMembers.length + 1;
    }

    onSelect = (e) => {
        const selectedMemberId = parseInt(e.target.value);
        this.props.handleOnSelect(selectedMemberId);
    };

    render() {
        const Options = this.props.availableMembers.map((member) => {
            return(
                <Fragment key={'opt'+member.id}>
                    <option value={member.id}>{member.username}</option>
                </Fragment>
            );
        });
        return(
            <div className={'col-12 no-padding'}>
                <RoundBtn
                    style={styles.removeBtn}
                    onClick={this.props.hideSelect}
                    content={<FontAwesomeIcon icon={faTimes}/>}
                />
                <select
                    ref={this.select}
                    id={'add-member-select'}
                    className={'form-control'}
                    value={this.state.selectedMemberId}
                    onChange={this.onSelect}>
                    <option value={0}>Click on member to add to team</option>
                    {Options}
                </select>
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
};