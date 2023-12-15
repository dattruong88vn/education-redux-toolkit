import { useSelector, useDispatch } from "react-redux";
import {
  ordered as orderedIceCream,
  restocked as restockedIceCream,
} from "./iceCreamSlice";

export const IceCreamView = () => {
  const numberOfIceCreams = useSelector(
    (state) => state.iceCream.numberOfIceCreams
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of ice creams: {numberOfIceCreams} </h2>
      <button
        onClick={() => {
          dispatch(orderedIceCream());
        }}
      >
        Order Ice Cream
      </button>
      <button
        onClick={() => {
          dispatch(restockedIceCream(3));
        }}
      >
        Restock Ice Cream
      </button>
    </div>
  );
};
