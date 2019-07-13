import { getUserInfoFromJwt, getAuthorizedToken, saveToCookie } from "./../utils/utils";

const defaultState = {
    fetching: false,
    error: null,
    success: null,
    userInfo: JSON.parse(localStorage.getItem("user")) || {},
    userMenu: [],
    submenu: [],
    registerJson: {},
    forgetJson: {},
    otpJson: {},
    topUp: {},
    sbt: '',
    replacedUser: {},
    hideHeader: false
};
export default function user(state = defaultState, action) {

    switch (action.type) {

        case "USER_LOGIN_SUCCESS": {
            const { payload } = action.payload;
            const { userInfo } = payload;
            const { token = '' } = userInfo;
            saveToCookie(token);
            return {
                ...state,
                userInfo: userInfo,
                success: true,
                error: false
            };
        }
        case "USER_LOGIN_FAILURE": {
            let error = action.payload.errors ? action.payload.errors.message : "Something went wrong!";
            let errors = action.payload.errors || [];

            return {
                ...state,
                error: error,
                errors: errors,
                success: false
            };
        }

        case "USER_JWT_UPDATED": {
            const updatedUserInfo = getUserInfoFromJwt();
            const jwtToken = getAuthorizedToken();
            return {
                ...state,
                userInfo: { userInfo: { ...updatedUserInfo, accessToken: jwtToken } }
            };
        }
        case "GET_USERINFO_FROM_JWT": {
            const updatedUserInfo = getUserInfoFromJwt();
            const jwtToken = getAuthorizedToken();
            return {
                ...state,
                userInfo: { userInfo: { ...updatedUserInfo, accessToken: jwtToken } }
            };
        }
        case "USER_MENU_SUCCESS": {
            const userMenu = action.payload;
            const sbt = getAuthorizedToken('SBT');
            return {
                ...state,
                userMenu,
                sbt
            }
        }
        case "USER_SUBMENU_SUCCESS": {
            const submenu = action.payload;
            return {
                ...state,
                submenu
            }
        }
        case "USER_REGISTER_SUCCESS": {
            const registerJson = action.payload;
            return {
                ...state,
                registerJson
            };
        }
        case "USER_REGISTER_FAILURE": {
            const registerJson = action.payload;
            return {
                ...state,
                registerJson
            };
        }
        case "FORGET_PASSWORD_SUCCESS": {
            const forgetJson = action.payload;
            return {
                ...state,
                forgetJson
            };
        }
        case "FORGET_PASSWORD_FAILURE": {
            const forgetJson = action.payload;
            return {
                ...state,
                forgetJson
            };
        }
        case "OTP_SUCCESS": {
            const otpJson = action.payload;
            return {
                ...state,
                otpJson
            };
        }
        case "OTP_FAILURE": {
            const otpJson = action.payload;
            return {
                ...state,
                otpJson
            };
        }
        case "TOP_UP": {
            const topUp = action.payload;
            return {
                ...state,
                topUp
            };
        }
        case "REPLACE_TOKEN": {
            saveToCookie(action.payload, 'SBT');
            const replacedUser = getUserInfoFromJwt();
            return { ...state, replacedUser };
        }
        case "HEADER.HIDE_HEADER": {
            return {
                ...state,
                hideHeader: !state.hideHeader
            }
        }
    }

    return state;
}



// WEBPACK FOOTER //
// ./public/src/reducers/userReducer.js