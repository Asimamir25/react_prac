import React from "react";

const SliceUser = ({ user }) => {
  return (
    <div>

        <h1>Slice User</h1>
      {user.slice(0,3).map((item, index) => (
        <li>{item.name}</li>
      ))}
    </div>
  );
};

export default SliceUser;
