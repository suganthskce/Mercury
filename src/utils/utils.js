
import Cookie from "react-cookies";
import jwtDecode from "jwt-decode";
import _ from 'lodash';
import { notify } from 'react-notify-toast';
import moment from "moment";
import config from './../config/envconfig';


export const getUserInfoFromJwt = () => {
    const jwtToken = getAuthorizedToken();
    if (!_.isEmpty(jwtToken) && jwtToken != 'undefined') {
        const decodedJwtToken = jwtDecode(jwtToken.replace("Bearer ", ""));
        return JSON.parse(decodedJwtToken["sub"]);
    }
    return null;
};

/**
 * Return the JWT Bearer token
 */
export const getAuthorizedToken = (id = 'uuid') => {
    return Cookie.load(id);
};

// saves token to cookie
export const saveToCookie = (token, removeOld) => {
    const decodeJWT = jwtDecode(token.replace("Bearer ", ""));
    const { exp = "" } = decodeJWT;
    const expires = new Date((exp - 300) * 1000);
    const { cookieDomain = '' } = config;
    Cookie.save("uuid", token, { path: "/", expires, domain: cookieDomain });
    if (removeOld) Cookie.remove(removeOld, { path: '/', domain: cookieDomain });
};

/**
 * @description it is specific to show notification toaster
 * @param message
 */
export const errorToaster = (msg, timePeriod, msgType) => {
    if (msgType)
        notify.show(msg, msgType, timePeriod ? timePeriod : 4000);
    else
        notify.show(msg, "error", timePeriod ? timePeriod : 4000);
}

export const transformDate = (date, oldFormat, newFormat) => {
    if (date) {
        return moment(date, oldFormat).format(newFormat);
    }
}

export default {
    getUserInfoFromJwt, errorToaster,
    getAuthorizedToken,
    saveToCookie, transformDate
};
