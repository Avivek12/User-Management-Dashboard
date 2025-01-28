import React, { useState, useEffect } from "react";
import UserRow from "./UserRow";
import UserForm from "./UserForm";
import userService from "../helper/service";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getUsers().then(setUsers);
  }, []);

  const handleAddUser = (user) => {
    userService.addUser(user).then((newUser) => {
      setUsers([...users, newUser]);
    });
  };

  const handleDeleteUser = (id) => {
    userService.deleteUser(id).then(() => {
      setUsers(users.filter((u) => u.id !== id));
    });
  };

  return (
    <div>
      <UserForm onSave={handleAddUser} />
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} onDelete={() => handleDeleteUser(user.id)} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
