const { applyMiddleware } = require("redux");
const { createStore, bindActionCreators, combineReducers } = require("redux");
const reduxLogger = require("redux-logger");

const logger = reduxLogger.createLogger();

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICE_CREAM_ORDERED = "ICE_CREAM_ORDERED";
const ICE_CREAM_RESTOCKED = "ICE_CREAM_RESTOCKED";

const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
};

const restockCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
};

const orderIceCream = () => {
  return {
    type: ICE_CREAM_ORDERED,
    quantity: 1,
  };
};

const restockIceCream = (qty = 1) => {
  return {
    type: ICE_CREAM_RESTOCKED,
    payload: qty,
  };
};

const initialCakeState = {
  numberOfCakes: 10,
};
const initialIceCreamState = {
  numberOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };

    case CAKE_RESTOCKED: {
      return {
        ...state,
        numberOfCakes: state.numberOfCakes + action.payload,
      };
    }

    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICE_CREAM_ORDERED:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };

    case ICE_CREAM_RESTOCKED: {
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams + action.payload,
      };
    }

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state", store.getState());

const unregister = store.subscribe(() => {
  //   console.log("update state", store.getState());
});

const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);

actions.orderIceCream();
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(3);

unregister();
