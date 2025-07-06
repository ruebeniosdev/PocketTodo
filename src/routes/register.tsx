
import { Route } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { Register } from "../components/Auth/Register";

export const registerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: Register,
});
