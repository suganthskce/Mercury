import React, { Component } from 'react';
import { connect } from "react-redux";
import './style.css';
import Notifications, { notify } from 'react-notify-toast';
import { loginUser } from "./../../actions/userActions";
import { getAuthorizedToken, errorToaster } from './../../utils/utils';
import InputBox from './../../components/inputBox';

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

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        });
    }

    componentWillMount() {
        const token = getAuthorizedToken();
        if (token) {
            window.location.href = "/remainder";
        }
    }

    componentWillReceiveProps = (newProps) => {
        if (newProps.success) {
            window.location.href = "/remainder";
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
            this.props.loginUser({ username, password });
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
                        <div className="login_container">
                            <InputBox
                                name={"username"}
                                label={"Username"}
                                placeholder={"Enter Username"}
                                onChange={this.handleChange}
                                value={this.state.username}
                            />
                            <InputBox
                                name={"password"}
                                label={"Password"}
                                placeholder={"Enter Password"}
                                onChange={this.handleChange}
                                value={this.state.password}
                            />
                            <button type="button" onClick={this.handleSubmit}>Login</button>
                        </div>
                        <div className="login_container">
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

const mapDispatchToProps = dispatch => ({
    loginUser: (payload) => {
        dispatch(loginUser(payload));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
