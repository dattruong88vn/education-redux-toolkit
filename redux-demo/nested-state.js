const { createStore } = require("redux");
const produce = require("immer").produce;

const initialState = {
  name: "Thanh Dat",
  address: {
    street: "Thong Nhat",
    city: "HCMC",
    district: "Go Vap",
  },
};

const UPDATE_STREET = "UPDATE_STREET";

const updateStreet = (str) => {
  return {
    type: UPDATE_STREET,
    payload: str,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STREET:
      // default
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };

      // immer
      return produce(state, (draft) => {
        draft.address.street = "Quang Trung";
      });

    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("initial state", store.getState());

const unregister = store.subscribe(() => {
  console.log("update state", store.getState());
});

store.dispatch(updateStreet("Quang Trung"));

unregister();
