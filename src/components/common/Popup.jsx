import React, { Component } from 'react';
import Modal from "react-responsive-modal";

class ModalView extends Component {

    onCloseModal = () => {
        this.props.onClose()
    };

    render() {
        const { openstatus, classNames } = this.props;
        return (
            <Modal classNames={{ modal: classNames }} open={openstatus} onClose={this.onCloseModal} center>
                {/* <h2>{this.props.title}</h2> */}
                {this.props.children}
            </Modal>
        );
    }
}
export default ModalView;
