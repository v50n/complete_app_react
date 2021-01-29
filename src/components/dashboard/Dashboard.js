import React, {Component} from 'react';
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        console.log(this.props.projects);
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
        projects: state.project.projects // map the props.projects of this component to the state.project of the rootReducer
    }
}

export default connect(mapStateToProps)(Dashboard);