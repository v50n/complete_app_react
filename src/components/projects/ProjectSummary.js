import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSummary = () => {
    return(
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <Link to={'/project/'+1}>
                    <span className="card-title">Project Title</span>
                </Link>
                
                <p>Posted by Viet Son</p>
                <p className="grey-text">4h september</p>
            </div>
        </div>
    );
}

export default ProjectSummary;