import React, { Component } from 'react';
import { connect } from "react-redux";
import './style.css';
import Notifications, { notify } from 'react-notify-toast';
import { bindActionCreators } from "redux";
import { loginUser } from "./../../actions/userActions";
import { getAuthorizedToken, errorToaster } from './../../utils/utils';
import Layout from './../layout';
import EventList from './../../components/eventList';

class Home extends Component {
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
            <Layout>
                <EventList />
            </Layout>
        );
    }
}

const mapStateToProps = state => ({
    events: state.events,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
