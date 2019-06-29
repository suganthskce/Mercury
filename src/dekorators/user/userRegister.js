const getRegisterData = (response = {}) => {
    const { status = {} } = response;
    const { success = false } = status;
    let type = "USER_REGISTER_SUCCESS";
    if (!success) {
        type = "USER_REGISTER_FAILURE";
    }
    return {
        type,
        payload: response
    };
};

export default getRegisterData;
