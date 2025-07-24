const ChildA1 = (props) => {
    console.log(props.children);
    
  return (
    <div>
        <h1>ChildA1 Component</h1>
        {props.children}
    </div>
  )
}

export default ChildA1