
import { Route } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { Home } from "../components/home/Home";

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
