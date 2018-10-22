import React, {Component, Fragment} from 'react';
import {getMembers, getMember} from '../services/data';
import {TeamMembers} from "./TeamMembers";
import AddMember from "./AddMember";
import {Header} from "./Header";
import {ShowAllView} from "./ShowAllView";

class TeamView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: [],
            availableMembers: getMembers(),
            showAllVisible: false,
        }
    }

    addMember = (selectedMemberId) => {

        const newMember = getMember(selectedMemberId);
        const availableMembers = this.state.availableMembers;
        const index = availableMembers.indexOf(newMember);

        if (index > -1) {
            availableMembers.splice(index, 1);
        }
        const team = this.state.team.concat(newMember);
        const showAllVisible = this.state.team.length >= 5;
        this.setState({
            team,
            availableMembers,
            showAllVisible,
        });
    };

    removeMember = (id) => {
        const newTeam = this.state.team.filter((member) => {
            return member.id !== id;
        });
        const removedMember = getMember(id);
        const availableMembers = this.state.availableMembers.concat(removedMember).sort((a,b)=>{return a.id - b.id})
        this.setState({
            team: newTeam,
            availableMembers,
        });
    };

    render() {
        return (
            <Fragment>
                <Header/>
                <div className={'row'}>
                    <div id={'team-div'} className={'col-12'}>
                        <AddMember availableMembers={this.state.availableMembers} addMember={this.addMember}/>
                        <TeamMembers team={this.state.team} removeMember={this.removeMember}/>
                        {this.state.showAllVisible && <ShowAllView/>}
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default TeamView;