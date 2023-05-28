import axios from "axios";

export async function getPlaces() {
  try {
    return await axios.get("https://jsonplaceholder.typicode.com/posts");
  } catch (error) {
    return error;
  }
}
