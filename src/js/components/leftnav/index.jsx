import React, { Component } from 'react';
import { connect } from "react-redux";
import './style.css';

class LeftNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navList: ['Events', 'Calender View']
        };
    }

    componentWillMount() {
    }

    componentWillReceiveProps(newProps) {
    }

    render() {
        const { navList = [] } = this.state;
        return (
            <div class="leftNav">
                <ul class="leftNav_list_wrapper">
                    {navList.map(data => {
                        return (
                            <li class="leftNav_list">
                                {data} </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LeftNav);
