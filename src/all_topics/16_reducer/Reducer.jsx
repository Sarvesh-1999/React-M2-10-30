import { useReducer } from "react";

let initialState = 0;

function reducerFunc(prevState, action) {
  switch (action.type) {
    case "increment":
      return prevState + 1;

    case "decrement":
      if (prevState > 0) return prevState - 1;

    case "reset":
      return 0;
  }
}
const Reducer = () => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  return (
    <div>
      <h1 className="text-center font-semibold">Learn useReducer</h1>
      <h2>Counter : {state}</h2>
      <button
        className="bg-green-400"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>

      <button
        className="bg-red-400"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>

      <button
        className="bg-yellow-400"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  );
};

export default Reducer;
