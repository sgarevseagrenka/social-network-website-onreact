import { combineReducers, createStore } from "redux";
import profile_reduser from "./profile_reduser";
import messages_reduser from "./messages_reduser";
let redusers = combineReducers({
    profile_page: profile_reduser,
    messages_page: messages_reduser
})
let store = createStore(redusers);

export default store;