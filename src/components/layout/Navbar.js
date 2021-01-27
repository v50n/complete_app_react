import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">
                        MyProject
                    </Link>
                    <SignedInLinks />
                    <SignedOutLinks />
                </div>
            </nav>
        );
    }
}

export default Navbar;