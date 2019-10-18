import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import './style.css';
import { fetchEvents } from "./../../actions/eventActions";
import Event from './event'
import ModalView from './../common/Popup';

class EventList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            key: ''
        };
    }

    onCloseModal = () => {
        this.setState({ open: false });
    };

    componentWillMount() {
        this.props.fetchEvents();
    }

    componentWillReceiveProps = (newProps) => {
    }

    doAction = (payload, key) => {
        console.log("Payload", payload, key);
        this.setState({ open: true, key });
    }

    render() {
        const { events = [] } = this.props;
        const { open } = this.state;
        return (
            <div class="container">
                {events.map(event => {
                    return <Event data={event} actionHandler={this.doAction} />;
                })}
                <ModalView
                    classNames={"modal_container"}
                    openstatus={open} onClose={this.onCloseModal}
                >
                    <Fragment>
                        ASDASDASD
                    </Fragment>
                </ModalView>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        events: state.events.eventList
    }
};

const mapDispatchToProps = dispatch => ({
    fetchEvents: () => {
        dispatch(fetchEvents());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
