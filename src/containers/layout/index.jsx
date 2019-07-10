import React, { Component } from 'react';
import { connect } from "react-redux";
import './style.css';
import Notifications, { notify } from 'react-notify-toast';
import { bindActionCreators } from "redux";
import { loginUser } from "./../../actions/userActions";
import { getAuthorizedToken, errorToaster } from './../../utils/utils';
import Header from '../../components/header';
import LeftNav from './../../components/leftnav';
import Footer from './../../components/footer';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount() {
    }

    componentWillReceiveProps = (newProps) => {
    }

    render() {
        return (
            <div className="body_wrapper_home">
                <Header />
                <div className="content_wrapper">
                    <LeftNav />
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
