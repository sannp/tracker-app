import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "https://exercises-tracker.herokuapp.com/api/users/";

export function getUsers() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function addUser(user) {
  return fetch(baseUrl + "add", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      username: user,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}
