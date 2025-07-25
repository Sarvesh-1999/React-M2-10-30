import React, { useState } from "react";

const ControlledForms1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted");
    
    let userData = {email,password}
    console.log(userData);

    setEmail("")
    setPassword("")
  }

  return (
    <div>
      <h1>Learn Controlled Forms 1</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Email :</label>
        <input type="text" name="" id="" value={email} onChange={handleEmail} />

        <br />
        <br />

        <label htmlFor="">Password :</label>
        <input type="text" name="" id="" value={password} onChange={handlePassword} />

        <br />
        <br />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default ControlledForms1;
