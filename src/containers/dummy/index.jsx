
import React, { Component } from 'react';
import { connect } from "react-redux";
import './style.less';
import { bindActionCreators } from "redux";

class Dummy extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div className="body_wrapper">
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
    let actions = bindActionCreators({
    });
    return { actions, dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dummy);
