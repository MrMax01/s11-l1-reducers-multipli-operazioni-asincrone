import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteJobReducer from "../reducer/favoriteJobReducer";

const rootReducer = combineReducers({
  favoriteJob: favoriteJobReducer,
});

export default configureStore({
  reducer: rootReducer,
});
