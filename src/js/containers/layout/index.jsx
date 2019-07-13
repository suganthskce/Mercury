import React, { Component } from 'react';
import { connect } from "react-redux";
import './style.css';
import Header from './../../components/header/index.jsx';
import LeftNav from './../../components/leftnav/index.jsx';
import Footer from './../../components/footer/index.jsx';

class Layout extends Component {
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
