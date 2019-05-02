const INITIAL_STATE = {
  value: 0,
  title: "",
};

export const basicReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    case "CHANGE_TITLE":
      return { ...state, title: action.title };
    default:
      return state;
  }
};
