
import Cookie from "react-cookies";
import jwtDecode from "jwt-decode";
import _ from 'lodash';


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
    return `${Cookie.load(id)}`;
};

// saves token to cookie
export const saveToCookie = (token, removeOld) => {
    const decodeJWT = jwtDecode(token.replace("Bearer ", ""));
    const { exp = "" } = decodeJWT;
    const expires = new Date((exp - 300) * 1000);
    const cookieDomain = 'suganth.com';
    Cookie.save("uuid", token, { path: "/", expires, domain: cookieDomain });
    if (removeOld) Cookie.remove(removeOld, { path: '/', domain: cookieDomain });
};


export default {
    getUserInfoFromJwt,
    getAuthorizedToken,
    saveToCookie
};
