import * as R from "ramda";
import getRequestPayload from "./../prehandler/user/userLogin";
import { connector } from "./../connect/user/loginUser";
import { getDispatchData } from "./../dekorators/user/userLogin";
import registerConnect from './../connect/user/registerUser';
import getRegisterData from './../dekorators/user/userRegister';

const then = R.curry((f, p) => p.then(f));

const loginUser = (userInfo = {}) => {
    return async dispatch => {
        let response = await R.pipe(
            getRequestPayload,
            connector,
            then(getDispatchData)
        )(userInfo);

        dispatch({
            type: response.type,
            payload: response.payload
        });
    };
};

const getUserByJwt = () => {
    return {
        type: "GET_USERINFO_FROM_JWT"
    };
};

const registerUser = (data) => {
    return async dispatch => {
        let response = await R.pipe(registerConnect, then(getRegisterData))(data);
        dispatch({
            type: response.type,
            payload: response.payload
        });
    };
};

export {
    loginUser, getUserByJwt,
    registerUser,
};
