const { createStore } = require("redux");

const CAKE_ORDERED = "CAKE_ORDERED";

const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
};

const initialState = {
  numberOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initial state", store.getState());

const unregister = store.subscribe(() => {
  console.log("update state", store.getState());
});

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());

unregister();