import { fetchUser } from "./profile/gateway.js";
import printProfile from "./profile/printProfile";

fetchUser("github").then((userData) =>
  printProfile({
    name: userData.name,
    company: userData.location,
  })
);
