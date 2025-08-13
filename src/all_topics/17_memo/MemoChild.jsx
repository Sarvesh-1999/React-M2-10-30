import React from "react";

const MemoChild = (props) => {
    
  console.log("I am MemoChild");

  return <div>MemoChild</div>;
};

export default React.memo(MemoChild);
