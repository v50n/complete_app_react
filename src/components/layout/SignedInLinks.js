import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/actions/authAction'
import { connect } from 'react-redux'

class SignedInLinks extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <ul className="right hide-on-med-and-down">
                <li><NavLink to="/create">New Project</NavLink> </li>
                <li><a onClick={this.props.signOut}>Log out</a> </li>
                <li><NavLink to="/" className="btn btn-floating pink lighten-1">VS</NavLink> </li>
            </ul>
        );
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks);