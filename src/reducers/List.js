import {CHANGE_FILTER, CLEAR_FILTER, EDIT_ITEM, REMOVE_ITEM} from '../actions/actionTypes';
import shortid from 'shortid';


const initialState = {
    items: [
        {id: shortid.generate(), name: 'Замена стекла', price: 21000},
        {id: shortid.generate(), name: 'Замена дисплея', price: 25000}
    ],
    filter: ''
};

export default function ListReducer(state = initialState, action) {

    switch (action.type) {
        case EDIT_ITEM:
            const {name, price, id } = action.payload;
            return (id) ? 
                {...state, items: state.items.map(item => (item.id === id) ? {...item, name, price: Number(price)} : item)} : 
                {...state, items: [...state.items, {id: shortid.generate(), name, price: Number(price)}]}
        case REMOVE_ITEM:
            return {...state, items: state.items.filter(item => item.id !== action.payload)};
        case CHANGE_FILTER: 
            return {...state, filter: action.payload}
        case CLEAR_FILTER:
            return {...state, filter: ''}
        default:
            return state;
    }
}
