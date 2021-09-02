import { EDIT_ITEM, REMOVE_ITEM, CHANGE_ITEM_FIELD, LOAD_ITEM_DATA, CLEAR_DATA, CHANGE_FILTER, CLEAR_FILTER } from './actionTypes';

export function changeItem(name, price, id = null) {
    return {type: EDIT_ITEM, payload: {name, price, id}};
}
export function removeItem(id) {
    return {type: REMOVE_ITEM, payload: id};
}
export function changeItemField(name, value) {
    return {type: CHANGE_ITEM_FIELD, payload: {name, value}}
}
export function loadItemData(name, price, id) {
    return {type: LOAD_ITEM_DATA, payload: {name, price, id}}
}
export function clearData() {
    return {type: CLEAR_DATA, payload: {}}
}
export function changeFilter(value) {
    return {type: CHANGE_FILTER, payload: value}
}
export function clearFilter() {
    return {type: CLEAR_FILTER, payload: {}}
}