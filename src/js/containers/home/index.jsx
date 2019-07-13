import React, { Component } from 'react';
import { connect } from "react-redux";
import './style.css';
import Layout from './../layout/index.jsx';
import EventList from './../../components/eventList/index.jsx';

class Home extends Component {
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
