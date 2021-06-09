import { GlideFetch } from "./GlideFetch";

try {
  new GlideFetch("incident")
    .select(["number, assigned_to"])
    .then((response) => {
      console.log(response);
    });
} catch (error) {
  console.log(error);
}
