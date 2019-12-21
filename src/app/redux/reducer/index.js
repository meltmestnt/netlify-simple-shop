import {
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  REMOVE_ITEM,
  ADD_TO_CART,
  CLEAR_CART
} from "./../action/constants";

const increaseAm = ({ cart }, action) => {
  return cart.map(item => {
    let amount = item.amount;
    console.log(action);
    return item.id === action.id ? { ...item, amount: amount + 1 } : item;
  });
};

const decreaseAm = ({ cart }, action) => {
  return cart.map(item =>
    item.id === action.id
      ? {
          ...item,
          amount: item.amount > 1 ? item.amount - 1 : 1
        }
      : item
  );
};

const cart = (
  state = {
    cart: []
  },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      let { id, name, detail, price, size, sex, image, inStock } = action.item;
      return {
        cart: [
          ...state.cart,
          {
            id,
            name,
            detail,
            price,
            size,
            sex,
            image,
            inStock,
            amount: 1
          }
        ]
      };
      break;
    case CLEAR_CART:
      return { cart: [] };
      break;
    case REMOVE_ITEM:
      return { cart: state.cart.filter(item => item.id !== action.id) };
      break;
    case INCREASE_AMOUNT:
      return {
        cart: increaseAm(state, action)
      };
      break;
    case DECREASE_AMOUNT:
      return {
        cart: decreaseAm(state, action)
      };
      break;
    default:
      return state;
  }
};

export default cart;
