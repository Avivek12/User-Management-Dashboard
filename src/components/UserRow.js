import React from "react";

const UserRow = ({ user, onDelete }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.firstName}</td>
      <td>{user.lastName}</td>
      <td>{user.email}</td>
      <td>{user.department}</td>
      <td>
        <button>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
};

export default UserRow;
