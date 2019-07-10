
import React, { Component } from 'react';
import { connect } from "react-redux";
import './style.less';
import Notifications, { notify } from 'react-notify-toast';
import { bindActionCreators } from "redux";
import { loginUser } from "./../../actions/userActions";
import { getAuthorizedToken, errorToaster } from './../../utils/utils';
import InputBox from './../../components/inputBox';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            mobile: '',
            username: '',
            password: '',
            dob: '',
            gender: ''
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
                            <InputBox
                                name={"username"}
                                label={"Username"}
                                placeholder={"Enter Username"}
                                onChange={this.handleChange}
                                value={this.state.username}
                            />
                            <InputBox
                                name={"username"}
                                label={"Username"}
                                placeholder={"Enter Username"}
                                onChange={this.handleChange}
                                value={this.state.username}
                            />
                            <InputBox
                                name={"username"}
                                label={"Username"}
                                placeholder={"Enter Username"}
                                onChange={this.handleChange}
                                value={this.state.username}
                            />
                            <InputBox
                                name={"username"}
                                label={"Username"}
                                placeholder={"Enter Username"}
                                onChange={this.handleChange}
                                value={this.state.username}
                            />
                            <InputBox
                                name={"username"}
                                label={"Username"}
                                placeholder={"Enter Username"}
                                onChange={this.handleChange}
                                value={this.state.username}
                            />
                            <button type="button" onClick={this.handleSubmit}>Register</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
