import React, {Component, Fragment} from 'react';
import {getMembers, getMember} from '../services/data';

class TeamView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: [],
            availableMembers: getMembers(),
            selectedMemberId: 0,
        }
    }

    addMember = () => {
        if (this.state.selectedMemberId == 0) {
            return;
        }
        const newMember = getMember(parseInt(this.state.selectedMemberId));
        const availableMembers = this.state.availableMembers;
        const index = availableMembers.indexOf(newMember);

        if (index > -1) {
            availableMembers.splice(index, 1);
        }
        const team = this.state.team.concat(newMember);
        this.setState({team, availableMembers});
    };

    render() {
        const Options = this.state.availableMembers.map((member) => {
            return(
                <Fragment key={'opt'+member.id}>
                    <option value={member.id}>{member.username}</option>
                </Fragment>
            );
        });

        const TeamMembers = this.state.team.map((member)=>{
            return(
                <Fragment key={member.id}>
                    <div className={'team-block'}>
                        <div id={'avatar-img'}>
                            <img style={{height: 40}} src={require(`../assets/images/${member.picture}`)}></img>
                        </div>
                        <div id={'avatar-text'}>
                            <p>{member.role}</p>
                            <p className={'font-weight-bold'}>{member.username}</p>
                        </div>

                    </div>

                </Fragment>
            )
        })

        return (
            <Fragment>
                <div id={'navbar'} className={'row'}>
                    <h2 id={'main-heading'}>YOUR TEAM FOR THIS TEST</h2>
                </div>
                <div id={'team-div'} className={'row'}>
                    <div className={'col-12'}
                         style={{display: 'flex', width: '100%', justifyContent: 'flex-start', flexWrap: 'wrap'}}
                    >
                        <div className={'team-block'}>
                            <select
                                value={this.state.selectedMemberId}
                                onChange={(e) => {
                                    this.setState({
                                        selectedMemberId: e.target.value
                                    })
                                }}>
                                <option value={0}>Add a team member to this test</option>
                                {Options}
                            </select>
                            <button className={'round-btn'} onClick={this.addMember}>+</button>
                        </div>
                        {TeamMembers}
                    </div>

                </div>
            </Fragment>
        )
    }
}


export default TeamView;