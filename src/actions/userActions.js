import dispatcher from "../appDispatcher";
import * as userApi from "../api/userApi";
import actionTypes from "./actionTypes";

export function addUser(user) {
  return userApi.addUser(user).then((user) => {
    dispatcher.dispatch({
      actionType: actionTypes.ADD_USER,
      user,
    });
  });
}

export function loadUsers() {
  return userApi.getUsers().then((users) => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_USERS,
      users,
    });
  });
}
