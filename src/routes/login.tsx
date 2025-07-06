import { Route } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { Login } from "../components/Auth/Login";

export const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});
