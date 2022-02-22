import { profileReducer } from "./profile/reducer";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./message/reducer";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist"; 
import storage from "redux-persist/lib/storage";
import { articlesReducer } from "./articles/reducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messagesReducer,
    articles: articlesReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'gbMessanger',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
    persistedReducer, 
    composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);