const getDispatchData = (response = {}) => {
    let type = "USER_LOGIN_SUCCESS";
    if ((Object.keys(response).length > 0 && response.error) || !response.status.success) {
        type = "USER_LOGIN_FAILURE";
    }
    return {
        type,
        payload: response
    };
};

export { getDispatchData };
