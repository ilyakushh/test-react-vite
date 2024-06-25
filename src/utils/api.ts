import type { FormData } from "../components/Contact/Contact";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export const submitData = (data: FormData) => {
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((json) => {
      console.log("Data successfully submitted:", json);
      return json;
    })
    .catch((error) => {
      console.error("Error submitting data:", error);
      throw error;
    });
};
