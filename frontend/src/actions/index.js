// Action (types)
export const set_shopping_cart_info = 'set_shopping_cart_info';
export const update_amount = 'update_amount';
export const remove_item = 'remove_item';
export const set_user = 'set_user';

// Action creators
export const setShoppingCartInfo = (shoppingCartItem) => {
  return {
    type: set_shopping_cart_info,
    payload: shoppingCartItem,
  };
};

export const updateAmount = (amount) => {
  return {
    type: update_amount,
    payload: amount,
  };
};

export const removeItem = (item) => {
  return {
    type: remove_item,
    payload: item,
  };
};

export const setUser = (user) => {
  return {
    type: set_user,
    payload: user,
  };
};
