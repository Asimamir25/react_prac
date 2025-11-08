import React from "react";

const AllUser = ({ user }) => {
  return (
    <div>
        <h1>All User</h1>
      {user.map((item, index) => (
        <li>{item.name}</li>
      ))}
    </div>
  );
};

export default AllUser;
