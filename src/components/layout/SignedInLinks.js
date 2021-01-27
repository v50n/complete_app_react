import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class SignedInLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/create">New Project</NavLink> </li>
                <li><NavLink to="/">Log out</NavLink> </li>
                <li><NavLink to="/" className="btn btn-floating pink lighten-1">VS</NavLink> </li>
            </ul>
        );
    }
}

export default SignedInLinks;