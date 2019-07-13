import * as R from "ramda";
import { connector } from "./../connect/event/eventList";

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
