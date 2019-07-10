import * as R from "ramda";
import getRequestPayload from "./../prehandler/user/userLogin";
import { connector } from "./../connect/event/eventList";
import { getDispatchData } from "./../dekorators/user/userLogin";
import registerConnect from './../connect/user/registerUser';
import getRegisterData from './../dekorators/user/userRegister';

const then = R.curry((f, p) => p.then(f));

const fetchEvents = () => {
    return async dispatch => {
        let response = await connector();
        dispatch({
            type: 'FETCH_EVENT_RESULTS',
            payload: response.payload
        });
    };
};

export {
    fetchEvents
};
