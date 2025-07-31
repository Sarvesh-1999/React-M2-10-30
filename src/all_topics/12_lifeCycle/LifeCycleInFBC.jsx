import { useEffect, useRef, useState } from "react";

const LifeCycleInFBC = () => {
  const [count, setCount] = useState(0);
  const initialRender = useRef(true); // {current : true}

  useEffect(() => {
    console.log("Component Mounted");
    let intervalID = setInterval(() => {
      console.log("API CALL");
    }, 2000);

    return () => {
      console.log("Component Unmounted");
      clearInterval(intervalID)
    };
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    console.log("Component Updated");
  }, [count]);

  return (
    <div>
      <h1>LifeCycleInFBC</h1>
      <h2>Counter = {count}</h2>
      <button onClick={() => setCount(count + 1)}>UPDATE</button>
    </div>
  );
};

export default LifeCycleInFBC;
