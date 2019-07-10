import { persistCombineReducers } from 'redux-persist'
import user from "./user";
import events from "./events";

import storage from 'redux-persist/es/storage'
const storeConfig = {
    key: 'root',
    storage: storage,
    debug: false,
    whitelist: []
};
const allReducers = persistCombineReducers(storeConfig, {
    user: user,
    events: events,
});


export default allReducers;