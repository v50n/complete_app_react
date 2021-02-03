import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSummary = ({projectDetail}) => {
    //console.log(projectDetail);
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{projectDetail.title}</span>
                <p>{projectDetail.content}</p>
                <p className="grey-text">4h september</p>
            </div>
        </div>
    );
}

export default ProjectSummary;