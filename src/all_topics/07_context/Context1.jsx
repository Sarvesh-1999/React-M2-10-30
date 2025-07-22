import { createContext } from "react";
import ParentA from "./ParentA";

export const myContextStore = createContext();

const Context1 = () => {
  let data = "Hiii";

  return (
    <div>
      <myContextStore.Provider value={data}>
        <ParentA />
      </myContextStore.Provider>
    </div>
  );
};

export default Context1;
