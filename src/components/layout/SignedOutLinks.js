import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class SignedOutLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/signup">Signup</NavLink> </li>
                <li><NavLink to="/signin">Login</NavLink> </li>
            </ul>
        );
    }
}

export default SignedOutLinks;