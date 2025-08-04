import { useEffect, useState } from "react";

const FetchAPI = () => {
  const [users, setUsers] = useState([]);

  async function getUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data); //[{},{},...]
    setUsers(data); // storing users data in state
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>FetchAPI - useEffect Hook</h1>
      {users.map((user) => {
        return (
          <div>
            {/* <img src={user.avatar_url} alt="" height={100} width={100} /> */}
            <h2>{user.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default FetchAPI;
