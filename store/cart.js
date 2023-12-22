// store/cart.js

export const state = () => ({
  cartItems: [],
});

export const mutations = {
  addItemToCart(state, item) {
    state.cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    console.log('cartItems => ', state.cartItems)
  },
  setCartItems(state, storedCartItems) {
    state.cartItems = [...state.cartItems, ...storedCartItems];
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  },
  removeItemFromCart(state, itemId) {
    state.cartItems = state.cartItems.filter(item => item.isbn13 !== itemId);
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  },
  clearCart(state) {
    state.cartItems = [];
    localStorage.removeItem('cartItems');
  },
  loadCartFromLocalStorage(state) {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      state.cartItems = JSON.parse(storedCartItems);
    }
  },
};

export const actions = {
  addItem({ commit }, item) {
    commit('addItemToCart', item);
  },
  removeItem({ commit }, itemId) {
    commit('removeItemFromCart', itemId);
  },
  clearCart({ commit }) {
    commit('clearCart');
  },
  loadCart({ commit }) {
    commit('loadCartFromLocalStorage');
  },
  nuxtServerInit({ dispatch }) {
    dispatch('loadCart');

  },
  initCart({ commit }, storedCartItems) {
    commit('setCartItems', storedCartItems);
  },
};

export const getters = {
  cartItemCount: state => state.cartItems.length,
  cartItems: state => state.cartItems,
  cartTotalPrice: (state) => {
    const totalPrice = state.cartItems.reduce((total, item) => {
      return total + (item.price * item.count);
    }, 0);
    return Number(totalPrice.toFixed(2));
  },
};
