
const defaultState = {

};
export default function events(state = defaultState, action) {

    switch (action.type) {

        case "FETCH_EVENT_RESULTS": {
            return {
                ...state,
            };
        }
    }

    return state;
}