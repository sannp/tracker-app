import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "https://exercises-tracker.herokuapp.com/api/exercises/";

export function getExercises() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getCourseBySlug(slug) {
  return fetch(baseUrl + "?slug=" + slug)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((courses) => {
        if (courses.length !== 1) throw new Error("Course not found: " + slug);
        return courses[0]; // should only find one course for a given slug, so return it.
      });
    })
    .catch(handleError);
}

export function addExercise(exercise) {
  return fetch(baseUrl + "add", {
    method: "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      ...exercise,
    }),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteExercise(exerciseId) {
  return fetch(baseUrl + exerciseId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
