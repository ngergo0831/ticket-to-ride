import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import {
    playerCountReducer,
    /* gameStateReducer,*/ menuStateReducer,
} from "./reducer";

const rootReducer = combineReducers({
    playerCountReducer,
    /*gameStateReducer,*/ menuStateReducer,
});

const logger = createLogger({
    collapsed: true,
});

export const configureStore = () => {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(logger))
    );
};
