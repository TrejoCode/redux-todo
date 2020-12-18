/**
 * @version 1.0.0
 * @desscription Global state storage
*/

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "redux/reducer";

export const store = createStore(rootReducer, applyMiddleware(thunk));
