import React, { useState, useMemo } from "react";

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  //   function doubleCount(){
  //     console.log("Double count func");
  //     return count*2
  //   }

  //! PERFORMANCE OPTIMZATION HOOK WHICH RETURNS MEMOIZED VALUE
  let doubleCount = useMemo(() => {
    console.log("Double count func");
    return count * 2;
  }, [count]);

  return (
    <div>
      <h1 className="text-center font-semibold">Learn useMemo Hook</h1>
      <hr />
      <input
        type="text"
        className="border border-gray-500 rounded w-[70%] block mx-auto my-3 px-3"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h2 className="text-center">Counter : {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-400 px-3 py1 rounded block mx-auto"
      >
        Increment
      </button>

<h2 className="text-center">
Double Count: {doubleCount}
</h2>
    </div>
  );
};

export default MemoExample;
