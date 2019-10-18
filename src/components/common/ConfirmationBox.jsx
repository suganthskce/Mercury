import React, { Component } from "react";
import './ConfirmationBox.less';
import PreloaderContainer from "components/Common/PreloaderContainer";

class ConfirmationBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    handleClickButton = button => {
        if (!this.state.loading || this.props.stopLoading) {
            this.setState({
                loading: true
            });
            button.onClick();
        }
    }

    render() {
        const { title = "", buttons = [], stopLoading = false } = this.props;
        const { loading } = this.state;
        return (
            <div className="body_manage dash-padding dashboard__main__content">
                {
                    (loading && !stopLoading) ?
                        <PreloaderContainer /> :
                        <div>
                            <div className="swal2-icon swal2-warning pulse-warning"> !</div>
                            <h4 className="text-center">{title}</h4>
                            <div className="row clearfix text-center">
                                {buttons.map((button, i) => {
                                    const { className = '', label = '', icon = '' } = button;
                                    return (
                                        <button
                                            key={i}
                                            className={className}
                                            onClick={() => this.handleClickButton(button)}
                                        >
                                            {label} <i className={icon}></i>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                }
            </div>
        );
    }
}

export default ConfirmationBox;