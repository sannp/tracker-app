import dispatcher from "../appDispatcher";
import * as exerciseApi from "../api/exerciseApi";
import actionTypes from "./actionTypes";

export function saveExercise(exercise) {
  return exerciseApi.addExercise(exercise).then((exercise) => {
    // Hey dispatcher, go tell all the stores that a course was just created.
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_EXERCISE,
      exercise: exercise.data,
    });
  });
}

export function loadExercises() {
  return exerciseApi.getExercises().then((exercises) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_EXERCISES,
      exercises,
    });
  });
}

export function deleteExercise(id) {
  return exerciseApi.deleteExercise(id).then(() => {
    dispatcher.dispatch({
      actionType: actionTypes.DELETE_EXERCISE,
      id: id,
    });
  });
}
