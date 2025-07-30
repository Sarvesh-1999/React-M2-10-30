import React, { useState } from "react";

const ControlledForms2 = () => {
  const [signupUser, setSignupUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setSignupUser({...signupUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupUser);
  };

  return (
    <div>
      <h1>Controlled Forms 2</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          value={signupUser.username}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={signupUser.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          value={signupUser.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledForms2;

