import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import exerciseStore from "../stores/exerciseStore";
import { loadExercises, deleteExercise } from "../actions/exerciseActions";

const Exercise = (props) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <button className="btn btn-success">
        <Link to={"/edit/" + props.exercise._id}>edit</Link>
      </button>
      {" | "}
      <button
        className="btn btn-danger"
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        delete
      </button>
    </td>
  </tr>
);

export default function ExercisesList() {
  const [exercises, setExercises] = useState(exerciseStore.getExercises());

  useEffect(() => {
    exerciseStore.addChangeListener(onChange);
    if (exercises.length === 0) loadExercises();
    return () => exerciseStore.removeChangeListener(onChange); // cleanup on unmount
  }, [exercises.length]);

  function onChange() {
    setExercises(exerciseStore.getExercises());
  }

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((currentexercise) => {
            return (
              <Exercise
                key={currentexercise._id}
                exercise={currentexercise}
                deleteExercise={deleteExercise}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
