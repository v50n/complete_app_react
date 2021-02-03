import React, {Component} from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authAction'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: ''
         };
    }
    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        });
        //console.log(this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let credential = this.state;
        this.props.signIn(credential);
       // console.log(this.props.err)
    }

    render() {
        let err = this.props.err;
        return (
            <div className="container">
                <h1 className="center">Sign In</h1>
                <div className="card-panel grey lighten-5 z-depth-1">
                <div className="red-text center err-auth">
                            { err ? (err.message): null}
                </div>
                    <form onSubmit={this.handleSubmit}>

                        <input type="email" id="email" placeholder="Email" onChange={this.handleChange} />
                        <input type="password" id="password" placeholder="Your password" onChange={this.handleChange} />
                        <button className="btn waves-effect waves-light">Submit</button>

                    </form>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        err: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credential) => dispatch(signIn(credential))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);