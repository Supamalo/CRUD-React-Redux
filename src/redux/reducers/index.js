import { combineReducers } from 'redux';
import addNewItem from './addNewItem.js'
import removeItem from './removeItem.js'
import editItem from './editItem.js'

export default combineReducers({
    new:addNewItem,
    del:removeItem,
    edit:editItem
});