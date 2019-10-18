import React from "react";
import ModalView from './Popup';
import ConfimrationBox from './ConfirmationBox';

const ConfirmBox = props => {
    const {
        onCloseModal, handleConfirm,
        openStatus, reasonEdit, reason = '',
        title = 'Are you Sure?',
        noReasonField = false
    } = props;
    return (
        <ModalView
            openstatus={openStatus}
            onClose={onCloseModal}
            classNames={"modal_container"}
        >
            <div className="main_container">
                <ConfimrationBox
                    title={title}
                    buttons={[
                        {
                            label: 'Cancel',
                            className: 'btn sign_btn',
                            icon: 'fa fa-times',
                            onClick: () => onCloseModal()
                        },
                        {
                            label: 'Confirm',
                            className: 'btn sign_btn cancel-btn-generic',
                            icon: 'fa fa-tick',
                            onClick: () => handleConfirm()
                        }
                    ]}
                    stopLoading={true} />
                {!noReasonField && <textarea className="reason-note" rows="1" placeholder="Add Reason" onChange={reasonEdit} defaultValue={reason}></textarea>}
            </div>
        </ModalView>
    );
}

export default ConfirmBox;
