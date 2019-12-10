import { ADD_ITEM } from '../constants'
const InitialState = [
    {
        id: 1,
        name: 'name',
        address: 'address',
        owner: 'owner',
        isType: true,
        activity: true,
        text:'test'
    },
];
const addNewItem = (state = InitialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [
                ...state, {
                    text:action.text,
                    id:action.id,
                    name:action.name,
                    address:action.address,
                    owner:action.owner,
                    isType:action.isType,
                    isActivity:action.isActivity,
                }
            ]
        default:
            return state
    }
}
export default addNewItem;