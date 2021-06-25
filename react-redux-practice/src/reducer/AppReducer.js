const initialState = {
  counter: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      return { ...state, counter: state.counter + 1 };
    case "REMOVE_COUNTER":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};