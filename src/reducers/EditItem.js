import { CHANGE_ITEM_FIELD, LOAD_ITEM_DATA, CLEAR_DATA, REMOVE_ITEM } from "../actions/actionTypes";

const initialState = {
    name: '',
    price: '',
    id: null
    };

export default function editItemReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_ITEM_FIELD:
            let {name, value} = action.payload;
            return {...state, [name]: value};
        case LOAD_ITEM_DATA: 
            const  item  = action.payload;
            return {...item};
        case CLEAR_DATA:
            return {...initialState}
        case REMOVE_ITEM: 
            return (action.payload === state.id) ? {...initialState} : state
        default:
            return state;
    }
}