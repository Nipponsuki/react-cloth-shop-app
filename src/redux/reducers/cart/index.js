import { TYPES } from "redux/types";

const initialState = {
  hidden: true
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;