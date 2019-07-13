import axios from "axios";
import { isEmpty } from 'lodash';
import ApiConfig from "./../config/apiconfig";
import ServerConfig from "./../config/serverConfig";
import { getAuthorizedToken, saveToCookie } from "./../utils/utils";
import Cookie from "react-cookies";
import { detect } from 'detect-browser';

/**
 * It will build the Req data for the external API according to GET and POST method
 * @params Options
 * @return JSON
 */
const _buildReqData = options => {
    const { content = {}, api = "", extraHeaders = {}, urlAppend = '' } = options;
    const apiDetail = ApiConfig[api];
    const { server = "rms_srv", url, method } = apiDetail;
    const { protocol, server: apiServer } = ServerConfig[server];
    const baseUrl = `${protocol}://${apiServer}`;
    const apiUrl = `${baseUrl}${url}${urlAppend}`;
    let postData = {};
    if (method == "POST") {
        postData = setPostData(content);
    }
    return {
        url: apiUrl,
        method: apiDetail.method,
        headers: extraHeaders ? { ...setAuthorizationHeader(), ...extraHeaders } : setAuthorizationHeader(),
        ...postData
    };
};

/**
 * It will set the POST data for the request
 * @param content
 * @return JSON
 */
const setPostData = content => {
    return {
        data: content
    };
};

/**
 * It will set the Authorization Header for the Request
 * @return JSON
 */
const setAuthorizationHeader = () => {
    const authorizationToken = getAuthorizedToken();
    const browser = detect();
    return {
        "browserName": browser.name,
        "browserVersion": browser.version,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: authorizationToken,
    };
};

/**
 * It will set the JWT Cookie if receive in the response header
 */
const setJwtCookie = (headers) => {
    const { authorization = "" } = headers;

    if (!isEmpty(authorization) && typeof authorization == "string")
        saveToCookie(authorization);
};

/**
 * @description redirects to desired URL
 * @param url
 */
const redirectToApi = url => {
    window.location.href = url;
}

/**
 * This function will sanitize the response before sending it to client. Also it will handle the error scenarios
 * @return JSON
 */
const sanitizeResponse = (response = {}) => {
    const { data = {}, headers = {} } = response;
    //setJwtCookie(headers);
    try {
        const { status = {}, errors } = data;
        const { success = false } = status;
        if (success) {
            const { redirectionurl = '' } = headers;
            if (redirectionurl) { redirectToApi(redirectionurl); return; }
            if (typeof data !== "object" || isEmpty(data)) {
                //Log Error
            }
            return data;
        } else {
            let errorData = {};
            if (typeof data !== "object" || isEmpty(data)) {
                const errCode = navigator.onLine ? "502" : "001";
                let customError = [{ errCode: errCode }];
                errorData.error = true;
                errorData.errors = customError;
                return errorData;
            }
            errorData = Object.assign({}, data);
            errorData.error = true;
            setTimeout(() => {
                if (!isEmpty(data.errors) && data.errors[0].errCode == "403") {
                    // const cookieDomain = 'localhost';
                    // Cookie.remove("uuid", { path: '/', domain: cookieDomain });
                    // Cookie.remove("SBT", { path: '/', domain: cookieDomain });
                    // sessionStorage.clear();
                    // alert("WSJSH");
                    // window.location.href = '/remainder/login/';
                }
            }, 2000)
            console.log("errorData", errorData);
            return errorData;
            //handle false condition like 403, 400, 500, 502
        }
    } catch (e) {
        //catch exception and log error
        let errorData = {};
        const errCode = navigator.onLine ? "100" : "001";
        let customError = [{ errCode: errCode }];
        errorData.error = true;
        errorData.errors = customError;
        return errorData;
    }
};

const ExternalApiRequest = options => {
    const reqData = _buildReqData(options);
    return axios(reqData).then(responseData => {
        return sanitizeResponse(responseData);
    }).catch(err => {
        return sanitizeResponse(err.response);
    });
};

export default ExternalApiRequest;
