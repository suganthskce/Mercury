import { persistCombineReducers } from 'redux-persist'
import user from "./user";

import storage from 'redux-persist/es/storage'
const storeConfig = {
    key: 'root',
    storage: storage,
    debug: false,
    whitelist: []
};
const allReducers = persistCombineReducers(storeConfig, {
    user: user,
});


export default allReducers;