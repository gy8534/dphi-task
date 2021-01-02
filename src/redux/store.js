import { createStore } from "redux";
import pageReducer from "./page/pageReducer";

const store = createStore(pageReducer);

export default store;
