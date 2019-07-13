import React, { Component } from 'react';
import { connect } from "react-redux";
import { transformDate } from './../../utils/utils';
import Constants from './../../constants';
class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentWillMount() {
    }

    componentWillReceiveProps = (newProps) => {
    }

    actionHandler = (key) => {
        if (typeof this.props.actionHandler === "function") {
            const { data = {}, actionHandler } = this.props;
            actionHandler(data, key);
        }
    }

    render() {
        const { data = {} } = this.props;
        const { name = '', evtData = '' } = data;
        return (
            <div class="event_container">
                <div class="wrapper">
                    <span class="wrapper_text">
                        {`${name} (${transformDate(evtData, '', Constants.DATE_FORMAT["DD-MM-YYYY"])})`}
                    </span>
                    <div class="actions_container">
                        <i title="Delete" class="fa fa-trash delete" aria-hidden="true" onClick={() => { this.actionHandler("DELETE"); }}></i>
                        <i title="Edit" class="fa fa-edit edit" aria-hidden="true" onClick={() => { this.actionHandler("EDIT"); }}></i>
                        <i title="Send Wishes" class="fa fa-paper-plane send" aria-hidden="true" onClick={() => { this.actionHandler("SEND"); }}></i>
                        <i title="Notify" class="fa fa-bell" aria-hidden="true" onClick={() => { this.actionHandler("NOTIFY"); }}></i>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
    }
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Event);
