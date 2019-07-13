
const defaultState = {
    eventList: []
};
export default function events(state = defaultState, action) {

    switch (action.type) {

        case "FETCH_EVENT_RESULTS": {
            const { payload = [] } = action;
            const { events = [] } = payload;
            return {
                ...state,
                eventList: events
            };
        }
    }

    return state;
}