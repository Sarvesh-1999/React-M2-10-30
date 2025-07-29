import { useRef } from "react";

const UncontrolledForms = () => {
  let emailRef = useRef(""); // {current : undefined}
  let passwordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(user);
  };

  return (
    <div>
      <h1>Uncontrolled Forms</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Email" ref={emailRef} />
        <br />
        <input type="text" placeholder="Password" ref={passwordRef} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledForms;
