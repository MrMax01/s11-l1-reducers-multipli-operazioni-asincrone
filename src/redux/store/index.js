import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteJobReducer from "../reducer/favoriteJobReducer";

const rootReducer = combineReducers({
  favoriteList: favoriteJobReducer,
});
export default configureStore({
  reducer: rootReducer,
});
