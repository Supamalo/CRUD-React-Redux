import { ADD_ITEM, DEL_ITEM, EDIT_ITEM } from '../constants';
export const AddNewItem = () => {
  return {
    type: ADD_ITEM,
      id: 1,
      name: 'name',
      address: 'address',
      owner: 'owner',
      isType: true,
      isActivity: true,
      text:'test'
  };
};
export const RemoveItem = () => {
  return {
    type: DEL_ITEM,
    payload: 'ddd'
  };
};
export const EditItem = () => {
  return {
    type: EDIT_ITEM,
    payload: 'ddd'
  };
};