import React, { useState, useMemo, useCallback } from "react";
import MemoChild from "./MemoChild";

const MemoExample = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const double = () => {
    console.log("Double Func");
    return add * 2;
  };

  //! RETURNS MEMOIZED VALUE : PERFORMANCE OPTIMIZATION HOOK
  let memoizedValue = useMemo(() => {
    console.log("Double Func");
    return add * 2;
  }, [add]);

  const display = () => {
    console.log("I am display");
  };

  //! RETURNS MEMOIZED FUNCTION : PERFORMANCE OPTIMIZATION HOOK
  const memoizedFunc = useCallback(() => {
    console.log("I am display");
  }, []);

  return (
    <div>
      <h1>MemoExample</h1>
      <hr />
      <h1>Addition: {add}</h1>
      <button onClick={() => setAdd(add + 1)} className="bg-green-400">
        increment
      </button>
      <hr />
      <h1>Substraction: {minus}</h1>
      <button onClick={() => setMinus(minus - 1)} className="bg-red-400">
        decrement
      </button>
      <hr />
      <h1>Double: {memoizedValue}</h1>

      <hr />

      <MemoChild display={memoizedFunc} />
    </div>
  );
};

export default MemoExample;
