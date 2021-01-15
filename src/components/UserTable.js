import React from "react";

const UserTable = (props) => {
  return (
    <div className="col-12 col-lg-5 p-2  ">
      <h1>List User</h1>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button
                    onClick={() => props.editRow(user)}
                    className="btn btn-primary me-md-2"
                    type="button"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => props.deleteUser(user.id)}
                    className="btn btn-danger"
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
