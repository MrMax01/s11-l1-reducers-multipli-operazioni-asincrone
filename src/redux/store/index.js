import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoriteJobReducer from "../reducer/favoriteJobReducer";

const rootReducer = combineReducers({
  favoriteList: favoriteJobReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
