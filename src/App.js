import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";
import UserTable from "./components/UserTable";

function App() {
  const usersData = [
    { id: uuidv4(), name: "Tania", username: "floppydiskette" },
    { id: uuidv4(), name: "Craig", username: "siliconeidolon" },
    { id: uuidv4(), name: "Ben", username: "benisphere" },
  ];

  const [users, setUsers] = useState(usersData);

  // add user
  const addUser = (user) => {
    user.id = uuidv4();
    // console.log(user);
    setUsers([...users, user]);
  };

  // elimianr
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // toggle del edit
  const [toggleEdit, setToggleEdit] = useState(false);

  // current user
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    username: "",
  });

  // edit row
  const editRow = (user) => {
    setToggleEdit(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };

  // edit user
  const editUser = (id, data) => {
    setToggleEdit(false);
    setUsers(users.map((user) => (user.id === id ? data : user)));
  };

  return (
    <div className="container">
      <h1 className="my-4">Formulario en React</h1>
      <div className="row">
        {toggleEdit ? (
          <EditUserForm editUser={editUser} currentUser={currentUser} />
        ) : (
          <AddUserForm addUser={addUser} />
        )}

        <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
      </div>
    </div>
  );
}

export default App;
