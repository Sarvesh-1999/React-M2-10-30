const Button = ({ setCartCount }) => {
    
  const updateCart = () => {
    setCartCount((prevState) => prevState + 1);
  };

  return <button onClick={updateCart}>Add to Cart</button>;
};

export default Button;
