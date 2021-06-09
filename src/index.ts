import { GlideFetch } from "./GlideFetch";

try {
  const response = new GlideFetch("incident").select(["number, assigned_to"]);
  console.log(response);
} catch (error) {
  console.log(error);
}
