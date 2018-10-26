import React, {Component, Fragment} from 'react';
import {getMembers, getMember} from '../services/data';
import {TeamMembers} from "./TeamMembers";
import AddMember from "./AddMember";
import {Header} from "./sub-components/Header";
import {ShowAllBtn} from "./sub-components/ShowAllBtn";
import {reactLocalStorage} from 'reactjs-localstorage';


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

    componentDidMount() {
        this.loadLocalStorage();

        window.addEventListener(
            "beforeunload",
            this.saveToLocalStorage
        );
    }

    componentWillUnmount() {
        window.removeEventListener(
            "beforeunload",
            this.saveToLocalStorage
        );
    }

    addMember = (selectedMemberId) => {

        const newMember = getMember(selectedMemberId);
        let availableMembers = this.state.availableMembers;
        availableMembers = availableMembers.filter( member => {
            return member.id !== selectedMemberId
        });

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

    saveToLocalStorage = () => {
        reactLocalStorage.set('team', JSON.stringify(this.state.team));
        reactLocalStorage.set('availableMembers', JSON.stringify(this.state.availableMembers));
        reactLocalStorage.set('showAll', this.state.showAll);
        reactLocalStorage.set('showAllBtnVisible', this.state.showAllBtnVisible);
    };

    loadLocalStorage = () => {
        if (reactLocalStorage.hasOwnProperty('team') && reactLocalStorage.hasOwnProperty('availableMembers') && reactLocalStorage.hasOwnProperty('showAll') && reactLocalStorage.hasOwnProperty('showAllBtnVisible')) {
            this.setState({
                team: JSON.parse(reactLocalStorage.get('team')),
                availableMembers: JSON.parse(reactLocalStorage.get('availableMembers')),
                showAll: JSON.parse(reactLocalStorage.getObject('showAll')),
                showAllBtnVisible: JSON.parse(reactLocalStorage.getObject('showAllBtnVisible')),
            });
        }
    };

    render() {
        const team = this.state.showAll ? this.state.team : this.state.team.slice(0,5);
        return (
            <Fragment>
                <Header/>
                <div id={'main-content'} className={'row'}>
                    <div id={'team-div'} className={'col-12'}>
                        <AddMember availableMembers={this.state.availableMembers} addMember={this.addMember}/>

                        <TeamMembers team={team} removeMember={this.removeMember}/>
                    </div>
                </div>
                {this.state.showAllBtnVisible && <div className={'row'}><ShowAllBtn showAll={this.state.showAll} toggleShowAll={this.toggleShowAll}/></div>}
            </Fragment>
        )
    }
}


export default TeamView;