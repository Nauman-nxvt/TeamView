import React, {Component, Fragment} from 'react';
import {getMembers, getMember} from '../services/data';
import {TeamMembers} from "./TeamMembers";
import AddMember from "./AddMember";
import {Header} from "./Header";
import {ShowAllBtn} from "./ShowAllBtn";

class TeamView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: [],
            availableMembers: getMembers(),
            showAllBtnVisible: false,
            showAll: false,
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
        const showAllBtnVisible = this.state.team.length >= 5;
        this.setState({
            team,
            availableMembers,
            showAllBtnVisible,
        });
    };

    removeMember = (id) => {
        const newTeam = this.state.team.filter((member) => {
            return member.id !== id;
        });
        const removedMember = getMember(id);
        const availableMembers = this.state.availableMembers.concat(removedMember).sort((a,b)=>{return a.id - b.id})
        const showAllBtnVisible = this.state.team.length > 6;
        this.setState({
            team: newTeam,
            availableMembers,
            showAllBtnVisible,
            showAll: showAllBtnVisible && this.state.showAll
        });
    };
    
    toggleShowAll = () => {
        this.setState({showAll: !this.state.showAll})    
    };

    render() {
        const team = this.state.showAll ? this.state.team : this.state.team.slice(0,5);
        return (
            <Fragment>
                <Header/>
                <div className={'row'}>
                    <div id={'team-div'} className={'col-12'}>
                        <AddMember availableMembers={this.state.availableMembers} addMember={this.addMember}/>
                        <TeamMembers team={team} removeMember={this.removeMember}/>
                        {this.state.showAllBtnVisible && <ShowAllBtn showAll={this.state.showAll} toggleShowAll={this.toggleShowAll}/>}
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default TeamView;