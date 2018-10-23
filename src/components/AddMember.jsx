import React, {Component, Fragment} from 'react';
import {RoundBtn} from "./RoundBtn";

export default class AddMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMemberId: 0,
        }
    }

    onAddMember = () => {
        const selectedMemberId = this.state.selectedMemberId;
        if (selectedMemberId === 0) {
            return;
        }
        this.props.addMember(selectedMemberId);
        this.setState({selectedMemberId: 0});
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
            <div className={'team-block'}>
                <div className={'col-9 no-padding'}>
                    <select
                        className={'form-control'}
                        value={this.state.selectedMemberId}
                        onChange={(e) => {
                            this.setState({
                                selectedMemberId: parseInt(e.target.value)
                            })
                        }}>
                        <option value={0}>Add a team member to this test</option>
                        {Options}
                    </select>
                </div>
                <div className={'col-3 no-padding'}>
                    <RoundBtn
                        style={{backgroundColor: '#E2F4EA', color: '#007672', marginLeft: 10, alignSelf: 'center'}}
                        onClick={this.onAddMember}
                        content={'+'}
                    />
                </div>
            </div>
        )
    }
}