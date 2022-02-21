import { profileReducer } from "./profile/reducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./message/reducer";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-thunk"; 
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
    profile: profileReducer,
        chats: chatsReducer,
        messages: messagesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'gbMessanger',
    storage,
}

const persistedReducer = (persistConfig, rootReducer)
export const store = createStore(persistReducer, composeEnhancers(applyMiddleware(thunk)));
export const persistor = persistStore(store)