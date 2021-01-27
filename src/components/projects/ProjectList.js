import React, {Component} from 'react';
import ProjectSummary from './ProjectSummary';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() {
        //console.log(this.props.projects);
         let projects = this.props.projects;
        console.log(projects);
        const projectList = projects ? (
            projects.map(project => {
                return(
                    <div className="card z-depth-0 project-summary">
                    <div className="card-content grey-text text-darken-3">
                        <Link to={'/project/'+1}>
                            <span className="card-title">{project.title}</span>
                        </Link>
                        
                        <p>{project.content}</p>
                        <p className="grey-text">4h september</p>
                    </div>
                </div>
                );
            })
        ) : 
        (
            <div className="project-list">
                No project available
            </div>
        );
        return (
            <div className="project-list section">
              s
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.project.projects // map the props.projects of this component to the state.project of the rootReducer
    }
}

export default connect(mapStateToProps)(ProjectList);