import React, { Component } from 'react';
import { connect } from "react-redux";
import './style.css';
import Notifications, { notify } from 'react-notify-toast';
import { bindActionCreators } from "redux";
import { loginUser } from "./../../actions/userActions";
import { getAuthorizedToken, errorToaster } from './../../utils/utils';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        const { target: { value = '', name } } = e;
        this.setState({
            [name]: value
        });
    }

    componentWillMount() {
        const token = getAuthorizedToken();
        if (token) {
            window.location.href = "/remainder/home";
        }
    }

    componentWillReceiveProps = (newProps) => {
        if (newProps.success) {
            window.location.href = "/remainder/home";
        } else if (newProps.errors.length > 0) {
            newProps.errors.map((error) => {
                let err = error.message;
                errorToaster(err);
            })
        }
    }

    handleSubmit = () => {
        const { username = '', password = '' } = this.state;
        if (!username || !password) {
            alert("Enter username and password");
        } else {
            this.props.dispatch(loginUser({ username, password }));
        }
    }

    render() {
        return (
            <div className="body_wrapper">
                <Notifications />
                <div className="form_container">
                    <form>
                        <div className="imgcontainer">
                            <img src="user.png" alt="Avatar" className="avatar" />
                        </div>
                        <div className="container">
                            <label for="username"><b>Username</b></label>
                            <input type="text" placeholder="Enter Username" onChange={(e) => { this.handleChange(e) }} name="username" value={this.state.username} />

                            <label for="password"><b>Password</b></label>
                            <input type="password" placeholder="Enter Password" onChange={(e) => { this.handleChange(e) }} name="password" value={this.state.password} />

                            <button type="button" onClick={this.handleSubmit}>Login</button>
                        </div>
                        <div className="container">
                            <button type="button" className="cancelbtn">Forgot</button>
                            <span className="psw">Forgot <a href="#">password?</a></span>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.user.error,
    errors: state.user.errors,
    success: state.user.success,
    userInfo: state.user.userInfo
});

const mapDispatchToProps = dispatch => {
    let actions = bindActionCreators({
        loginUser: loginUser
    });
    return { actions, dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
