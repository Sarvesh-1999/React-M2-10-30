import { useContext } from "react";
import { GlobalContext } from "./Context2";

const ChildZ = () => {
  let val = useContext(GlobalContext);

  return (
    <div>
      <h1>ChildZ {val}</h1>
    </div>
  );
};
export default ChildZ;
