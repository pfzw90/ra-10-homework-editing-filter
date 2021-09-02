import { createStore, combineReducers } from "redux";
import ListReducer from '../reducers/List';
import editItemReducer from '../reducers/EditItem';
import filterReducer from "../reducers/Filter";
import addItemReducer from "../reducers/AddItem";

const reducer = combineReducers({
    list: ListReducer,
    editItem: editItemReducer,
    addItem: addItemReducer,
    filter: filterReducer
});

const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),);
export default store;