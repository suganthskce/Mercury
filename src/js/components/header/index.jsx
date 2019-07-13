import React, { Component } from 'react';
import { connect } from "react-redux";
import './styles.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount() {
    }

    componentWillReceiveProps(newProps) {
    }

    render() {
        return (
            <div className="header_wrapper">
                <div className="floater_left">
                    <div className="title">
                        <span className="title_text">
                            Remainder </span>
                    </div>
                </div>
                <div className="floater_right">
                    <ul className="floater_list">
                        <li className="header_list">
                            <i className="fa fa-user" aria-hidden="true"></i>
                            My account </li>
                        <li className="header_list">
                            <i className="fa fa-sign-out" aria-hidden="true"></i>
                            Sign out    </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
