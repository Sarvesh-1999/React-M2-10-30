const Hoc = (Wrapper) => {
  let data = "Hello React";

  return () => {
    return <Wrapper data={data} />;
  };
  
};

export default Hoc;
