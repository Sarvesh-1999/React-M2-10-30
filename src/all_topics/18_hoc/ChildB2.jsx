import Hoc from "./Hoc";

const ChildB2 = (props) => {
    console.log(props);
    
  return (
    <div>
      <h1>ChildB2</h1>
    </div>
  );
};

export default Hoc(ChildB2);


