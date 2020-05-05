import { EventEmitter } from "events";
import Dispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _exercises = [];

class ExerciseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getExercises() {
    return _exercises;
  }
}

const store = new ExerciseStore();

Dispatcher.register((action) => {
  switch (action.actionType) {
    case actionTypes.LOAD_EXERCISES:
      _exercises = action.exercises;
      store.emitChange();
      break;
    case actionTypes.CREATE_EXERCISE:
      _exercises.push(action.exercise);
      store.emitChange();
      break;
    case actionTypes.DELETE_EXERCISE:
      _exercises = _exercises.filter((item) => item._id !== action.id);
      store.emitChange();
      break;
    default:
    // nothing to do here
  }
});

export default store;
