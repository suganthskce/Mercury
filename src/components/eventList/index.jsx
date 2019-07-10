import React, { Component } from 'react';
import { connect } from "react-redux";
import './style.css';
import { fetchEvents } from "./../../actions/eventActions";

class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount() {
        this.props.fetchEvents();
    }

    componentWillReceiveProps = (newProps) => {
    }

    render() {
        return (''
        );
    }
}

const mapStateToProps = state => ({
    events: state.events,
});

const mapDispatchToProps = dispatch => ({
    fetchEvents: () => {
        dispatch(fetchEvents());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
