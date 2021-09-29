import {
  set_shopping_cart_info,
  update_amount,
  remove_item,
} from '../actions/index';

// On remove_item:
// shoppingCartInfoReducer remove the given product (action.payload) from the shopping cart items array and update the total price
// On update_amount:
// shoppingCartInfoReducer update the amount of a given product(action.payload) from the shopping cart items array
// and the total price
// On set_shopping_cart_info:
// shoppingCartInfoReducer add a new product to the shopping cart items array and update the total price
const setShoppingCartInfoReducer = (
  state = {
    shoppingCartItems: [],
  },
  action
) => {
  let totalPrice = undefined;
  let tempState = state.shoppingCartItems.slice();
  let isExist = false;
  switch (action.type) {
    case remove_item:
      tempState.splice(tempState.indexOf(action.payload), 1);
      totalPrice = tempState.reduce((accumulator, currentItem) => {
        return accumulator + parseFloat(currentItem.price) * currentItem.amount;
      }, 0);
      return {
        totalPrice: totalPrice,
        shoppingCartItems: tempState,
      };
    case update_amount:
      isExist = tempState.find((shoppingCartItem) => {
        return shoppingCartItem._id === action.payload._id;
      });
      tempState.forEach((shoppingCartItem) => {
        if (shoppingCartItem._id === action.payload._id) {
          shoppingCartItem.amount = parseInt(action.payload.amount);
        }
      });
      totalPrice = tempState.reduce((accumulator, currentItem) => {
        return accumulator + parseFloat(currentItem.price) * currentItem.amount;
      }, 0);
      return {
        totalPrice: totalPrice,
        shoppingCartItems: tempState,
      };
    case set_shopping_cart_info:
      isExist = tempState.find((shoppingCartItem) => {
        return shoppingCartItem._id === action.payload._id;
      });
      if (isExist === undefined) {
        tempState.push({
          _id: action.payload._id,
          name: action.payload.name,
          price: action.payload.price,
          amount: action.payload.amount,
        });
      } else {
        tempState.forEach((shoppingCartItem) => {
          if (shoppingCartItem._id === action.payload._id) {
            shoppingCartItem.amount += 1;
          }
        });
      }
      totalPrice = tempState.reduce((accumulator, currentItem) => {
        return accumulator + parseFloat(currentItem.price) * currentItem.amount;
      }, 0);
      return {
        totalPrice: totalPrice,
        shoppingCartItems: tempState,
      };
    default:
      return state;
  }
};
export default setShoppingCartInfoReducer;
