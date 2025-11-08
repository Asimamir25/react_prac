import React, { useEffect, useState } from "react";
import AllUser from "./AllUser";
import SliceUser from "./SliceUser";

const UserDashboard = () => {
  const [user, setUser] = useState([]);
  console.log(user)
  useEffect(() => {
    const handleUser = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      setUser(result);
    };
    handleUser()
  },[]);
  return <div>
    <AllUser user={user}/>
    <SliceUser user={user}/>

  </div>;
};

export default UserDashboard;
