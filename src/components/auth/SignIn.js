import React, {Component} from 'react'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
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
        
    }

    render() {
        return (
            <div className="container">
                <h1 className="center">Sign In</h1>
                <div className="card-panel grey lighten-5 z-depth-1">
                    <form action="">
                        <input type="email" id="username" placeholder="Email" onChange={this.handleChange} />
                        <input type="password" id="password" placeholder="Your password" onChange={this.handleChange} />
                        <button className="btn waves-effect waves-light">Submit</button>
                    </form>
                </div>
                </div>

        );
    }
}

export default SignIn;