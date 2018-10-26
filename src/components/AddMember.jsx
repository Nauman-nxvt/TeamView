import React, {Component, Fragment} from 'react';
import {RoundBtn} from "./sub-components/RoundBtn";
import SelectMember from "./SelectMember";
import Hoverable from './Hoverable'

class AddMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMemberId: 0,
            selectVisible: false,
        }
    }


    showSelect = () => {
        this.setState({selectVisible: true});
    };

    handleOnSelect = (selectedMemberId) => {
        if (selectedMemberId !== 0) {
            this.props.addMember(selectedMemberId);
        }
        this.setState({
            selectVisible: false,
        });
        this.props.hoverFalse();
    };

    hideSelect = () => {
        this.state.selectVisible && this.setState({selectVisible: false});
    };

    render() {
        const backgroundColor = this.props.hovered ? {backgroundColor: 'white'} : {backgroundColor: '#E2F4EA'}
        return (
            <Fragment>
                {
                    this.state.selectVisible ?
                        <SelectMember
                            hideSelect={this.hideSelect}
                            availableMembers={this.props.availableMembers}
                            handleOnSelect={this.handleOnSelect}
                        /> :
                        <div id={'addMemberDiv'}
                             onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}
                             onClick={this.showSelect}
                        >
                            <RoundBtn
                                style={{...styles.addMemberBtn, ...backgroundColor}}
                                onClick={null}
                                content={'+'}
                            />
                            <div id={'avatar-text'}>
                                <p>Add team member</p>
                                <p>to this test</p>
                            </div>
                        </div>
                }
            </Fragment>
        )
    }
}

const AddMemberHoverable = Hoverable(AddMember, 'team-block');

export default AddMemberHoverable;

const styles = {
    addMemberBtn: {
        color: '#007672',
        marginLeft: 0,
        alignSelf: 'center',
    },
};