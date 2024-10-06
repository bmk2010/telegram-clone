import { createStore } from "redux";
import AuthReducer from "./Root";

const store = createStore(AuthReducer)

export default store