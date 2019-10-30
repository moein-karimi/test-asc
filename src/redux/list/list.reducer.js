const INITIAL_STATE = { currentList: null };

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_LIST':
      return {
        ...state,
        currentList: action.payload
      };
    default:
      return state;
  }
};

export default listReducer;
