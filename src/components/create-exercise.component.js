import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import userStore from "../stores/userStore";
import { loadUsers } from "../actions/userActions";
import { saveExercise } from "../actions/exerciseActions";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateExercises(props) {
  const [exercise, setExercise] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: [],
  });

  const [users, setUsers] = useState(userStore.getUsers());

  useEffect(() => {
    userStore.addChangeListener(onChange);
    if (users.length === 0) loadUsers();
    return () => userStore.removeChangeListener(onChange);
  }, [users.length]);

  function onChange() {
    setUsers(userStore.getUsers());
  }

  function onChangeUsername(e) {
    setExercise({
      ...exercise,
      username: e.target.value,
    });
  }

  function onChangeDescription(e) {
    setExercise({
      ...exercise,
      description: e.target.value,
    });
  }

  function onChangeDuration(e) {
    setExercise({
      ...exercise,
      duration: e.target.value,
    });
  }

  function onChangeDate(date) {
    setExercise({
      ...exercise,
      date: date,
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    saveExercise(exercise);
    props.history.push("/");
  }

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
          <select
            className="form-control"
            required
            value={exercise.username}
            onChange={onChangeUsername}
          >
            {users.length > 0 ? (
              users.map(function (user) {
                return (
                  <option key={user._id} value={user.username}>
                    {user.username}
                  </option>
                );
              })
            ) : (
              <option>Loading</option>
            )}
          </select>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={exercise.description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration (in minutes): </label>
          <input
            type="text"
            className="form-control"
            value={exercise.duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <DatePicker selected={exercise.date} onChange={onChangeDate} />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
