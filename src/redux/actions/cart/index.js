import { TYPES } from "redux/types";

export const toggleCartHidden = () => ({ type: TYPES.TOGGLE_CART_HIDDEN });

export const addItem = item => ({ type: TYPES.ADD_ITEM, item });
