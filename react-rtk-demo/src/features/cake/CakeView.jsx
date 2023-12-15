import { useSelector, useDispatch } from "react-redux";

import {
  ordered as orderedCake,
  restocked as restockedCake,
} from "./cakeSlice";

export const CakeView = () => {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes: {numberOfCakes}</h2>
      <button onClick={() => dispatch(orderedCake())}>Order Cake</button>
      <button onClick={() => dispatch(restockedCake(3))}>Restock Cake</button>
    </div>
  );
};
