import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        //const isLoggedOut = state;
        //console.log(this.props);
        const signedLink = this.props.logOut ? (
            <SignedOutLinks />
        ) : (
            <SignedInLinks signOut={this.props.signOut} />
        );
        //  console.log(isLoaded(this.props.auth));
        // const loadedNavBar = this.props.auth ? signedLink : (<p class="white-text right">Loading Nav...</p>);
        return (
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">
                        MyProject
                    </Link>
                    {signedLink}
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        logOut: state.firebase.auth.isEmpty,
        auth:   state.firebase.auth
    }
}



export default connect(mapStateToProps)(Navbar);