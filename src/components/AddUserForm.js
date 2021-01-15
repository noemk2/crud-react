import React from "react";

import { useForm } from "react-hook-form";

const AddUserForm = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    //console.log(data);
    props.addUser(data);
    e.target.reset();
  };

  return (
    <div className="col-12 col-lg-5 p-2 me-md-5 ">
      <h1>Add User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            name="name"
            ref={register({
              required: { value: true, message: "campo requerido" },
            })}
          />
        </div>
        <div>{errors?.name?.message}</div>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="username"
            name="username"
            ref={register({
              required: { value: true, message: "campo requerido" },
            })}
          />

          <div>{errors?.username?.message}</div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
