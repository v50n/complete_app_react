import React, {Component} from 'react';
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() {
        
        return (

            <div className="dasboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={this.props.projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    
    return {
        projects: state.firestore.ordered.project // map the props.projects of this component to the state.firestore.ordered.project (the component now is linked with the firestore)
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'project'}
    ]) 
)(Dashboard);