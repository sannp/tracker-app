import React, { useState } from "react";
import { addUser } from "../actions/userActions";

export default function CreateUsers(props) {
  const [user, setUser] = useState("");

  function onChangeUsername(e) {
    setUser(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addUser(user);
    props.history.push("/");
  }

  return (
    <div>
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <input
            type="text"
            className="form-control"
            required
            value={user}
            onChange={onChangeUsername}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
