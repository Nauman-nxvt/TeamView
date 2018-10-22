import React, {Component, Fragment} from 'react';
import {getMembers, getMember} from '../services/data';
import {RoundBtn} from "./RoundBtn";
import Member from "./Member";

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
        if (this.state.selectedMemberId === 0) {
            return;
        }
        const newMember = getMember(this.state.selectedMemberId);
        const availableMembers = this.state.availableMembers;
        const index = availableMembers.indexOf(newMember);

        if (index > -1) {
            availableMembers.splice(index, 1);
        }
        const team = this.state.team.concat(newMember);
        this.setState({
            team,
            availableMembers,
            selectedMemberId: 0,
        });
    };

    removeMember = (id) => {
        const newTeam = this.state.team.filter((member) => {
            return member.id !== id;
        });
        console.log('id', id)
        console.log('newTeam', newTeam)
        const removedMember = getMember(id);
        console.log('removedMember', removedMember)
        const availableMembers = this.state.availableMembers.concat(removedMember).sort((a,b)=>{return a.id - b.id})
        this.setState({
            team: newTeam,
            availableMembers,
        });
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
                    <Member member={member} removeMember={this.removeMember}/>
                </Fragment>
            )
        });

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
                                        selectedMemberId: parseInt(e.target.value)
                                    })
                                }}>
                                <option value={0}>Add a team member to this test</option>
                                {Options}
                            </select>
                            <RoundBtn
                                style={{backgroundColor: '#E2F4EA', color: '#007672', marginLeft: 10, alignSelf: 'center'}}
                                onClick={this.addMember}
                                content={'+'}
                            />
                        </div>
                        {TeamMembers}
                    </div>

                </div>
            </Fragment>
        )
    }
}


export default TeamView;