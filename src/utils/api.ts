import axios from "axios";
import type { FormData } from "../components/Contact/Contact";

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export const submitData = (data: FormData) => {
  return axios
    .post(apiUrl, data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("Data successfully submitted:", response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error submitting data:", error);
      throw error;
    });
};
