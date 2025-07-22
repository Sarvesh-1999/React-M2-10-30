import { useContext } from "react";
import { myContextStore } from "./Context1";

const ChildB = () => {

  let val =   useContext(myContextStore)

  return (
    <div>
      <h1>ChildB {val}</h1>
    </div>
  );
};

export default ChildB;
