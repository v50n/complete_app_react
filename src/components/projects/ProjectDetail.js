import React from 'react';
import {connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'

const ProjectDetail = (props) => {
    //console.log(props);
    const projectDetail = props.project ? (
          <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{props.project.title}</span>
              <p>{props.project.content}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <div>Posted by {props.project.authorFirstName} {props.project.authorLastName}</div>
              <div>Created at: </div>
            </div>
          </div>
        </div>
    ) : null ; // use this way because all data is async data. 
    return(
        <div>
          {projectDetail}
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
  // console.log("own props; ",ownProps)
  // console.log(state);
  const id = ownProps.match.params.id;
  const projectList = state.firestore.data.project;
  const project = projectList ? projectList[id] : null // we need to do that instead of using filter because the data is async. If we use filter or directly projectList[id], it will return undefined because we dont have charged yet the data. 
  // console.log(project);
  return{
     project
  }
  
} 

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'project'}
]) 
)(ProjectDetail);
