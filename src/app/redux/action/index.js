import {
  ADD_TO_CART,
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  CLEAR_CART
} from "./constants/index";

export const addToCart = item => {
  return {
    type: ADD_TO_CART,
    item
  };
};

export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    id
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART
  };
};

export const increaseAmount = id => {
  return {
    type: INCREASE_AMOUNT,
    id
  };
};

export const decreaseAmount = id => {
  return {
    type: DECREASE_AMOUNT,
    id
  };
};
