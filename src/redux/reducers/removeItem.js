const removeItem = (state = 0, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return state - 1;
  default:
      return state
}
}
export default removeItem;