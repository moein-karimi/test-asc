const INITIAL_STATE = { isLogin: false };

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: !state.isLogin
      };
    default:
      return state;
  }
};

export default loginReducer;
